const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql');


const PORT = process.env.PORT || 3000;
const app = express();

console.log('Allowed: ' + process.env.ALLOWED_ORIGIN)
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

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})