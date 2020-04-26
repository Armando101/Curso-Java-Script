//Estado compartido o shared state

/*

	Shared State significa que diferentes métodos trabajan a partir de una misma variable.
	Cuando modificamos variables con el mismo objeto de referencia podemos encontrarnos con algunos problemas y obtener resultados inesperados a pesar de ejecutar el mismo código y recibir los mismos parámetros:

*/

// Intento #1
const a = {
        value: 2
}

const addOne = () => a.value += 1
const timesTwo = () => a.value *= 2

addOne()
timesTwo()

console.log(a.value) // 6

// Sin embargo, si ejecutamos las mismas funciones en orden invertido
// obtenemos resultados diferentes

timesTwo()
addOne()

console.log(a.value) // 5 !??
// Esto sucede porque las funciones mutan el objeto
// Es decir las funciones no son puras


/*
	Para resolver este tipo de problemas debemos utilizar la programación funcional, en vez de modificar la variable original, nuestras funciones deben copiar y modificar sus argumentos:
*/

const b = {
        value: 2
}

const addOne = b => Object.assign({}, b, { value: b.value + 1 });
const timesTwo = b => Object.assign({}, b, { value: b.value * 2 });

addOne(b);	// 3
timesTwo(b); // 4

// El resultado siempre es el mismo a pesar de
// ejecutar las funciones en orden diferente

timesTwo(b);	// 4
addOne(b); // 3

console.log(b.value); // 2
console.log(addOne(timesTwo(b))); // 