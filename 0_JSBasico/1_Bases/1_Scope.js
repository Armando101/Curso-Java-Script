// El scope es el alcance de las variables

// Esta variable se encuentra dentro del scope global
var nombre =  "Armando";

// La variable apellido se encuentra dentro de un scope local
// Sólo puede ser accedida dentro de la función
// Cuando estoy en un scope local puedo acceder a un scope global
function function_name() {
	var apellido = "Rivera";
	return nombre + ' ' + apellido;
}


// Cuando estoy en un scope global no puedo acceder a variables que se encuentran en un scope locla
console.log(function_name());
// console.log(apellido);	// Error