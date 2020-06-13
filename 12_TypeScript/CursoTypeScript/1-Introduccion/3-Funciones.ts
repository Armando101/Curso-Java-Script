function suma(v1: number, v2: number): number {
	return v1 + v2;
}

let adicion:number = suma(5, 10);

// Los parametros indicados con signo de interrogacion indican que son opcionales
function opcional(nombre='Armando', apellido?:string): void {
	console.log('Hello ', nombre);
}

opcional();