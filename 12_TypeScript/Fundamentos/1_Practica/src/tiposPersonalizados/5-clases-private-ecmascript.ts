export {};

enum PhotoOrientation {
    Lanscape,
    Portrait,
    Square,
    Panorama
}

// Podemos colocar atributos privados con la palabra reservada private
// Si declaramos variables privadas con el numeral, es como en JS
// VS code no reconoce esta notacion
// Es por eso que tenemos que cambiar el target en el archivo tsconfig.json
// "target": "es6",   

class Picture {
    // Propiedades
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    public toString() {
        return `[
            id: ${this.#id}
            title: ${this.#title}
            orientation: ${this.#orientation}
        ]`;
    }
}

class Album {
    #id: number;
    #title: string;
    #pictures: Picture[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    public addPicture(picture: Picture) {
        this.#pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Session', PhotoOrientation.Panorama);

// Podemos hacer uso de los métodos disponibles en la clase
album.addPicture(picture);

console.log('album', album);

// Ahora no podemos acceder a los atributos porque son privados
// picture.id = 100; // Private
// picture.title = 'Another title'; // Private

// album.title = 'Personal Activities';
// console.log();
