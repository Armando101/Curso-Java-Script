class Usuario {
	constructor(permisos = "lectura") { this.permisos = permisos; }
	static createAdmin() {
		let user = new Usuario("administrador");
		return user;
	}
}

// Un método estático puede ser utilizado sin crear una instancia de la clase

/*
	No es necesario la siguiente línea
	No tenemos que crear un objeto para hacer uso de un métod estático
	
	let user = Usuario();
	user.createAdmin();
*/

let administrador = Usuario.createAdmin();

console.log(administrador.permisos);