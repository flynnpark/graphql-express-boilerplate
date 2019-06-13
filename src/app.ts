import cors from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import logger from 'morgan';
import resolvers from './api/v1/resolvers';
import typeDefs from './api/v1/typeDefs';

const setMiddleware = (app: GraphQLServer): void => {
  const { express } = app;
  express.use(cors());
  express.use(logger('dev'));
  express.use(helmet());
};

const initGraphQLServer = (): GraphQLServer => {
  const app: GraphQLServer = new GraphQLServer({
    typeDefs,
    resolvers
  });
  setMiddleware(app);
  return app;
};

export default initGraphQLServer();
