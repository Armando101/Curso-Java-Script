// Este archivo se encargará de decidir todo lo que sucede creando las funciones necesarias

const store = require('./store');
const socket = require('../../socket').socket;

// Guardar mensajes
// Las promesas me servirán para decirle al network que algo salió bien o mal
function addMessage(chat, user, message, file) {
	return new Promise((resoleve, reject) => {
		if (!chat || !user || !message) {
			console.error('[messageController]: No hay usuario o mensaje');
			return reject('Los datos son incorrectos');
		}

		// http://localhost:3000/app -> accede directamente a la carpeta public
		let fileUrl = '';
		if (file) {
			fileUrl = 'http://localhost:3000/app/files/' + file.filename;
		}

		const fullMessage = {
			chat: chat,
			user: user,
			message: message,
			date: new Date(),
			file: fileUrl
		};		
		console.log(fullMessage);
		
		// Lo agregamos a la base de datos
		store.add(fullMessage);

		socket.io.emit('message', fullMessage);

		resoleve(fullMessage);
	});
}

function getMessages(filterUser) {
	return new Promise((resoleve, reject) => {
		resoleve(store.list(filterUser));
	});
}

function updateMessage(id, message) {
	return new Promise( async (resolve, reject) => {
		if (!id || !message) {
			reject('Invalid data');
			return false;
		}
		const result = await store.updateText(id, message);
		resolve(result);
	});
}

function deleteMessage(id) {
	return new Promise((resoleve, reject) => {
		if (!id) {
			reject('Id inváldo');
			return false;
		}
		store.remove(id)
		.then(()=> {
			resoleve();
		})
		.catch((err) => {
			reject(e);
		});
	})
}

module.exports = {
	addMessage,
	getMessages,
	updateMessage,
	deleteMessage
};