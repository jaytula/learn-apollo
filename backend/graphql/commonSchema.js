const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;