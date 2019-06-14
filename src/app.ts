import cors from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import logger from 'morgan';
import schema from './schema';

const setMiddleware = (app: GraphQLServer): void => {
  const { express } = app;
  express.use(cors());
  express.use(logger('dev'));
  express.use(helmet());
};

const initGraphQLServer = (): GraphQLServer => {
  const app: GraphQLServer = new GraphQLServer({ schema });
  setMiddleware(app);
  return app;
};

export default initGraphQLServer();
