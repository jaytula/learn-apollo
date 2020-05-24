const { gql } = require('apollo-server-express');

const data = require('../../data');

exports.typeDefs = gql`
  extend type Query {
    dog(breed: String!): Dog
  }
`;

exports.resolvers = {
  Query: {
    dog: async (parent, { breed }) => {
      return data.dogs.find((e) => e.breed === breed);
    },
  },
};
