const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);	// Evita problemas con la lectura de caracteres especiales
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/test?retryWrites=true&w=majority`;

class MongoLib {
	constructor() {
		this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true});
		this.dbName = DB_NAME;
	}

	connect() {
		// Patron Singleton para que sólo haya una instancia
		if (!MongoLib.connection) {
			MongoLib.connection = new Promise((resolve, reject) => {
				this.client.connect(err => {
					if (err) {
						reject(err);
					}
					console.log('Connected succesfully to mongo');
					resolve(this.client.db(this.dbName));
				});
			});
		}

		return MongoLib.connection;
	}

	getAll(collection, query) {
		return this.connect().then(db => {
			return db.collection(collection).find(query).toArray();
		});
	}

	get(collection, id) {
		return this.connect().then(db => {
			return db.collection(collection).findOne({ _id:ObjectId(id)});
		});

	}

	create(collection, data) {
		return this.connect().then(db => {
			return db.collection(collection).insertOne(data);
		}).then(result => result.insertedId);

	}

	// $set indica que voy a colocar datos
	// upsert true indica que funciona como update o patch
	update(collection, id, data) {
		return this.connect().then(db => {
			return db.collection(collection).updateOne({ _id:ObjectId(id)}, { $set: data }, { upsert: true });
		}).then(result => result.upsertedId || id);

	}

	delete(collection, id) {
		return this.connect().then(db => {
			return db.collection(collection).deleteOne({ _id:ObjectId(id)});
		}).then(()=>id);

	}
}

module.exports = MongoLib;