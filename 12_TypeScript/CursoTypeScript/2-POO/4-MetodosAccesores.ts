/*
	Se dividen en dos:
		- Getters: nos permiten leer el valor de un atributo
		- Setters: nos permiten colocar el valor de un atributo
*/

class Video {
	private _title : string;
	constructor(title: string) { this._title = title}

	get title(): string { return this._title }

	set title(title: string) { this._title = title }
}

let myVideo: Video = new Video('Demo');

// Colocamos un valor con el metodo setter
myVideo.title = 'My Third Video';

// Obtenemos un valor con el metodo getter
console.log(myVideo.title);

// Vemos que no existe ninguna propiedad llamada title, y _title es privada
// Por lo tanto la manera en que estamos accediendo a la propiedad es con los metodos getter y setter

class User {
	private _name: string;

	private _lastName: string;

	get fullName(): string { return `${this._name} ${this._lastName}`;}

	set fullName(fullName: string) {
		let words = fullName.split(" ");
		this._name = words[0];
		this._lastName = words[1];
	}
}

const user: User = new User();

// Encapsulo la logica del metodo setter
// No sabemos la funcionalidad interna, solo lo que recibe y el metodo hace el resto de manera interna.
user.fullName = 'Armando Rivera';
console.log(user.fullName);