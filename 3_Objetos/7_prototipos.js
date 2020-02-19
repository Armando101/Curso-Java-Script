/*
	En JS no existen las clases como tal

	Con las clases los objetos se crean a partir de un documento
	Con prototipos (Que es como funciona JS) los objetos se crear a partir de otros objetos.

	Clases:
		Imagina que creas un instructivo para hacer carros
		Si quieres hacer un carro distino modificas algunas partes del instructivo y obtienes un carro distino.

	Prototipos:
		Si quieres crear un carro distinto al original, clonas el carro original y sobre el clonado haces las modificaciones.
*/

// Declaramos un objeto en formato JSON
let user = { nombre: "Armando"};

// Si vemos el tipo de dato vemos que es un objeto
console.log(typeof(user));

// Si en JS los objetos se crean a partir de otros objetos
// ¿A partir de qué objeto se creó este primer objeto?
// La propiedad __proto__ es una propiedad que contienen todos los objetos de JS 
// Esta propiedad nos retorna el prototipo con el cuál fue creado el objeto
console.log(user.__proto__);

// Con Object.create podemos crear objetos
// Si le pasamos como argumento null estamos creando un objeto vacío

let animal = Object.create(null);

// Podemos agregar atributos al objeto
animal.vivo = true;

// Podemos agregar métodos al objeto
animal.esta_vivo = function() {if(this.vivo) console.log("Sigue vivo");}

// Este es un objeto como cualquier otro a pesar de que no hemos creado ninguna clase
// A partir del objeto creado podemos crear más

// Cuando creamos un nuevo objeto a partir de otros, éste hereda las características del objeto base
// A esto se le llama herencia de prototipos
let perro = Object.create(animal);

perro.esta_vivo();

// El funcionamiento de los objetos en JS es con prototipos
// El incluir las palabras reservadas new y class son sólo modificaciones a la sintaxis, en el fondo JS trabaja de la misma manera, con prototipos

// Si queremos mostrar una propiedad, lo que hace internamente JS es buscar esa propiedad en el prototipo actual (perro), si no la encuentra la busca en el prototipo padre (animal) y así susecivamente hasta encontrar un prototipo null
console.log(perro.edad);

// Creamos una función constructora

function Usuario() {}

let usuario = new Usuario();

// Imprimimos la propiedad __proto__ del objeto
console.log(usuario.__proto__);

// Las funciones en JS tienen una propiedad llamada prototype
// Esta función es equivalente a __proto__ de los objetos
console.log(Usuario.prototype);

// Como podemos ver son los mismos objetos
console.log(usuario.__proto__ == Usuario.prototype);

// Podemos decir que el prototype de una función pasa a ser el prototipo de los objetos creados usando dicha función

// Esto puede servir para modificar los objetos creados de la función incluso después de que hayan sido generados.

// Al ejecutar el siguiente bloque de código todos los objetos creados a partir de Usuario tendrán la función saludar

// usuario.saludar(); // Esta línea marca error ya que hasta este momento los usuarios no tienen una función saludar

Usuario.prototype.saludar = function() {
	console.log("Hola");
}

// Ahora todos los objetos creado a partir de Usuario tendrán la función saludar
usuario.saludar();

// Creramos un nuevo objeto
// Este nuevo objeto sera creado usando como base el protipo de usuario, por consecuencia el nuevo objeto tendrá las funciones y propiedades de usuario.
let armando = Object.create(usuario);

armando.saludar();

// Ĺa siguiente línea es incorrecta debido a que Usuario es una función no un objeto, para crear un nuevo objeto se crea con base en una ya existente no con una función, a pesar de esto no marca error, habría un error hasta que intentemos ejecutar la función saludar
//let armando = Object.create(Usuario);



/*    Herencia con funciones      */


// Lo que hacemos es decir que la clase Admin está heredando de Usuario, esto lo hacemos agregando un objeto Usuario como prototipo de la función Admin, de esta manera heredamos todos lo métodos y atributos de la función Usuario.

function Admin() {}
Admin.prototype = new Usuario();
// Admin.prototype = usuario; // Línea equivalente a la anterior

let marcos = new Admin();
marcos.saludar();