const Course = require('./course');
const { userStartedCourses, userCompletedCourses } = require('../data/course');

const findUserCourse = (courses, userId) => {
  const found = courses.filter(course => course.userId === userId);
  const courseIds = found.map(course => course.id);

  return Course.byIds({ courseIds });
};

const getUserStartedCourses = ({ userId }) =>
  findUserCourse(userStartedCourses, userId);

const getUserCompletedCourses = ({ userId }) =>
  findUserCourse(userCompletedCourses, userId);

module.exports = { getUserCompletedCourses, getUserStartedCourses };
