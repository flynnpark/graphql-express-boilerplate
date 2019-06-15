import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import connectionOptions from './ormConfig';
import schema from './schema';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(helmet());

const apolloServer = new ApolloServer({
  schema,
  playground: true
});
apolloServer.applyMiddleware({ app });

const initializeDb = async (): Promise<void> => {
  try {
    createConnection(connectionOptions);
    console.log('Database connection initialized!');
  } catch (error) {
    console.log(error);
  }
};

initializeDb();

export default app;
