'use stric'

class Questions {
	constructor(db) {
		this.db = db;
		this.ref = this.db.ref('/');
		this.collection = this.ref.child('questions') // Creo la colección en firebase
	}

	async create(data, user) {
		// Es importante deconstruir data, de lo contrario marcará un error de:
		// Unsupported Media Type ya que de esta manera no se puede incluir en firebas
		const ask = {
			...data
		}

		console.log(ask);
		console.log(data);

		ask.owner = user;
		const question = this.collection.push(ask);

		return question.key;
	}
}


module.exports = Questions;