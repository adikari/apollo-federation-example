const { ApolloServer } = require('apollo-server-lambda');
const { buildFederatedSchema } = require('@apollo/federation');
const { typeDefs, resolvers } = require('./schemas/user');
const User = require('../services/user');

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: { User }
});

const handler = server.createHandler();

module.exports = { handler };
