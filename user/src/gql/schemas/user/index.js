const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type User @key(fields: "id") {
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
    user: (_, { id }, { User }) => User.byId({ userId: id }),
    allUsers: (_, __, { User }) => User.all()
  },
  User: {
    __resolveReference: ({ id }, { User }) => User.byId({ userId: id })
  }
};

module.exports = { typeDefs, resolvers };
