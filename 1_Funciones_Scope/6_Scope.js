// El scope en JS el el alcance que tiene una variable

// Function Scope
function printNumbers() {
	// Si coloco var imprime 10 veces el 10
	// si coloco let me pone los números del 0 al 9
	// Lo que pasa es que con var la variable se sobreescribe y toma el último valor
	for(var i = 0; i<10; i++) {
		setTimeout(()=> console.log(i), 1000);
	}
}

// Una alternativa al problema anterior es la siguiente
function printNumbers2() {
	for(var i = 0; i<10; i++) {
		function eventuallyPrintNumber(n) {
			// En este momento no importa que i sea global ya que en este caso n es local
			setTimeout(()=> console.log(n), 1000);
		}
		eventuallyPrintNumber(i);
	}
}


printNumbers();
printNumbers2();

// Block Scope
function printNumbers3() {
	// Ahora usamos let
	// Let opera sobre el Block scope
	// Cada vez que hay una nueva iteración se crea un nuevo bloque
	// Para cada nuevo bloque "i" tiene un valor distinto
	for(let i = 0; i<10; i++) {
		setTimeout(()=> console.log(i), 1000);
	}
}

printNumbers3();
