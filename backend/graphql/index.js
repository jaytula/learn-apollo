const fs = require('fs');
const path = require('path');
const lodash = require('lodash');
const commonSchema = require('./commonSchema');

const allFiles = [
  ...fs
    .readdirSync(path.join(__dirname, 'queries'))
    .map(fileName => `./queries/${fileName}`),
  ...fs
    .readdirSync(path.join(__dirname, 'mutations'))
    .map(fileName => `./mutations/${fileName}`),
];

const endpointTypeDefs = [];
const endpointResolvers = [];

allFiles.forEach(filePath => {
  const { typeDefs, resolvers } = require(filePath);
  endpointTypeDefs.push(typeDefs);
  endpointResolvers.push(resolvers);
});

const typeDefs = [commonSchema, ...endpointTypeDefs];
const resolvers = lodash.merge(...endpointResolvers);

module.exports = {
  typeDefs,
  resolvers,
};