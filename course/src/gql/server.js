const { ApolloServer } = require('apollo-server-lambda');
const { buildFederatedSchema } = require('@apollo/federation');
const { typeDefs, resolvers } = require('./schemas/course');
const Course = require('../services/course');
const UserCourse = require('../services/userCourse');

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: { UserCourse, Course }
});

const handler = server.createHandler();

module.exports = { handler };
