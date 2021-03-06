'use strict'

const connectDb = require('./db');
const { ObjectID } = require('mongodb');
const errorHandler = require('./errorHandler');


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
			errorHandler(error);
		}

	return newCourse;	// Devuelvo la información que me mandaron más el id que me da mongo
	},

	createPerson: async (root, { input }) => {

		let db;
		let student;
		try {
			db = await connectDb();	// Nos conectamos a la BD
			student = await db.collection('students').insertOne(input); // Insertamos el elemento
			input._id = student.insertedId
		} catch(error) {
			errorHandler(error);
		}

	return input;	// Devuelvo la información que me mandaron más el id que me da mongo
	},

	editCourse: async (root, { _id, input }) => {
		let db;
		let course;
		try {
			db = await connectDb();	
			await db.collection('courses').updateOne(
				{ _id: ObjectID(_id)}, // Busco el id que me mandan
				{ $set: input }	// Actualizo la inforamción del id que me mandana
			); 
			course = await db.collection('courses').findOne({_id: ObjectID(_id)});
			
		} catch(error) {
			errorHandler(error);
		}

	return course;
	},
	editPerson: async (root, { _id, input }) => {
		let db;
		let student;
		try {
			db = await connectDb();	
			await db.collection('students').updateOne(
				{ _id: ObjectID(_id)},
				{ $set: input }
			); 
			student = await db.collection('students').findOne({_id: ObjectID(_id)});
			
		} catch(error) {
			errorHandler(error);
		}

	return student;
	},

	addPeople: async(root, { courseID, personID }) => {
		let db;
		let person;
		let course;

		try {
			db = await connectDb();
			course = await db.collection('courses').findOne({_id: ObjectID(courseID)});
			person = await db.collection('students').findOne({_id: ObjectID(personID)});

			if (!course || !person) throw new Error('La persona o el curso no existe');

			await db.collection('courses').updateOne(
				{_id: ObjectID(courseID)},
				{ $addToSet: { people: ObjectID(personID)} // $addToSet comprueba si es un arreglo, si no lo es, crea el arreglo y añade el valor del ID de persona
			});

		} catch (error) {
			errorHandler(error);
		}

		return course;
	}

};