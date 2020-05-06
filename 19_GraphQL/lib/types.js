// Auí tendremos los resolvers para los tipos

'use strict'

const connectDb = require('./db');
const { ObjectID } = require('mongodb');
const errorHandler = require('./errorHandler');

const types = {
	Course: {
		// Esta función se ejecuta para el tipo people que se encuentra en cursos
		// Cuano se mande llamar el campo people de Course que contiene un arreglo de students
		// Se ejecutará está función y se le pasará como argumento el arreglo de students
		people: async ( { people } ) => {
			let db, peopleData, ids;
			try {
				db = await connectDb();
				ids = people ? people.map(id => ObjectID(id)) : [];
				peopleData = ids.length > 0 ?
				await db.collection('students').find(
					{ _id: {$in: ids}} // Le pasamos el arreglo de ids
				).toArray()
				: [];
				console.log(people);
				console.log({people});
			} catch(error) {
				errorHandler(error);
			}

			return peopleData;
		}
	},

	Person: {
		// __resolverType es una propiedad que requieren las interfaces
		// Esto es para que cuando esté resolviendo los campos me pueda decir si es de tipo estudiante o de tipo monitor
		__resolveType: ( person, context, info) => {
			if (person.phone) {
				return 'Monitor';
			} else {
				return 'Student'
			}
		}
	}
}

module.exports = types;