// Declaremos dos objetos comunes
// Vemos que estamos declarando dos objetos y dos funciones que hacen lo mismo
// Esto no es muy eficiente

/*
const zelda = {
	name: "Zelda", 
}

const link = {
	name: "Link", 
}

zelda.saludar = function () {
	console.log(`Hola soy ${this.name}`);
}

link.saludar = function () {
	console.log(`Hola soy ${this.name}`);
}

zelda.saludar();
link.saludar();
*/

// Seamos más eficientes
// Esto funciona pero nos damos cuenta que cada vez que creamos una instancia volvemos a declara la función saludar
// Esto puede ser más eficiente

/*
function Hero(name) {
	const hero = {
		name: name
	}
	hero.saludar = function () {
		console.log(`Hola soy ${this.name}`);
	}

	return hero;
}

const zelda = Hero("Zelda");
const link = Hero("Link");

zelda.saludar();
link.saludar();
*/

// De esta manera solo declaro una vez la función
// Dicha función la asigno cuando creo un objeto pero no la vuelvo a definir
// Aún existe una manera más eficiente

/*
const heroMethods = {
	saludar: function () {
		console.log(`Me llamo ${this.name}`);
	}
};

function Hero(name) {
	const hero = {
		name: name
	}
	hero.saludar = heroMethods.saludar;
	return hero;
}

const zelda = Hero("Zelda");
const link = Hero("Link");

zelda.saludar();
link.saludar();
*/


/**************** Object.create ****************/
// Object.create recibe un objeto y crea un nuevo objeto
// el nuevo objeto tendrá todas las propiedades que tiene el objeto que pasamos como argumento

// const nuevoObjeto = Object.create(objeto)

/*
const heroMethods = {
	saludar: function () {
		console.log(`Soy el super héroe ${this.name}`);
	}
};

function Hero(name) {
	// De esta manera hago que hero tenga todos los métodos que están en heroMethods
	const hero = Object.create(heroMethods);
	hero.name = name;
	return hero;
}

const zelda = Hero("Zelda");
const link = Hero("Link");

zelda.saludar();
link.saludar();

// Si inspeccionamos en el navegador vemos que newHero tiene los métodos que están en heroMethods
const newHero = Object.create(heroMethods);
console.log(newHero.__proto__);

// Sigamos mejorando el código
*/

// Lo ideal es colocar las funciones de Hero dentro de Hero no dentro de otra función como heroMethods en nuestro caso
// Para esto usamos una propiedad que tienen todos los objetos, esta se llama prototype y en un principio está vacía
// Podemos utilizar new para facilitar la escritura del código

/*
function Hero(name) {
	// De esta manera hago que hero tenga todos los métodos que están en prototype
	const hero = Object.create(Hero.prototype);
	hero.name = name;
	return hero;
}

Hero.prototype.saludar = function () {
	console.log(`Soy el super héroe ${this.name}`);
}

const zelda = Hero("Zelda");
const link = Hero("Link");

zelda.saludar();
link.saludar();

const newHero = Object.create(Hero.prototype);
console.log(newHero.__proto__);
*/

// New es atajo (azúcar sintáctica) para llevar Hero.prototype al objeto
// Cuando utilizamos new al crear un objeto, ej: const zelda = new Hero("Zelda")
// Automáticamente ejecuta 	const hero = Object.create(Hero.prototype);
// De una manera más general lo que hace es this = Object.create(Hero.prototype);
function Hero(name) {
	// Eliminamos el return, el Object.create y reemplazamos Hero por this en name
	this.name = name;
}

Hero.prototype.saludar = function () {
	console.log(`Soy el super héroe ${this.name}`);
}

const zelda = new Hero("Zelda");
const link = new Hero("Link");

zelda.saludar();
link.saludar();
