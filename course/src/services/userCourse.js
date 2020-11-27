const { userStartedCourses, userCompletedCourses } = require('../data/course');

const findUserCourse = (courses, userId) =>
  courses.filter(course => course.userId === userId);

const getUserStartedCourses = ({ userId }) =>
  findUserCourse(userStartedCourses, userId);

const getUserCompletedCourses = ({ userId }) =>
  findUserCourse(userCompletedCourses, userId);

module.exports = { getUserCompletedCourses, getUserStartedCourses };
