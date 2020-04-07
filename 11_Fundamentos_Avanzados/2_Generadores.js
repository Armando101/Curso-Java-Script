// Los generadores son funciones de las que se puede salir y volver a entrar.
// Su contexto (asociación de variables) será conservado entre las reentradas.
// Cada vez que llamamos next, la ejecución del generador va a continuar hasta el proximo yield

// Usamos un asterisco para declarar un generador
// Nos regresa un objeto que tiene dos valores:
// value: valor de retorno que viene acompañado de yield
// done: nos indica si ya regresó todos lo valores, es decir, ya no tengo más yield's
function* simpreGenerator() {
	console.log('Generator Start');
	yield 1;
	yield 2;
	yield 3;
	console.log('Generator End');
}

// Declaramos el generador
const gen = simpreGenerator();

// Hacemos iteraciones sobre el generador
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log();
// Podemos hacer generadores infinitos.

function* idMaker() {
	let id = 1;
	while(true)
		yield id++;
}

const id = idMaker();
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());

console.log();

// Cuando llamamos next también podemos pasar valores que la función recibe.
function* idMakerWithReset() {
	let id = 1;
	let reset;
	while(true){
		// yield me regresa el valor que yo le paso a la función next()
		reset = yield id;
		if (reset) {
			id = 1
		} else {
			id++;
		}
	}
}

const idReset = idMakerWithReset();
console.log(idReset.next());
console.log(idReset.next());
console.log(idReset.next());
console.log(idReset.next());
console.log("Reset");
console.log(idReset.next(true));
console.log(idReset.next());
console.log(idReset.next());

console.log();

// Ahora hagamos un ejemplo un poco más complejo: la secuencia fibonacci
function* fibonacci() {
	let a = 1;
	let b = 1;
	while(true) {
		const nextNumber = a + b;
		a = b;
		b = nextNumber;
		yield nextNumber;
	}
}

const genFib = fibonacci();
console.log(genFib.next());
console.log(genFib.next());
console.log(genFib.next());
console.log(genFib.next());
console.log(genFib.next());
console.log(genFib.next());
