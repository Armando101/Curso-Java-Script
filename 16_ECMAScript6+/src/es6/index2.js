// ******************** Parámetros en objetos ********************
let name = 'Armando';
let age = 22;

// Before ECMAScript6
obj = { name: name, age: age };

// ECMAScript6
obj2 = { name, age };

console.log(obj);
console.log(obj2);


// ******************** Arrow function ********************

const names = [
	{ name: 'Armando', age: 22 },
	{ name: 'Oscar', age: 32 }
];

console.log('\n');

// Before ECMAScript6
let listOfNames = names.map(function(item) {
	console.log(item.name);
});

console.log('\n');

let listOfNamesES6 = names.map((item)=>{
	console.log(item.name);
});

// Variantes de una Arrow function
const listOfNames3 = (name, age) => {

};

const listOfNames4 = name => {

};

const square = num => num * num;


// ******************** Promesas ********************
/*
	Las promesas nos sirven para trabajar con asincronísmo.
*/

const helloPromise = (val) => {
	return new Promise((resolve, reject) => {
		if (val) {
			resolve('Hey todo bien, se resolvió la promesa');
		} else {
			reject('Ups!! La promesa no se resolvió correctamente');
		}
	});
};

helloPromise(true)
	.then(response => console.log(response))
	.catch(error => console.log(error));


// ******************** Clases ********************

class Calculator {
	constructor() {
		this.valueA = 0;
		this.valueB = 0;
	}
	sum(valueA, valueB) {
		this.valueA = valueA;
		this.valueB = valueB;
		return this.valueA + this.valueB;
	}
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

// ******************** import y export ********************
// import hello from './module';	// Esta sintaxis no funciona el agunas versiones de node
const hello = require('./module');	// Sintaxis antigua

console.log(hello());


/*

Con export default podemos exportar una variable, o función por defecto de un archivo así:

// *************************************

functionhello() {
	return'Hello!'
}

exportdefault hello
// *************************************

Para importarla no necesitamos hacerlo con su nombre, podemos usar cualquier nombre y por defecto nos traerá la única variable o función que exportó así:

// *************************************
import myHello from'./module'

console.log(myHello())

// *************************************
Export nombrado

A diferencia del export default en esta ocasión podemos exportar más de una variable o función que se encuentre en nuestro archivo, pero para importarlas debemos hacerlo con el nombre exacto de esa variable entre llaves.

Para exportar lo hacemos así:

// *************************************
exportfunctionhello() {
	return'Hello!'
}

exportconst bye = 'Bye!'

// *************************************
Podemos importar solo lo que necesitemos así:

// *************************************
import { hello } from'./module'

console.log(hello())
// *************************************

También podemos importar más de un elemento nombrando cada uno

// *************************************
import { hello, bye } from'./module'

console.log(hello())
console.log(bye)
// *************************************

Podemos cambiarles los nombres

// *************************************
import { hello, bye as byeGreeting } from'./module'

console.log(hello())
console.log(byeGreeting)
// *************************************

Y podemos importar todas las funciones de una sola vez

// *************************************
import * as allGreetings from'./module'

console.log(allGreetings.hello())
console.log(allGreetings.bye)
// *************************************

Anterior sintaxis

Cuando no nos funcione esta sintaxis porque no la tengamos soportada podemos usar la anterior

Para exportar lo hacemos así:

// *************************************
functionhello() {
	return'Hello!'
}

module.exports = hello
// *************************************

*/



// ******************** Generadores ********************

// El asterisco indica que es un generador
function* helloWorld() {
	if (true) {
		yield 'Hello, ';
	}

	if (true) {
		yield 'World'
	}
};


const generatorHello = helloWorld();

console.log(generatorHello.next());
console.log(generatorHello.next());
console.log(generatorHello.next());