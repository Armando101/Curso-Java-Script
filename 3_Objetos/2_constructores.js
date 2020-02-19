// Funciones constructoras
// Esto es parecido al método constructor de una objeto

function Curso(titulo) {
	this.titulo = titulo;

	this.inscribir = function(usuario) {
		console.log(usuario + " se ha inscrito al curso de " +titulo);
	}
}

let cursoJS = new Curso("Curso Profesional de JS");
cursoJS.inscribir('Armando');

let cursoRuby = new Curso("Curso Profesional de Ruby");
cursoRuby.inscribir('Armando');

let cursoPython = new Curso("Curso Profesional de Python");
cursoPython.inscribir('Armando');
