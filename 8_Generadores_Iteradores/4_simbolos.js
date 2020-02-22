// Para declarar un símbolo usamos el constructos Symbol
// Retorna un valor del tipo simbol
// Los símbolos pueden tener un descriptor que pasamos en forma de cadena al constructos
// El descriptor no es el valor, sólo sirve de ayuda

let simbolo = Symbol('mi-simbolo');
let simbolo2 = Symbol('mi-simbolo');

// Si creo dos símbolos con el mismo descriptor no son iguales
console.log(simbolo == simbolo2);

// El principal uso de un simbolo es el de claves para propiedades de un objeto
// El nombre de una propiedad de un objeto puede ser un símbolo

// Creo un objeto
let objeto = {};

// Le asigno una propiedad como símbolo
objeto[simbolo] = function() {
	console.log('Mi nombre es un símbolo');
}

objeto[simbolo]();