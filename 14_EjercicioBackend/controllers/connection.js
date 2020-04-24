// Data base Conection

'use strict'

const KNEX = require('knex');

module.exports = KNEX({
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'base_taxi',
		port: 3306
	}
});

