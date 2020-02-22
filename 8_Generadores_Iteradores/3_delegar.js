
// Un generador puede delegar a otro generador, esto es generadores anindados
// Podemos tener un gerador que se encadene con otro

// Declaramos un generado contador
function* contador() {
	console.log('Contador');
	for(let i = 1; i<=5; i++) {
		yield i;
	}
	console.log('Terminé contador');
}

// El generador retornador va a delegar a contador
function* retornador() {
	console.log('Retornador');

	// Con el asterisco indicamos que se va a delegar
	// Va a continuar con el generador contador y despué regresará a este código
	yield* contador();
	
	console.log('Regresé a retornador');
	// Puedo retornar más valores
	yield 5;
	console.log('Terminé retornador');
}

let generador = retornador();

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());

if (generador.next().done)
	console.log('Terminó el generador');