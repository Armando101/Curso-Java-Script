export {};

enum PhotoOrientation {
    Lanscape,
    Portrait,
    Square,
    Panorama
}

// Podemos colocar atributos privados con la palabra reservada privada

class Picture {
    // Propiedades
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    public toString() {
        return `[
            id: ${this.id}
            title: ${this.title}
            orientation: ${this.orientation}
        ]`;
    }
}

class Album {
    public id: number;
    public title: string;
    public pictures: Picture[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Session', PhotoOrientation.Panorama);

// Podemos hacer uso de los métodos disponibles en la clase
album.addPicture(picture);

console.log('album', album);

// Accediendi a los miembros públicos
picture.id = 100; // Public
picture.title = 'Another title'; // Public

album.title = 'Personal Activities';
console.log();
