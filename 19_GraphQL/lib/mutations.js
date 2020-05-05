'use strict'

const connectDb = require('./db');

module.exports = {
	createCourse: async (root, { input }) => {
		const defaults = {
			teacher: '',
			topic: ''
		};

		const newCourse = Object.assign(defaults, input);

		let db;
		let course;
		try {
			db = await connectDb();	// Nos conectamos a la BD
			course = await db.collection('courses').insertOne(newCourse); // Insertamos el elemento
			newCourse._id = course.insertedId
		} catch(error) {
			console.error(error);
		}

	return newCourse;	// Devuelvo la información que me mandaron más el id que me da mongo
	}

};