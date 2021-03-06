const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql');

const PORT = process.env.PORT || 3000;
const app = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: {
    settings: { 'request.credentials': 'same-origin' },
  },
});

apolloServer.applyMiddleware({
  app,
  path: '/graphql',
  cors: {
    origin: process.env.ALLOWED_ORIGIN,
    credentials: true,
  },
});

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
