/*************** Includes ****************/

//Includes nos permite saber si un elemento está dentro de un arreglo
let numbers = [1, 2, 3, 7, 8];

if (numbers.includes(7)) {
	console.log('Si se encuentra el valor');
} else {
	console.log('No se encuentra el valor');
}


/*************** Elevar a potencias ****************/
let base = 4;
let exponent = 3;

let result = base ** exponent;

console.log(result);