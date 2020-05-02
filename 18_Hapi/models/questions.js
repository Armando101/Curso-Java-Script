'use stric'

class Questions {
	constructor(db) {
		this.db = db;
		this.ref = this.db.ref('/');
		this.collection = this.ref.child('questions') // Creo la colección en firebase
	}

	async create(data, user) {
		data.owner = user;
		const question = this.collection.push(data);

		return question.key;
	}
}


module.exports = Questions;