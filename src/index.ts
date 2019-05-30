import { GraphQLServer } from 'graphql-yoga';

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

const server: GraphQLServer = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost: 4000'));
