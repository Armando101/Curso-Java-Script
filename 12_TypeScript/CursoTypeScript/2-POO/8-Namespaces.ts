/*
	Los namespaces evitan que dos proyectos independientes usen clases entre sí.
	- Se declaran con la palabra reservada namespace
*/

namespace PTC {
	export class YouTube {}
	export const url: string = 'https://proteco.mx';
}

// De esta manera somos más específicos y evitamos usar la clase YouTube que pertenece a otro espacio de nombres.
let video: PTC.YouTube = new PTC.YouTube();