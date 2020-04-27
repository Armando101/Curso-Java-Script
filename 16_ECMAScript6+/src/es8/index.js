/************************ Object.entries ***********************/
// Nos permite devolver la clave y valor de una matriz

const data = {
	frontend: 'Armando',
	backend: 'Isabel',
	design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


/************************ Object.values ***********************/
// Me devuelve los valores de un objeto

const values = Object.values(data);
console.log(values);
console.log(values.length);


/************************ Padding ***********************/
// Permite anteponer una cadena vacía o con elementos
// El primer argumento indica el número máximo de caracteres que debe tener la cadena incluyendo la cadena en sí

const string = 'hello';
console.log(string.padStart(7, '--'));
console.log(string.padEnd(7, '--'));


/************************ Asyn Await ***********************/
const helloWorld = (val) => {
	return new Promise((resolve, reject) => {
		(val)
		? setTimeout(() => {
			resolve('Hello World');
		}, 3000)
		: reject(new Error('Se detectó un error en la Promesa'));
	});
};

/*
	// Esta no es una buena manera de manejar async await
const helloAsync = async () => {
	const hello = await helloWorld(true);
	console.log(hello);
}


helloAsync();
*/


// Esta es una mejor manera para trabajar con async await
const anotherFunction = async () => {
	try {
		const hello = await helloWorld(true);
		console.log(hello);
	} catch (error) {
		// console.log('Se produjo un error');
		console.log(error);
	}
};

anotherFunction();