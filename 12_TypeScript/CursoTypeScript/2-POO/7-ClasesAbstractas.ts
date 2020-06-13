/*
	Se declaran con la palabra reservada abstract.
	- No se pueden instanciar
	- Pueden contener métodos abstractos que no contienen implementación
	- Los métodos abstractos deben ser implementados en las clases hijo
*/

abstract class Asset {
	x: number;
	y: number;
	width: number;
	height: number;

	getCoords(): string {
		return "";
	}

	// No podemos implementar los métodos abstractos
	abstract move(speed: number): boolean
}

class Hero extends Asset {
	move(speed: number) {
		return true;
	}
}