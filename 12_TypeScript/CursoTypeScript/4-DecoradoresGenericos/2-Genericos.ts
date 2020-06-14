/*
	Los tipos genéricos nos permiten tener una función que reciba cualquier tipo de dato.
*/

// Declaro una función que recibe un objeto y lo devuelve
// Dicho objeto puede ser de cualquier tipo ya que estoy diciendo que es genérico
function genericReceptor<T>(obj: T): T {
	return obj;
}

let cadena:string = genericReceptor<string>('Armando');

let numero: number = genericReceptor<number>(20);

// Indico que la función recibe un arreglo de cualquier tipo
function printAll<T>(arr: T[]) {
	console.log(arr.length);
}

printAll<string>(['Hola', 'Mundo']);
printAll<number>([20, 25, 12]);
printAll<boolean>([true]);

class Printer<T> {
	printAll(arr: T[]) {
		console.log(arr.length);
	}
}

const printer: Printer<number> = new Printer();
printer.printAll([1, 2, 12, 15]);