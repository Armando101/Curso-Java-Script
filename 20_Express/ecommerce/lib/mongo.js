const MongoClient = require('mongodb').MongoClient;
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}`;

class MongoLib {
	constructor() {
		this.client = new MongoClient(MONGO_URI, { useUnifiedTopology: true }, { useNewUrlParser: true });
		this.dbName = DB_NAME;
	}

	connect() {
		return new Promise((resolve, reject) => {
			this.client.connect(err => {
				if (err) {
					reject(err);
				}
				console.log('Connected succesfully to mongo');
				resolve(this.client.db(this.dbName));
			});
		});
	}

	getAll(collection, query) {
		return this.connect().then( db => {
			return db.collection(collection).find(query).toArray();
		});
	}
}

module.exports = MongoLib;