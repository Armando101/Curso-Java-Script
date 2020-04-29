// store = require('../../../store/dummy');
const config = require('../../../config');

let store;
if (process.env.REMOTE_DB) {
	store = require('../../../store/remote-mysql');
} else {
	store = require('../../../store/mysql');
}

const controller = require('./controller');

module.exports = controller(store);
