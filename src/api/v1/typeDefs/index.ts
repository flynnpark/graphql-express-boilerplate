import { gql } from 'apollo-server';
import fs from 'fs';

const userTypeDefs = fs.readFileSync(__dirname.concat('/user.graphql'), 'utf8');

const typeDefs = `
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
  ${userTypeDefs}
`;

export default typeDefs;
