const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Este esquema permite definir propiedades y tipos através de un objeto
// Podemos definir tipos complejos como en message
const mySchema = new Schema({
	user: String,
	date: String,
	message: {
		type: String,
		required: true
	},
	date: Date
});

// Pasamos dos parámetros a model
// Cómo se llamará la colección en mongo (equivalente a tablas en mySQL)
// Esquema
const model =  mongoose.model('Message', mySchema);
module.exports = model;