
// Un iterador es cualquier objeto que implementa el protocolo de iterador
// Es decir, cualquier objeto que implemente un método next que retorne un objeto con una propiedad value y una done implementa el protocolo y por lo tanto es un iterador

// Declaramos un interador
// Objeto: let iterador{}
let iterador_prueba = {
	// Implementa un método next()
	next() {
		// El método retorna un objeto que contiene dos propiedades
		return {
			value: null,
			done: true
		}
	}
};

// value: cualquier dato que queramos que el iterador produzca, puede ser un número, un objeto, una cadena, etc.

// done: booleano que indica si el iterador a terminado de producir valores a iterar o no. Si es false terminamos con la iteración.

// Hagamos un ejercicio
// Hacer un iterador que vaya desde el número 1 al 5
let iterador = {
	current_value: 1,
	next() {
		let result = {value: null, done: false};
		if(this.current_value > 0 && this.current_value <= 5) {
			result = {value:this.current_value, done:false};
			this.current_value += 1;
		}else{
			result = {done:true};
			// this.current_value = 1;
		}
		return result;
	}
};

// Ejecutamos el método next seis veces
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

// Como podemos ver los valores se producen uno a la vez, no es una estructura de datos que ya los contenga, esto beneficia el espacio en memoria
// La iteración es perezosa, esto quiere decir que puedo imprimirlo cuando yo quiera en el código a diferencia de en un ciclo que se imprimirian los elementos de golpe
// Por ejemplo, produzco tres elementos, espero un tiempo y después imprimo el siguiente

setTimeout(()=>console.log(iterador.next()), 3000);

// Otra característica es que no se puede retroceder o reiniciar, un iterador sólo se puede recorrer una vez

// Cada llamada después de que el iterador haya terminado de recorrerse debe retornar el valore final del iterador y la propiedad done como true

// Podemos usar un ciclo para iterarlos

let item = iterador.next();

while(!item.done) {
	console.log(item.value);
	item = iterador.next();
}