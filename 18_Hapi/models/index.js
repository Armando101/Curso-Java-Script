'use strict'

const firebase = require('firebase-admin');
const serviceAccount = require('../firebase.json');

// Configuración de la base de datos
firebase.initializeApp({
	// Le paso las credenciales de la base que creé, estas vienen en el archivo que puedo descargar desde Firebase
	credential: firebase.credential.cert(serviceAccount),
	databaseURL: 'https://foro-overfow.firebaseio.com'
});

// Creamos la base de datos
const db = firebase.database();

const Users = require('./users');

module.exports = {
	users: new Users(db)
}