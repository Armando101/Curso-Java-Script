// Declarar clases
class Video {
	// Propiedades
	title: string;

	// Constructor
	constructor(title: string) {
		this.title = title;
	}

	// Methods
	printTitle() {
		console.log(this.title);
	}

	changeTitle(title: string) {
		this.title = title;
	}

	getTitle(): string { return this.title }
}

const myVideo: Video = new Video('My fist class');

myVideo.printTitle();
myVideo.changeTitle('My fist object');

console.log(myVideo.getTitle());