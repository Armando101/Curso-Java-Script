'use strict'

// Configurar los resolvers
// Debe tener una propiedad igual al nombre, ésta será una función que se ejecuta cuando llamamos la query

const connectDb = require('./db');
const { ObjectID } = require('mongodb'); // Me transforma un objeto Id de string a Objeto ID de mongo, esto para hacer la consulta a la BD

module.exports = {
	Query: {
	  getCourses: async () => {
	  	let db, courses = [];
	  	try {
	  		db = await connectDb();
	  		courses = await db.collection('courses').find().toArray();
	  	} catch (error) {
	  		console.error(error);
	  	}

	    return courses
	  },
	  getCourse: async (root, { id }) => {
	  	let db, course;
	  	try {
	  		db = await connectDb();
	  		course = await db.collection('courses').findOne({_id: ObjectID(id)});
	  	} catch (error) {
	  		console.error(error);
	  	}
	  	
	    return course;
	  },
	  saludo: () => {
	    return 'Hola a todos'
	  }
	}
}