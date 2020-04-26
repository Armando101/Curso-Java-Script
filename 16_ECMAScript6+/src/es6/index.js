// ******************** Valores por defecto ********************

// Antes de ECMAScript 6
function newFunction(name, age, country) {
	var name = name || 'Armando';
	var age = age || 22;
	var country = country || 'MX';
	console.log(name, age, country); 
}

function newFunctionES6(name="Armando", age=22, country="MX") {
	console.log(name, age, country);
}

newFunctionES6();
newFunctionES6('Ricardo', 23, 'CO');

// ******************** Template literals ********************

// Before ECMAScript6
let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// ECMAScript6
let epicPhraseES6 = `${hello} ${world}`;
console.log(epicPhraseES6);
console.log('\n');

// ******************** Multilinea ********************

// Before ECMAScript6
let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit\n"
		 	+ "Cupiditate temporibus sunt, dolores perspiciatis placeat\n"
		 	+ "nesciunt delectus repellat eveniet quas maxime nemo veniam";

// ECMAScript6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit
Cupiditate temporibus sunt, dolores perspiciatis placeat
nesciunt delectus repellat eveniet quas maxime nemo veniam
`;

console.log(lorem);
console.log('\n');
console.log(lorem2);


// ******************** Desestructuración de elementos ********************
let person = {
	'name': 'Armando',
	'age': 22,
	'country': 'MX'
}

console.log(person.name, person.age, person.country);

// Aquí aplicamos la desetructuración
let { name, age, country } = person;

console.log(name, age, country);


// ********************  Spread Operator ********************
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// el Spread Operator nos permite unir contendio de otros arreglos con un nuevo arreglo
let education = ['David', ...team1, ...team2];

console.log('\n');
console.log(team1);
console.log(team2);
console.log(education);


// ********************  LET ********************

// let sólo está disponible en el scope
// esto es, sólo en el bloque en el que está asignado

{
	// Esto es accesible fuera de este bloque
	var globalVar = 'Global Var';
}

{	
	// La variable no es accesible fuera de este bloque
	let globalLet = 'Global Let';
	console.log(globalLet); // Esto sí es accesible
}

console.log(globalVar);
// console.log(globalLet);	// Esto arroga un error


// ******************** CONST ********************

// const no nos permite que el contenido sea modificado
const a = 'b';
// a = 'a'; 	// Esto nos da un error
console.log(a);
