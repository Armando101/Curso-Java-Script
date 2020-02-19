class User {

	constructor(nombre) {
		this.nombre = nombre;
	}

	saludar() {
		console.log("Hola usuario "+this.nombre);
	}
}

class Admin extends User {
	constructor(nombre) {
		super(nombre);
	}

	saludar() {
		super.saludar();
		console.log("Aquí está el panel de adminsitración");
	}
}

let admin = new Admin("Armando");

admin.saludar();