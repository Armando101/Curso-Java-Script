// JS ofrece métodos para asignar valores a this
// Estos son call, apply y blind

function executor(funcion) {
	// Le decimos que el contexto que va a usar es el del objeto titular
	funcion.call(titular);
}

function executor2(funcion) {
	funcion();
}

let titular = {
	nombre: "Armando",
	apellido: "Rivera",
	nombre_completo: function() {
		console.log(this.nombre + " " + this.apellido);
	}
}

// Si ejecutamos la siguiente línea muestra nombre y apellido undefined
// Esto sucede a pesar de que usamos una arrow function
// Esto porque el contexto se modifica en executor, no en titular
executor2(titular.nombre_completo);

// Con el método call podemos evitar ese error pasando como primer arguemnto el contexto deseado
executor(titular.nombre_completo);


// El métod call recibe como primer argumento el nombre del contexto, después los demás arguementos de la función

function saluda(nombre, apellido="") { console.log("Hola " + nombre + " " + apellido); }

// Le paso el contexto global
saluda.call(window, "Armando");

// Apply es similar con la diferencia de que los argumentos que van a la función se pasan con un arreglo
saluda.apply(window, ["Armando", "Rivera"]);

// Bind también permite asignar el contexto pero no manda a llamar la función
executor2(titular.nombre_completo.bind(titular));