/*
	Una interfaz es una plantilla con los métodos que cada objeto debe implementar.
	No puedes crear objetos a partir de una interfaz.
	Lo que se espera es que una clase las implemente.
*/

interface Asset {
	x, y, width, height: number;
	getCoords(): string;
}

class Hero implements Asset {
	x: number;
	y: number;
	width: number;
	height: number;

	getCoords(): string {
		return "";
	}
}

class Bullet implements Asset {
	x: number;
	y: number;
	width: number;
	height: number;

	getCoords(): string {
		return "";
	}
}

class Enemy implements Asset {
	x: number;
	y: number;
	width: number;
	height: number;

	getCoords(): string {
		return "";
	}
}

class Collisions {
	static check(object: Asset, object2: Asset) {
		// Validar que exista forma de comparar los elementos
		// Compare object whith object2
	}
}


let hero: Asset = new Hero();