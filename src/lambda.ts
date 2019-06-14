import { GraphQLServerLambda } from 'graphql-yoga';
import schema from './schema';

const lambda: GraphQLServerLambda = new GraphQLServerLambda({
  schema
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
