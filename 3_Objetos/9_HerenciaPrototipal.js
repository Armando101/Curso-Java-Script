function Hero(name) {
	this.name = name;
}

Hero.prototype.saludar = function () {
	console.log(`Soy el super héroe ${this.name}`);
};

const zelda = new Hero('Zelda');

// Propiedades de la instancia
console.log('Name: ', zelda.name);  

// Propiedades de la clase
console.log('Saludar: ', zelda.saludar);

// Propiedades heredadas ej: toString
console.log('toString', zelda.toString);

// hasOwnProperty (De dónde sale cierto método, pertenece al objeto de manera directa o fue producto de la herencia)
console.log('Zelda.hasOwnProperty("name"): ', zelda.hasOwnProperty('name'));
console.log('Zelda.hasOwnProperty("saludar"): ', zelda.hasOwnProperty('saludar'));

// Podemos ver en el navegador que tenemos una propiedad __proto__
// En esta podemos encontrar los métodos que hemos declarado como saludar
// Podemos ver también que tenemos una segunda propiedad __proto__ y en esta hay otras propiedades como toString y hasOwnProperty

// Podemos verlo de la siguiente manera
//console.log(zelda.__proto__);
// El problema es que no es un estandar puede o no funcionar en todos los navegadores
// Por esa razón lo hacemos así:
console.log(Object.getPrototypeOf(zelda));

// Podemos ver que Object.getPrototypeOf(zelda) === Hero.prototype
const prototypeOfZelda = Object.getPrototypeOf(zelda);

console.log(prototypeOfZelda === Hero.prototype);

// Declarmos un nuevo método
Hero.prototype.fight = function() {
	console.log("FIGHT!!");
}

// Lo que hace internamete JS es buscar el método fight dentro de zelda
// Como no lo encuentra pasa a buscarlo en el prototype y ahí si lo encuentra
// Si no lo encuentra (como sucedería en el caso de toString) buscará el el prototype del prototype

zelda.fight();

// ¿Cuál es el prototype del prototype?
// Es Object, Object es el punto de partida de todo objeto en JS
// Esto involucra las funciones, las funciones son objetos de JS
