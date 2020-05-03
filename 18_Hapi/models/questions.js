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

	async getLast(amount) {
		// limitToLast es una función de firebase que nos permite obtener los últimos registros 
		const query = await this.collection.limitToLast(amount).once('value');
		const data = query.val(); 	// Me devuelve la consulta
		return data;
	}

	async getOne(id) {
		const query = await this.collection.child(id).once('value');
		const data = query.val();
		return data;
	}

	async answer(data, user) {
		const answers = await this.collection.child(data.id).child('answers').push();
		answers.set({text: data.answer, user: user});
		return answers;
	}

	async setAnswerRight(questionId, answerId, user) {
		const query = await this.collection.child(questionId).once('value');
		const question = query.val();
		const answers = question.answers;

		if (!user.email === question.owner.email) {
			return false;
		}

		for(let key in answers) {
			answers[key].correct =(key === answerId);
		}

		const update = await this.collection.child(questionId).child('answers').update(answers);
		return update;
	}
}


module.exports = Questions;