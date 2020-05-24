// una función anónima es una función que no tiene nombre
// Un callback es una función que se pasa como parámetro
function sumar(num1, num2, multiplicar, dividir) {
	const suma = num1 + num2;

	multiplicar(num1, num2);
	dividir(num1, num2);

	return suma;
}

// Mandamos llamar a la función sumar y como callback le paso funciones anónimas
let suma = sumar(5, 4,
	function(num1, num2) {
		console.log('La multiplicación es: ', num1*num2);
	}, 
	function(num1, num2) {
		console.log('La división es: ', num1/num2);
	}
);

console.log(suma);

function executor(funcion) {
	funcion();
}

function decirHola() {
	console.log("Hola");
}

// No pasamos el argumento con paréntesis
// Esto porque lo que pasamos es el nombre de la función
// Los paréntesis no son parte del nombre de la función
// Los paréntesis sólo se usan para llamar la función.
executor(decirHola);

// En JavaScript es muy común pasar funciones como argumento a otras funciones, sin embargo no se hace de la forma anterior.

// La siguiente forma es mucho más común
executor(function() {
	console.log("Hola");
});