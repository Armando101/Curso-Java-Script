function executor(funcion) {
	funcion();
}

function decirHola() {
	console.log("Hola");
}

// No pasamos el argumento con paréntesis
// Esto porque lo que pasamos es el nombre de la función
// Los paréntesis no son parte del nombre de la función
// Los paréntesis sólo se usan para llamar la función.
executor(decirHola);

// En JavaScript es muy común pasar funciones como argumento a otras funciones, sin embargo no se hace de la forma anterior.

// La siguiente forma es mucho más común
executor(function() {
	console.log("Hola");
});