const { users } = require('../data/user');

const byId = ({ userId }) =>
  users.find(user => user.id === parseInt(userId, 10));

const all = () => users;

module.exports = { byId, all };
