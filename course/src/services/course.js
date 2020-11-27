const { courses } = require('../data/course');

const byId = ({ courseId }) => courses.find(course => course.id === courseId);

const all = () => courses;

module.exports = { byId, all };
