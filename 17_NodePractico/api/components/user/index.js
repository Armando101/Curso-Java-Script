// store = require('../../../store/dummy');
const config = require('../../../config');

let store, cache;
if (process.env.REMOTE_DB) {
	store = require('../../../store/remote-mysql');
	cache = require('../../../store/remote-cache')
} else {
	store = require('../../../store/mysql');
	cache = require('../../../store/redis')
}

const controller = require('./controller');

module.exports = controller(store, cache);
