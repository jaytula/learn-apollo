const { gql } = require('apollo-server-express');
const { lruCache } = require('../../data');

exports.typeDefs = gql`
  extend type Query {
    todo(id: String!): Todo
  }
`;

exports.resolvers = {
  Query: {
    todo: (_, { id }) => {
      return { id, type: lruCache.get(id) };
    },
  },
};
