const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Dog {
    id: Int!
    breed: String!
    displayImage: String!
  }

  type Todo {
		id: String!
		type: String!
	}
`;