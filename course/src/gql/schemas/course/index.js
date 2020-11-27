const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Course {
    id: ID!
    title: String
    duration: Int
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    startedCourses: [Course]
    completedCourses: [Course]
  }

  extend type Query {
    allCourses: [Course]
  }
`;

const resolvers = {
  Query: {
    allCourses: (_, __, { Course }) => Course.all()
  }
};

module.exports = { typeDefs, resolvers };
