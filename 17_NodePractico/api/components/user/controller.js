// const store = require('../../../store/dummy');
const nanoid = require('nanoid');
const TABLA = 'user';

// Exportamos contrller como una función para pasarle la base de datos con la que va a trabajar
// Esto es útil porque nos permite cambiar de base de datos sin modificar el código
// Sólo cambiamos la variable store de index.js
module.exports = function(injectedStore = require('../../../store/dummy')) {
	let store = injectedStore;
	function list() {
		return store.list(TABLA);
	}

	function get(id) {
		return store.get(TABLA, id);
	}

	function upsert(data) {
		const user = {
			name: data.name
		}
		if(data.id) {
			user.id = data.id;
		} else {
			user.id = nanoid();
		}
		return store.upsert(TABLA, data);
	}

	function remove(id) {
		return store.remove(TABLA, id);
	}
	return  {
		list,
		get,
		upsert,
		remove
	}
}
