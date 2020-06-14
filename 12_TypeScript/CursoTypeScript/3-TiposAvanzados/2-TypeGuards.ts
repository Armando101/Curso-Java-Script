/*
	Los typeGuardians nos permites saber de que tipo es un objeto
	Esto es útil cuando trabajamos con UnionTypes ya que tenemos la incertidumbre de que no sabemos con que tipo de dato estamos trabajando.
*/

function isNumber(obj: number | string): obj is number {
	return typeof obj === 'number';
}

function isString(obj: number | string): obj is string {
	return typeof obj === 'string';
}

function printAge(age: number | string) {
	if (isNumber(age)) {
		// Estamos seguros de que el objeto es un number.
		// age.charAt(0); // Esto nos marca un error desde la compilación ya que en este punto estamos trabajando un un number
			
	} else {
		// Estamos seguros de que el objeto es un string.
		age.charAt(0); // Aquí no nos marca error ya que charAt es una función para cadenas y Aquí ya sabemos que mi objeto es de tipo string
	}	 
}

let age: number | string;