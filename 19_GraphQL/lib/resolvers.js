'use strict'

// Configurar los resolvers
// Debe tener una propiedad igual al nombre, ésta será una función que se ejecuta cuando llamamos la query


const queries = require('./queries');
const mutations = require('./mutations');

module.exports = {
	Query: queries,
	Mutation: mutations
}