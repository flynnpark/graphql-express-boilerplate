import { gql } from 'apollo-server';
import fs from 'fs';

const linkTypeDefs = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

const userTypeDefs = fs.readFileSync(__dirname.concat('/user.graphql'), 'utf8');

export default [linkTypeDefs, userTypeDefs];
