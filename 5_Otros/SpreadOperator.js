let numeros = [2, 3, 5];

function sumar(n1, n2, n3) {
	return n1 + n2 + n3;
}

// Podemos pasarle a la función un arreglo de la siguiente manera
let resultado = sumar.apply(this, numeros);
console.log(resultado);

// Otra forma es con el operador de propagación
// El operador nos permite pasar cada elemento del arreglo como argumentos de la función
let resultado2 = sumar(...numeros);
console.log(resultado2);

// Podemos convinar dos o más arreglos de la siguiente manera
let otro_arreglo = ['Hola', 'mundo'];
console.log([...numeros, ...otro_arreglo]);

// También podemos mezclar objetos

// Definimos dos objetos
let objeto = {
	clave: 3
};

let objetoDos = {
	otra_clave: 4
};

// Los imprimimos por separado
console.log(objeto);
console.log(objetoDos);

// Definimos un nuevo objeto que tiene los atributos de los dos anteriores
let newObject = {
	...objeto,
	...objetoDos
}

console.log(newObject);

/************************* Ciclo for of y for in  **************/

// For of se puede aplicar sobre cualquier objeto iterable
// Un objeto iterable es una cadena, un arreglo o algunos objetos como map

let arreglo = [2, 3, 4];

for(numero of arreglo) {
	console.log(numero);
}

function saluda_a_todos() {
	for(nombre of arguments) {
		console.log('Hola '+nombre);
	}
}

saluda_a_todos('Armando', 'Raul', 'Julio', 'Ernesto');


// El ciclo for in itera sobre las propiedades, no sobre los valores
// For in itera sobre las propiedades de cualquier objeto
let usuario = {
	nombre: 'Armando',
	edad: '22'
}

// Iteramos sobre las propiedades
for(propiedad in usuario) {
	console.log(propiedad);
}

// Iteramos sobre los valroes
for(propiedades in usuario) {
	console.log(usuario[propiedades]);
}