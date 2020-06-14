/*
	Puedo hacer que mi tipo genérico implemente una interfaz, esto para el tipo genérico no sea tan genérico
*/

interface Asset {
	x, y: number;
}

function generic<T extends Asset>(obj: T) {}

// generic<number>(20); // Esto marca error ya que el tipo number no tiene los atributos de Asset

class Point {
	x: number;
	y: number;
}

generic<Point>(new Point());