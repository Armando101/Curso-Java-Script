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
		
		// La referencia del nuevo objeto creado esta dentro de key
		return newUser.key;
	}

	async validateUser(data) {
		const userQuery = await this.collection.orderByChild('email').equalTo(data.email).once('value'); // once mq garantiza que va a tener un valor, ya sea correcto o incorrecto
		const userFound = userQuery.val(); // Transforma el valor en un objeto
		if (userFound) {
			const userId = Object.keys(userFound)[0];
			const passwordRight = await bcrypt.compare(data.password, userFound[userId].password); 
			const result = (passwordRight) ? userFound[userId] : false;
			return result;
		}

		return false;
	}

	static async encrypt(password) {
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		return hashedPassword;
	}
}

module.exports = Users;