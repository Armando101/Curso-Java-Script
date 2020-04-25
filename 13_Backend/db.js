const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
	await db.connect(url, {
		useNewUrlParser: true,
		dbName: 'telegrom'
	});

	console.log('[db] Conectada con éxito');

}

module.exports = connect;