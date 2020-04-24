// Aquí crearemos la lógica de almacenamiento

// Crearemos un moock
// Un moock es falsear la base de datos o un servicio para validar que todo funciona correctamente

// En esta lista vamos a guardar los mensajes
const list = [];

function addMessage(message) {
	list.push(message);
}

function getMessages() {
	return list;
}

module.exports = {
	add: addMessage,
	list: getMessages,
	// get
	// update
	// delete
}