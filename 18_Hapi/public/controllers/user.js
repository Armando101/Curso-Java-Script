'use strict'

function createUser(req, h) {
  	// Muestra el cuerpo de la petición
  	console.log(req.payload);
  	return 'Usuario Creado';
}

module.exports = {
	createUser: createUser
}