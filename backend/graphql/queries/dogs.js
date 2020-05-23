const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  extend type Query {
    dogs: [Dog]!
  }

  type Dog {
    id: Int!
    breed: String!
  }
`;

exports.resolvers = {
  Query: {
    dogs: async () => {
      return [
        { id: 1, breed: 'labrador retrievers' },
        { id: 2, breed: 'german shepherd' },
        { id: 3, breed: 'golden retriever' },
        { id: 4, breed: 'french bulldog' },
        { id: 5, breed: 'bulldog' },
      ];
    },
  },
};
