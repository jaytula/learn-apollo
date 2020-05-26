const { gql } = require('apollo-server-express');
const { lruCache } = require('../../data');
const {generate} = require('shortid');

exports.typeDefs = gql`
  extend type Mutation {
    addTodo(type: String!): Todo
  }
`;

exports.resolvers = {
  Mutation: {
    addTodo: (_, { type}) => {
      const id = generate();
      const todo = { type, id};
      lruCache.set(id, type);
      return todo;
    }
  }
}