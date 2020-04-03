//  Un clouse es la combinación del scope de una función y la función donde fue definida

// Esta función se llama así misma y se llama IIFE
// Inmediatly Invoce Function Expresion
(function() {
	let color = 'green';
	
	function printColor() {
		console.log(color);
	}

	printColor();
})();
// Si aquí intento acceder a color arrogarrá un error
//console.log(color);

// Funciones que regresan funciones
function makeColorPrinter(color) {
	let colorMessage = "The color is: "+color;

	return function () {
		console.log(colorMessage);
	}
}

let greenColorPrinter = makeColorPrinter("green");
// Para ejecutar la función que regresa tengo que volverla a llamar
// console.log(greenColorPrinter);
greenColorPrinter();

// Los clusers nos permitiran usar un feature que por defecto no viene en JS, las variables privadas.

// Variables "Privadas"

// Quiero hacer "n" una variable privada
function makeCounter(n) {
	let count = n;

	return {
		increase: function () {
			count ++;
		},
		decrease: function () {
			count --;
		},
		getCount: function () {
			return count;
		}
	};
}

let counter = makeCounter(7);
// Si intento acceder a n no puedo, obtengo undefined
// Por esta razón tampoco es posible modificar el valor n
// counter.count = 8;
console.log(counter.count);

// Accedemos a la variable por medio de la función getCount
console.log(counter.getCount());

// La única manera de modificar la variable es con las funciones ya definidas
counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount());