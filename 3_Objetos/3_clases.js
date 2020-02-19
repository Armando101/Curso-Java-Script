// En JS las clases no existen como tal
// JS es un lenguaje orientado a objetos basado en prototipos
// En versiones recientes de JS se introdujeron las clases

class Curso {
	// En las clases los métodos no se declaran con la palabra reservada function
	// Los atributos se definen en el constructor
	constructor(titulo) {
		this.titulo = titulo;
	}

	inscribir(usuario) {
		console.log(usuario + " se ha inscrito al "+this.titulo);
	}
}

let CursoJS = new Curso("Curso Profesional de JS");
CursoJS.inscribir('Armando');