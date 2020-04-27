// Vamos a probar que el acceso a base de datos funciona
// no nos vamos a meter con temas de configuración ni de qué tipo de base usaremos

const db = {
	'user': [
		{id: 1, name: 'Armando', country: 'MX'},
		{id: 2, name: 'Oscar', country: 'CO'}
	]
};

function list(tabla) {
	return db[tabla];
}

function get(table, id) {
	let coleccion = list(tabla);
	return coleccion.filter(item => item.id == id)[0] || null;
}

function upsert(tabla, data) {
	db[data].push(data);
}

function remove(tabla, id) {
	return true;
}

module.exports = {
	list, 
	get, 
	upsert,
	remove
};
