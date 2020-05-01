'use strict'

const bcrypt = require('bcrypt');

class Users {
	constructor(db) {
		this.db = db;
		// Firebase trabaja con referencias
		// La referencia es la raiz de la base de datos
		this.ref = this.db.ref('/');
		this.collection = this.ref.child('users'); // Creo una colección llamada usuarios
	}

	async create(data) {
		// Destructuro el objeto con el payload enviado.
		// Esto porque  Hapi lo decora con un prototipo null que no es compatible con firebase
		const user = {
			...data
		}
		// Encriptamos la contraseña del usuario
		user.password = await this.constructor.encrypt(user.password);

		// El método push crea una nueva referencia dentro de la colección
		console.log(user);
		const newUser = this.collection.push(user);
		//newUser.set(data); // Indico que guarde la información que me llega

		// La referencia del nuevo objeto creado esta dentro de key
		return newUser.key;
	}

	static async encrypt(password) {
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		return hashedPassword;
	}
}

module.exports = Users;