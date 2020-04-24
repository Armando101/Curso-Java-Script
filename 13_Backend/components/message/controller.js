// Este archivo se encargará de decidir todo lo que sucede creando las funciones necesarias

// Guardar mensajes
// Las promesas me servirán para decirle al network que algo salió bien o mal
function addMessage(user, message) {
	return new Promise((resoleve, reject) => {
		if (!user || !message) {
			console.error('[messageController]: No hay usuario o mensaje');
			return reject('Los datos son incorrectos');
		}

		const fullMessage = {
			user: user,
			message: message,
			date: new Date()
		};		
		console.log(fullMessage);
		resoleve(fullMessage);
	});
}

module.exports = {
	addMessage,
};