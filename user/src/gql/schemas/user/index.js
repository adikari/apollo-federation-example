const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type User {
    id: ID!
    email: String
    firstname: String
    lastname: String
  }

  extend type Query {
    user(id: ID!): User
    allUsers: [User]
  }
`;

const resolvers = {
  Query: {
    user: (_, { id }, { User }) => User.byId({ userId: parseInt(id, 10) }),
    allUsers: (_, __, { User }) => User.all()
  }
};

module.exports = { typeDefs, resolvers };
