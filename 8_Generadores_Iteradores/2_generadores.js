// Las funciones generadoras llevan un * después de la palabra reservada function

// la palabra reservada yield regresa un valor, es similar a return, la diferencia es que deja en una especie de pausa la función y la próxima ves que se mande llamar el método next regresará el siguiente valor que se encuentra en el siguiente yield
function* counter() {
	console.log('Estoy aquí');
	yield 1;
	console.log('Ahora estoy aquí');
	yield 2;
}

// Declaramos una variable que contiene al generador
let generador = counter();

//Podemos declara más de un generador
let generador2 = counter();

// Si ejecutamos la función next sólo no iterará, tenemos que declarar un objeto generador
//counter().next();

// Mandamos llamar al método next
// Se detiene el el primer yield y retorna el valor
console.log(generador.next());

// Continúa a partir del último yield retornado
console.log(generador.next());

// Si ejecutamos una vez más el método next, regresará undefined en value y true en done indicando que ya terminó de recorrer el generador.
console.log(generador.next());

// Pdemos hacer un contador del 1-5
console.log('\n********* Contador *********\n')
function* contador() {
	for(let i = 1; i<=5; i++) {
		yield i;
	}
	// Si queremos que la línea siguiente se ejecute debemos usar var y no let
	//console.log('Terminó, valor de i: '+i);
}

let generador3 = contador();
console.log(generador3.next());
console.log(generador3.next());
console.log(generador3.next());
console.log(generador3.next());
console.log(generador3.next());
console.log(generador3.next());
console.log(generador3.next());
