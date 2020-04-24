// Aquí crearemos la lógica de almacenamiento
// config guarda el enlace con usuario y contraseña de la conexión a la DB en Atlas
const config = require('./config');
const db = require('mongoose');
const Model = require('./model');

// mongoose tiene sus propias alternativas para usar promesas
// Aquí indicamos que utilice las promesas nativas de JS
// global es un objeto nativo de JS, global.Promise hace referencia a las promesas nativas de JS
db.Promise = global.Promise;

// Nos conectamos a la base de Atlas
db.connect(config.connection, {
	useNewUrlParser: true,
	dbName: 'telegrom'
});

console.log('[db] Conectada con éxito');

function addMessage(message) {
	// list.push(message);
	const myMessage = new Model(message);
	myMessage.save();
}

async function getMessages() {
	// return list;
	const messages = await Model.find();
	return messages;
}

module.exports = {
	add: addMessage,
	list: getMessages,
	// get
	// update
	// delete
}