// Declaración de objetos en formato JSON

let curso = {
	// Atributos
	titulo: 'Curso Profesional de JS',
	duracion: 2.2,
	formato: 'video',
	bloque: ['Introducción', "Funciones"],

	// Métodos
	inscribir: function(usuario) {
		console.log(usuario + " está inscrito");
	}
}

// Aceder a sus atributos
console.log(curso.titulo);
console.log(curso['titulo']);

// Ejecutar métodos
curso.inscribir('Armando');

// Modificar atributos
curso.titulo = 'Curso base de JS';
console.log(curso.titulo);

// Modificar métodos
curso['inscribir'] = function(){console.log("Esta función no hace nada")};
curso.inscribir('Armando');