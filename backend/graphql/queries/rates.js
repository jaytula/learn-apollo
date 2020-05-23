const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  extend type Query {
    rates(currency: String!): [CurrencyData]!
  }

  type CurrencyData {
    currency: String!
    rate: Float!
  }
`;

exports.resolvers = {
  Query: {
    rates: async (parent, { currency }) => {
      const rateData = { USD: 1, KRW: 0.08, THB: 0.04 };
      return Object.keys(rateData)
        .filter((key) => key !== currency)
        .map((key) => ({
          currency: key,
          rate: rateData[key] / rateData[currency],
        }));
    },
  },
};
