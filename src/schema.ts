import { DocumentNode } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import userResolvers from './api/v1/user/resolvers';

const rawTypeDefs: DocumentNode[] = fileLoader(
  path.join(__dirname, '/api/v1/**/typeDefs/*.graphql')
);

const typeDefs = mergeTypes(rawTypeDefs);
const resolvers = mergeResolvers(userResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
