/*
	Los type Alias nos permiten crear nuestros propios tipos de datos
*/

// Creo un tipo de dato nuevo llamado numero y es de tipo number
type numero = number;

let edad: numero;

edad = 20;

// Con los tipos de datos primitivos no tiene mucho sentido asignar estos TypeAlias
// Le podemos sacar mayor provecho cuando trabajamos con unionTypes o intersectionTypes

// Declaro un nuevo tipo de dato llamado NumberOrString que puede ser un number o un string
type NumberOrString = number | string;
let age: NumberOrString = 22;

class User {
	name: string;
}

class Admin {
	permissions: string;
}

// Declaro un TypeAlias con intersectionTypes
type UserAdmin = User & Admin;
// Creo una nueva variables del tipo que acabo de crear
let user: UserAdmin;


// Tambien puedo hacer TypeAlias con funciones
// Indico que las funciones de tipo FuncString deben retornar una string
type FuncString = () => string;

function executor(func: FuncString) {}

executor(() => 'Hola');