const { users } = require('../data/user');

const byId = ({ userId }) => users.find(user => user.id === userId);

const all = () => users;

module.exports = { byId, all };
