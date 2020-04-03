function mayor_de_edad(edad) {
	if (edad > 18) {
		var resultado = "Eres mayor de edad";
	} else {
		var resultado = "Eres menor de edad";
	}
	console.log(resultado);
}

// Si utilizamos var todo es correcto
// Si utilizamos let marca error

// Let tiene un alcance de hasta el bloque más próximo
// var tiene alcance de la función más próxima

mayor_de_edad();