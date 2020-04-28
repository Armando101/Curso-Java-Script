//const store = require('../../../store/dummy');
const store = require('../../../store/mysql');
const controller = require('./controller');

module.exports = controller(store);
