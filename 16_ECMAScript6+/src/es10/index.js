/*********************** Flat ***********************/
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array);
console.log(array.flat()); // Indico el nivel como argumento, el valor por default es 1
console.log(array.flat(2)); // [1, 2, 3, 1, 2, 3, 1, 2, 3]


/*********************** Flat Map ***********************/
// Me permite mapear un elemento y aplanarlo
let array2 = [1, 2, 3, 4, 5];
console.log(array2.map(value => [value, value * 2])); // Arreglo de arreglos
console.log(array2.flatMap(value => [value, value * 2])); // Arreglo de numeros


/*********************** Trim Start y Trim End ***********************/
// Nos permite elimnar espacios al inicio
let hello = '    hello world';

console.log(hello);
console.log(hello.trimStart());

let hello2 = 'Hello World  	';
console.log(hello2 + ' another string');
console.log(hello2.trimEnd() + ' another string');


/*********************** Optional catch ***********************/
// Antes era necesario incluir el parámetro error incluso si no se iba a usar
// Before ECMAScript10
try {
	throw 'Soy un error forzado';
} catch (error) {
	console.log('Hello');
}

// ECMAScript10
try {
	throw 'Soy un error forzado';
} catch {
	console.log('Hello');
}

/*********************** From entries ***********************/
// Transforma un arreglo a objeto

let entries = [["name", "Armando"], ["age", 22], ["country", "MX"]];
console.log(Object.fromEntries(entries));


/*********************** Symbol Object ***********************/
let mySymbol = 'Descripción de mi Symbolo';
let symbol = Symbol(mySymbol); // Nos permite añadir una descripción al objeto
console.log(symbol.description)

