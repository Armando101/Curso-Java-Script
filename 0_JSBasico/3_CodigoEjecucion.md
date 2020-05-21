# Código de ejecución 

JS sólo puede hacer una tarea a la vez, esto puedo ser bueno y malo a la vez.  

## Memory heap
Es el lugar donde se guardan los valores de las variables y funciones.

```js
var nombre = 'Armando' // Se guarda en el heap
const edad = 21; // Se guarda en el heap
```

Las variables no se guardan de manera lineal o consecutiva.

## Call Stack
Es el orden en el que se van a llamar las sentencias.  
Las tareas se guardan en una pila de abajo hacia arriba, una tarea que manda a llamar otra la coloca arriba en la pila.

```js
function restarDos(num) {
	return num - 2;
}

function calcular() {
	const sumarTotal = 4 + 5;
	return restarDos(sumarTotal);

debugger;

calcular();
}
```
Lo que hace el código anterior es:
1. Ejecutar el objeto global, this == window // true.
2. Se manda a llamar la función calcular
3. Se manda llamar la función restarDos
4. Regresa a la función calcular y regresa el valor.
5. Saca el objeto global.

La pila queda:
1. Global
2. Global calcular
3. Global calcular restarDos
4. Global calcular
5. Global

## Garbage Collection
Es el colerctor de basura, se encarga de eliminar de la memoria los valores que ya no son utilizados.

```js
// Se reserva en memoria un objeto y se asigna a la variable car
var car = {
	model: 'Toyota',
	year: 2020
}

// Se reserva en memoria una string y se guarda en car
car = 'Auto';

// El objeto anterior sigue existiendo en memoria pero ya no tenemos manera de acceder a él por lo tanto es basura y el Garbage Collection se encarga de eliminarlo

```

El algoritmo que utiliza el Garbage Collection para eliminar la basura es *mark and sweep*

## Stack overflow

Es un desbordamiento del call stack, esto es cuando tenemos un ciclo infinito o una función que llama otras tareas y esas a otras probocando un conjunto de tareas que provoca que se desborde el call stack.  

Chrome hizo modificaciones para que en caso de que haya un cierto número de peticiones de algo que nos puede llevar a un stack overflow deje de ejecutar esas funciones.  

Cuando pasa esto Chrome manda un error de "Hubo un máximo de peticiones".  

Una función recursiva puede provocar un Stack overflow.

```js
function overflow() {
	overflow();
}

overflow();
```

## JavaScript Runtime

JS ejecuta una tarea a la vez, si llega un proceso tardado deja todo lo demás y no continúa su trabajo hasta que termine dicho proceso. Una tarea a la vez, esto provoca que JS sea lento, pero aquí entra en juego el asíncronismo
```js
console.log('Taco 1');
console.log('Taco 2');
console.log('Torta'); // Proceso tardado
console.log('Taco 3'); // No realiza este proceso hasta que no termine el anterior
```

## Asincronía


```js
console.log('Taco 1');
console.log('Taco 2');
setTimeout(()=> {
	console.log('Torta1'); 
}, 2000);
setTimeout(()=> {
	console.log('Torta2'); 
}, 1000);
console.log('Taco 3');
```
