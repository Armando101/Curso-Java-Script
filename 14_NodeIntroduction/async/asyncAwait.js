async function hola(nombre) {
	return new Promise(function(resolve, reject) {
		setTimeout(function () {
			console.log(`Hola ${nombre} Estoy siendo asincrona`);
			resolve('Armando');
		}, 1500);
	});
}

async function hablar(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('Im Talking bla bla bla...');
			// reject('Hay un error');
			resolve(nombre);
		}, 1500);
	});
}

async function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('Adios ', nombre);
			resolve();
		}, 1000);
	});
}


async function main() {
	const nombre = await hola('Armando');
	await hablar();
	await hablar();
	await hablar();
	await adios(nombre);
	console.log('Terminando proceso...');
}

console.log('Iniciando proceso...');
main();