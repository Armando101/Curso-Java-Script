// Introducción a las Higher Order Functions

/*
	Por ahora, todas las funciones que hemos construido se pueden definir como First Class Functions, sin embargo, existen otro tipo de funciones que conocemos como Higher Order Functions o funciones de alto orden y podemos distinguirlas porque reciben otra función como argumento.

	Un buen ejemplo de funciones de alto orden es la función .map de JavaScript:
*/

// Ciclo for (sin HOF)
const array = [1, 2, 3]
const array2 = []

for (let i = 0; i < array.length; i++) {
        array2.push(array[i] * 2)
}

// Utilizando la función .map (HOF)
const array = [1, 2, 3]
const array2 = array.map(item => item * 2)

// Ambas formas devuelven el mismo resultado,
// sin embargo, utilizando HOFs podemos escribir
// código mucho más legible y fácil de entender
console.log(array2) // [2, 4, 6]
