// Clear
console.clear();

// Imprime en consola
console.log('Something');

// Informacion
console.info('Informacion');

// Error
console.error('Im an error');

// Warning
console.warn('Im warning');

// Tabla
const tabla = [
	{
		a: 1,
		b: 'z'
	},
	{
		a: 2,
		b: 'y'
	}
];

console.log(tabla);
console.table(tabla);

// Groups
console.group('Conversacion');
console.log('Hola');
console.log('Bla bla bla');
console.log('Adios');
console.groupEnd('Conversacion');

// Ejemplo practico
function function1() {
	console.group('Funcion1');
	console.log('Esto es de la funcion 1');
	console.log('Esto tambien');
	console.log('Y esto tambien');
	function2();
	console.log('Regrese a la funcion 1');
	console.groupEnd('Funcion1');
}

function function2() {
	console.group('Funcion2');
	console.log('Esto es de la funcion 2');
	console.groupEnd('Funcion');	
}

function1();

// Contadores
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');

// Cronometro
console.time('Cronometro');
setTimeout(() => {
	console.timeEnd('Cronometro');
}, 1000);