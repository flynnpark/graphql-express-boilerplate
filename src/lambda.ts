import { GraphQLServerLambda } from 'graphql-yoga';
import resolvers from './api/v1/resolvers';
import typeDefs from './api/v1/typeDefs';

const lambda: GraphQLServerLambda = new GraphQLServerLambda({
  typeDefs,
  resolvers
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
