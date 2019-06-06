import cors from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import logger from 'morgan';

interface Parameter {
  name: string | undefined;
}

const typeDefs: string = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_: null | undefined, { name }: Parameter) =>
      `Hello ${name || 'World'}`
  }
};

const setMiddleware = (app: GraphQLServer) => {
  const { express } = app;
  express.use(cors());
  express.use(logger('dev'));
  express.use(helmet());
};

const initGraphQLServer = (): GraphQLServer => {
  const app: GraphQLServer = new GraphQLServer({ typeDefs, resolvers });
  setMiddleware(app);
  return app;
};

export default initGraphQLServer();
