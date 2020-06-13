class Video {
	// Propiedades
	title: string;

	// Constructor
	constructor(title: string) {
		this.title = title;
	}

	// Methods
	play() { console.log('playing')}
	stop() { console.log('stopped')}
}

// Creamos una clase que herede de la anterior
class YouTubeVideo extends Video {
	// Ahora esta clase tiene los mismos methods y atributos de la clase padre

	// Si queremos sobreescribir el constructor, debemos llamar a la funcion super
	constructor(title: string) {
		super(title);
		console.log('Inicializando YouTube');
	}

	// Podemos sobreescribir los metodos declarados en la clase padre
	stop() {
		// La funcion super solo es necesaria en el constructor
		super.stop(); 	// Con super llamamos al metodo stop de la clase padre
		console.log('Stopped myYouTubeVideo'); 
	}
}

let myVideo: Video = new YouTubeVideo('My youTubeVideo');
myVideo.play();
myVideo.stop(); 
