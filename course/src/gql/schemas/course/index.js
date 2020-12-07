const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Course {
    id: ID!
    title: String
    duration: Int
    instructor: User
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    startedCourses: [Course]
    completedCourses: [Course]

    firstname: String @external
    lastname: String @external
    fullname: String @requires(fields: "firstname, lastname")
  }

  extend type Query {
    allCourses: [Course]
  }
`;

const resolvers = {
  Query: {
    allCourses: (_, __, { Course }) => Course.all()
  },
  Course: {
    instructor: course => ({ __typename: 'User', id: course.instructor })
  },
  User: {
    startedCourses: ({ id }, _, { UserCourse }) =>
      UserCourse.getUserStartedCourses({ userId: id }),

    completedCourses: ({ id }, _, { UserCourse }) =>
      UserCourse.getUserCompletedCourses({ userId: id }),

    fullname: ({ firstname, lastname }) => `${firstname} ${lastname}`
  }
};

module.exports = { typeDefs, resolvers };
