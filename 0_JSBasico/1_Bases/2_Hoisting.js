// Hoisting es cuando las variables	y funciones se declaran antes de que se procese el código.

// Desde ECMAScript 6 hacia delante ya no sucede el Hoisting porque se agrego dos nuevas variables, let y const.

// En este punto lo que hace JS es declarar la variable e inicializarla
// var miNombre = undefined // Esto lo hace internamente
console.log(miNombre);

// Declaramos la vaiable
var miNombre;

// La incializamos
miNombre = 'Armando';


// Mandamos llamar una función
// En este caso no marca error ya que las funciones se declaran al inicio.
hey();

// Declaramos la función
function hey() {
	console.log('Hola ', miNombre);
}

// Por buenas prácticas es recomendable declara las variables y funcines al inicio

// https://medium.com/@anamartinezaguilar/qu%C3%A9-es-el-hoisting-327870f67b36

// https://developer.mozilla.org/es/docs/Glossary/Hoisting

var x = 5;

(function hola () {
    console.log("x:", x); // undefined
    var x = 10;
    console.log("x:", x); // 10
}());