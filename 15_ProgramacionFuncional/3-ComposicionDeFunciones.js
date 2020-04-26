//Closures en programación funcional

/*
	Los Closures son funciones que retornan otras funciones y recuerdan el scope en el que fueron creadas, es decir, son funciones que utilizan principios de la programación funcional, no modifica el valor de variables u objetos externos, más bien, utilizan sus propias variables independientes (a partir de los parámetros que reciban estas funciones) para dar resultados correctos.
*/

function buildSum(a) {
	return function(b) {
		return a += b;
	}
}

const addFive = buildSum(5);
console.log(addFive(5)); // 10

const buildSum2 = a => b => a + b
const addFive2 = buildSum2(5);
console.log(addFive2(5)); // 10
console.log(buildSum(5)(5)); // 10

// Currying

/*
	Gracias a los closures es posible implementar el Currying, descomponer funciones complejas en otras funciones más pequeñas donde cada función recibe un solo argumento. A continuación un ejemplo:
*/

// Sin Currying
function sumThreeNumbers(a, b, c) {
        return a + b + c
}

console.log(sumThreeNumbers(1, 2, 3)) // 6

function sumThreeNumbers(a) {
        return function(b) {
                return function(c) {
                        return a + b + c
                }
        }
}

console.log(sumThreeNumbers(1)(2)(3)) // 6

// Con arrow functions
const sumThreeNumbers = a => b => c => a + b + c;