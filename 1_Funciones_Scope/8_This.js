// this es un concepto que tienen muchos lenguajes de programaicón principalmente en los que son orientados a objetos
// this en una clase a referencia a la instancia de dicha clase

/************* this en el scope global ***************/

// En este caso this hace referncia a window, a la ventana del navegador
//console.log(this);


/************* this en el scope de una función ***************/
function whoIsThis() {
	return this;
}

// En este caso también this hace referencia a window
// Esto sucede porque porque la función no es parte de una clase, es decir no es un método, por ejemplo, methids.whoIsThis
// window es un valor que se agrega a this por default a menos que usemos el modo strict
//console.log(whoIsThis());


/************* this en el scope de una función en strict mode ***************/
function whoIsThisStrict() {
	"use strict";
	return this;
}
// Obtenemos undefined
// strict mode nos ayuda a detectar los errores y arreglarlos temprano
// De esta manera obtendríamos un error porque this es undefined

console.log(whoIsThisStrict());


/************* this en el contexto de un objeto ***************/
const person = {
	name: 'Armando',
	saludar: function () {
		console.log(`Hola soy ${this.name}`);
	}
}

// This hacer referencia al objeto por lo que obtenemos la propiedad name del objeto person
person.saludar();

/************* this cuando sacamos a una función  de un objeto ***************/
const accion = person.saludar;
// En este caso no obtenemos nada
// Esto porque this deja de hacer referencia a la instancia de person
// this hace referencia al window y por lo tanto no obtenemos nungun valor ya que window no tiene la propiedad name
accion();


/************* this en el contexto de una "clase" ***************/

// Las clases como tal no existen en JS
// Clases es una forma común de llamarle a estas funciones especiales en JS
function Person(name) {
	// Esto es un constructor
	// No puedes asignarle un valor a this pero si le puedes asignar propiedades
	// this en un principio está vacio (this = {}), le vamos agregando valores
	this.name = name;
}

// Para crear métodos lo hacemos con prototype
Person.prototype.saludar = function() {
	// this hace referencia a la instancia de la clase no a la clase en sí
	console.log(`Me llamo ${this.name}`);
}

// Ahora creamos una instancia
const armando = new Person("Armando");
armando.saludar();