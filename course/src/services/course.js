const { courses } = require('../data/course');

const byId = ({ courseId }) => courses.find(course => course.id === courseId);

const byIds = ({ courseIds }) =>
  courses.filter(course => courseIds.includes(course.id));

const all = () => courses;

module.exports = { byId, all, byIds };
