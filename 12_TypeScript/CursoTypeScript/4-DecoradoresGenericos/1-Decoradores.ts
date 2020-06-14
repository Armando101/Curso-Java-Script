/*
	Es un patrón de diseño que nos permite agregar funcionalidad de un componente sin modificarlo permanentemente
	Los decoradores están en la fase dos, es decir que es una propuesta
	Todavía no está estandarizado en el lenguaje.
*/

function Decorador(cls: Function) {
	console.log('Soy un decorador');
	cls.prototype.className = cls.name;
}

@Decorador
class Speaker {
	
}

let spearker: Speaker = new Speaker();
(spearker as any).className;