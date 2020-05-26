const { gql } = require('apollo-server-express');
const { lruCache } = require('../../data');

exports.typeDefs = gql`
  extend type Mutation {
    updateTodo(id: String!, type: String!): Todo
  }
`;

exports.resolvers = {
  Mutation: {
    updateTodo: (_, { id, type}) => {
      const todo = { type, id };
      lruCache.set(id, type);
      return todo;
    }
  }
}