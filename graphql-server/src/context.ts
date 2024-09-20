import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions that together define the structure of queries.
const typeDefs = `
  type Query {
    hello: String
  }
`;

// Resolvers define the technique for fetching the types defined in the schema.
const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo GraphQL Server!',
  },
};

// Initialize the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`GraphQL server running at ${url}`);