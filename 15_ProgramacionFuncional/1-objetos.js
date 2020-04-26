// Funciones puras

/*
	Las funciones puras siempre devuelven el mismo resultado cuando reciben los mismos parámetros. En cambio, otras funciones que dependen de factores externos (como el tiempo o una petición HTTP) no siempre pueden devolver el mismo resultado aunque reciban los mismos parámetros, incluso, pueden no necesitar recibir parámetros para ejecutarse correctamente.
*/

// Función pura
const double = x => x * 2;
console.log(double(5));

const isGraterThan = (value1, value2) => value1 > value2;
console.log(isGraterThan(5, 6));

// Función impura
const time = ()=> new Date().toLocaleTimeString();

console.log(time());


// Objetos y Tipos de Memoria en JavaScript

/*
	Un objeto es una referencia a un espacio en memoria, cada vez que creamos un objeto, este se guarda en la memoria (no sabemos exactamente dónde) y podemos acceder a su valor gracias a las coordenadas.

	Existen dos tipos de memoria: Stack y Heap.
	La memoria Stack es mucho más rápida y nos permite almacenar los datos de forma "ordenada" y en JavaScript la utilizamos para guardar datos primitivos, como booleanos, números o strings. En cambio, los objetos utilizan la memoria Heap, una memoria que nos permite guardar grandes cantidades de información pero con un poco menos de velocidad.

	Estos dos conceptos nos van a ayudar mucho a la hora de copiar objetos cuando utilizamos la programación funcional.

*/

// Copiar y modificar objetos en JavaScript

// En JavaScript tenemos diferentes formas de copiar y modificar elementos o variables, normalmente, basta con asignar dos variables e indicar que la segunda es igual a la primera:

let a = 1
let b = a

console.log(a, b) // 1, 1

// De esta forma podemos copiar el valor de otra variable y realizar modificaciones más adelante:
b += 1

console.log(a, b) // 1, 2

/*
	Sin embargo, todo esto cambia cuando trabajamos con objetos. Los objetos se comportan distinto al resto de datos primitivos dentro de JavaScript.

	Cuando asignamos el valor de una variable de tipo objeto a otras variables, en realidad, estamos copiando la referencia al objeto inicial. Esto quiere decir que, a pesar de que modifiquemos la copia de nuestras variables de tipo objeto, en realidad, estamos modificando el objeto original y, por lo tanto, todas las variables con la referencia a este objeto que acabamos de modificar:

*/

let car = {
        color: 'red',
        year: 2019,
        km: 0,
}

let car2 = car
car2.color = 'blue'

console.log(car, car2) // ambos objetos tienen color azul, no solo "car2"

/*
	En vez de copiar los valores de nuestros objetos, cuando utilizamos el = lo que copiamos es la referencia al objeto con sus respectivos valores. Esto lo podemos solucionar utilizando la función Object.assign:
*/

let car3 = {
        color: 'green',
        year: 2019,
        km: 0,
}

// El primer argumento es donde voy a hacer la copia
// Indico que copie car3 en un objeto vacío {}
let car4 = Object.assign({} , car3)
car4.color = 'purple'

console.log(car3, car4) // "car3" es de color green y "car4" de color purple


/*
	Sin embargo, este método no es suficiente para copiar y modificar objetos con subobjetos por el mismo problema de las referencias. La mejor manera copiar los valores de nuestros objetos en vez de sus referencias es utilizando las funciones JSON.parse y JSON.stringify:
*/

let car5 = {
        color: 'red',
        year: 2019,
        km: 0,
        owner: {
                name: 'David',
                age: 25
        }
}

let car6 = JSON.parse(JSON.stringify(car5))
car6.owner.age += 1

console.log(car5, car6) // el dueño de `car6` es un año mayor al dueño de `car5`


// Utilizando inmutabilidad en nuestras funciones

/*
	Otra característica de las funciones puras es la inmutabilidad. 
	Si necesitamos modificar el valor de los parámetros que reciben nuestras funciones, debemos copiar el valor de los argumentos y modificar estas nuevas variables, así evitamos modificar innecesariamente variables con las que nuestras funciones puras no tienen nada que ver.
*/

// En programación funcional tratamos de mutar lo menos posible

// Con mutaciones
const addToList = (list, item, quantity) => {
	list.push({ // modificamos el argumento `list`
		item,
		quantity
	})
	return list
}

//  Sin mutaciones (inmutabilidad)
const addToList = (list, item, quantity) => {
	const newList = JSON.parse(JSON.stringify(list))
	newList.push({ // modificamos la copia del argumento
		item,
		quantity
	})

	return newList
}