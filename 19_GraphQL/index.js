'use strict'

const { graphql, buildSchema } = require('graphql');

// Definiendo el esquema
// Indico el nombre de la query
const schema = buildSchema(`
	type Query {			
		hello: String
		saludo: String
	}
`);

// Configurar los resolvers
// Debe tener una propiedad igual al nombre, ésta será una función que se ejecuta cuando llamamos la quiery
const resolvers = {
	hello: () => {
		return 'Hola Mundo';
	},
	saludo: () => {
		return 'Hola a todos';
	}
};

// Ejecutar el query hello
// Recibe el nombre del esquema, la query y el objeto resolvers 
graphql(schema, '{ saludo }', resolvers).then((data) => {
	console.log(data);
})