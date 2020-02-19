// Las arrow functions son una forma alternativa de declarar funciones
// El nombre de la arrow function es el nombre de la variable donde está guardado
let demo = ()=> {
	console.log("Hola mundo");
}

// Las llaves pueden omitirse cuando el cuerpo de la función se compone de una sola línea de código.
let saludar = ()=> console.log("Hola Chavales");

// Siempre retorna el resultado de la única línea que se ejecuta sin la necesidad de la palabra return
suma = (a, b)=> a + b;

demo();
saludar();
console.log(suma(2, 3));

// Otra característica de las arrow functions es que no modifican el contexto this

let titular = {
	constructor: function() {
		console.log(this);
	},
	nombre: "Armando",
	apellido: "Rivera",
	nombre_completo: function() {
		setTimeout(function() {
			console.log(this);
			console.log(this.nombre + " " + this.apellido)
		},100);
	}
}

// La siguiente línea nos imprime undefined
// Esto porque setTime out modifica el contexto
// this dentro de setTimeout no contiene ningún parámetro llamado nombre
// Esto lo podemos comprobar imprimiendo this

// Para nombre_completo this es un contexto distinto
titular.nombre_completo();

// Para constructor es el objeto, en este caso si hay una propiedad nombre y apellido
titular.constructor();

// Para evitar este problema usamos arrow functions ya que estas no modifican el contexto

let auxiliar = {
	constructor: function() {
		console.log(this);
	},
	nombre: "Armando",
	apellido: "Rivera",
	nombre_completo: function() {
		setTimeout(() => {
			console.log(this);
			console.log(this.nombre + " " + this.apellido)
		},100);
	}
}

auxiliar.nombre_completo();
auxiliar.constructor();

// Cada vez que se envíe una función como argumento a otra función y se quiera conservar el valor de this, se utilizan las arrow functions.