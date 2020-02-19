let arreglo = [1, 34, 19, 28, 10];

for(let i = 0; i < arreglo.length; i++) {
	console.log(arreglo[i]);
}

let arreglo2 = ['ruby', 'python', 'java', 'javaScript'];

// For Each
arreglo2.forEach(function (elemento) {
	console.log(elemento);
});

// Filter sirve para filtrar datos de un arreglo
// Eliminar 'ruby' del arreglo
// Regresa un nuevo arreglo cuyos elementos sean true
arreglo2 = arreglo2.filter(function(elemento) {
	return elemento != 'ruby';
});
// Con array functions
arreglo2 = arreglo2.filter((elemento)=> elemento != 'ruby');

console.log(arreglo2);

// Find retorna el primer elemento que satisface la condición
let elemento_encontrado = arreglo2.find(elemento => elemento == 'javaScript');

console.log(elemento_encontrado);

// Map genera un nuevo arreglo con una operación definida

let numeros = [1, 35, 6, 20];

// Genera un arreglo con los cuadrados de los números.
let cuadrados = numeros.map((elemento) => elemento**2);

console.log(cuadrados);