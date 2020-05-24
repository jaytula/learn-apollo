const { gql } = require('apollo-server-express');
const data = require('../../data/index');

exports.typeDefs = gql`
  extend type Query {
    dogs: [Dog]!
  }
`;

exports.resolvers = {
  Query: {
    dogs: async () => {
      return data.dogs;
    },
  },
};
