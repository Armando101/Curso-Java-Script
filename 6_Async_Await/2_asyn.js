// Las funciones aíncronas son declaradas con la palabra reservada async

// Sin imprtar el cuerpo de la función, las funciones asíncronas siempre devuelven una promesa
// La siguiente función regresa una promesa de manera implícita
async function suma(valor1, valor2) {
	return valor1 + valor2;
	// De manera implícita regresa la siguiente línea
	// return Promise.resolve(valor1+valor2);
}

// La siguiente función regresa una promesa de manera explícita
async function calcular() {
	return new Promise((resolve, reject)=>{
		setTimeout(resolve, 400, 5);
	});
}

// Podemos ver que lo que retorna es una promesa con el valor 5
console.log(suma(2, 3));
suma(2, 3).then(console.log);

// Vemos que imprime el estado de la promesa
console.log(calcular());


// async por sí sólo no es tan interesante ni poderoso
// El poder de async vine ligado con await