// La importancia de la abstracción es que hagamos los objetos eficientes
// Esto es que sólo incluyamos lo que necesitamos

/******** Métodos accesores *******/

class Usuario {
	constructor(nombre) {this._name = nombre;}

	// Métodos accesores
	get name() {
		return this._name.charAt(0).toUpperCase() + this._name.slice(1);
	}

	set name(nombre) {
		this._name = nombre;
	}
}

// Este es un ejemplo del mal manejo de los datos
// Esto poque nos permite modificar directamente los atributos

let user = new Usuario("Marcos");
console.log(user._name);

user._name = "Armando";
console.log(user._name);

// Usamos métodos accesores
// Una propiedad no puede compartir el nombre de su getter
// Para obtener el nombre mandamos llamar el método get sin paréntesis
// Para modificar un atributo usamos el método set
user.name = "Marcos";

console.log(user.name);