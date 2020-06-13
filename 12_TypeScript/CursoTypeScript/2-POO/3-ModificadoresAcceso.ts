/* Midificadores de accesos
	public: puede ser accedida fuera de la clase y en subclases
	private: sólo pueden ser accedidas desde la misma clase
	protected: sólo puede ser accedida en la clase principal y en las subclases.
*/
class Video {
	protected title: string;
	constructor(title: string) {
		this.title = title;
	}
}

class YouTube extends Video {
	printTitle() {
		console.log(this.title);
	}
}

let miVideo: Video = new Video('Demo');
// console.log(miVideo.title);