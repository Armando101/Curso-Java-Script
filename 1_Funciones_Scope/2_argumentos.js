
// Argumentos
// Parámetros

// Los parámetros se definen en los paréntesis donde se declara la función
// Los parámetros pueden recibir argumentos de cualquier tipo
// No se revisa la cantidad de argumentos envíados
// Se pueden enviar menos o más.
function cuadrado(numero = 0) {
	console.log(numero);
/*	
	if(numero == undefined)
		console.log("No hay argumentos");
*/
	return numero * numero;
}

console.log(cuadrado(2));

// Si no coloco argumentos no hay error e imprime NaN
// Lo ese argumento lo toma como undefined
// Para evitar esto puedo controlar la función con excepciones
// También puedo colocar argumentos por defecto
console.log(cuadrado());

// arguments es un arreglo que contiene todos los argumentos que le pasamos a la función
function sumaTodos() {
	return arguments[0] + arguments[1];
}

console.log(sumaTodos(1, 2, 3, 4, 5));
