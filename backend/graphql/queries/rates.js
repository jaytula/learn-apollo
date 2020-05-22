const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  extend type Query {
    rates(currency: String!): CurrencyData!
  }

  type CurrencyData {
    currency: String!
  }
`;

exports.resolvers = {
  Query: {
    rates: async (parent, { currency }) => {
      const rateData = { USD: 1, THB: 0.04 };
      return { currency: `${currency}: ${rateData[currency]}` };
    },
  },
};
