/*
	Un intersection Type nos permite declarar una variable con mas de un tipo de dato.
*/

class User {
	name: string
}

class Admin {
	permission: number;
	getPermission() {

	}
}

// user es de tipo User y de tipo Admin
let user: User & Admin;

// Por lo tanto puedo usar lo metodos y propiedades de las dos clases.
user.name = 'Armando';

user.permission = 5;

user.getPermission();

// Para instanciar mi objeto utilizo Type Assertions

// Type Assertions nos permite poner reasignar el tipo de dato que TS ya había asignado por defecto
// Indico que cree un objeto User pero lo interprete como User & Admin
user = new User() as User&Admin;