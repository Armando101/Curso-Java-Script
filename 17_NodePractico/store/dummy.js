// Vamos a probar que el acceso a base de datos funciona
// no nos vamos a meter con temas de configuración ni de qué tipo de base usaremos

const db = {
	'user': [
		{id: '1', name: 'Armando'},
		{id: '2', name: 'Oscar'}
	]
};

// Utilizamos async para que me devuelva una promesa
// En este caso se resuelve automáticamente
async function list(tabla) {
	return db[tabla];
}

async function get(tabla, id) {
	let coleccion = await list(tabla);
	return coleccion.filter(item => item.id == id)[0] || null;
}

async function upsert(tabla, data) {
	// Si no existe la tabla la crea
	if (!db[tabla]) {
		db[tabla] = [];
	}
	let coleccion = await list(tabla)
	coleccion.push(data);
	console.log(db);
	return coleccion;
}

async function remove(tabla, id) {
	let coleccion = await list(tabla);
	let idValid = await get(tabla, id);
	if (idValid) {
		coleccion.splice(coleccion.indexOf(idValid), 1);
		//return `Usuario con id: ${id} eliminado correctamente`;
		return coleccion
	}

	throw {
		status: 400,
		details: 'No se encontró el ID',
		message: 'Id inválido'
	};
}

module.exports = {
	list, 
	get, 
	upsert,
	remove
};
