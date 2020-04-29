//const store = require('../../../store/dummy');
//const store = require('../../../store/mysql');
const store = require('../../../store/remote-mysql');
const controller = require('./controller');

module.exports = controller(store);
