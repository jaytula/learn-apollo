const { gql } = require('apollo-server-express');
const { lruCache } = require('../../data');

exports.typeDefs = gql`
  extend type Query {
    todos: [Todo]
  }
`;

exports.resolvers = {
  Query: {
    todos: () => {
      const todos = [];
      lruCache.forEach((type, id) => todos.push({type, id}));
      return todos;
    }
  }
}