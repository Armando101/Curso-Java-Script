export {};

enum PhotoOrientation {
    Lanscape,
    Portrait,
    Square,
    Panorama
}

// Podemos colocar atributos privados con la palabra reservada private

class Picture {
    // Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    public toString() {
        return `[
            id: ${this._id}
            title: ${this._title}
            orientation: ${this._orientation}
        ]`;
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }


    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get orientation() {
        return this._orientation;
    }

    set orientation(orientation: PhotoOrientation) {
        this._orientation = orientation;
    }

}

class Album {
    private _id: number;
    private _title: string;
    private _pictures: Picture[];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }

    public addPicture(picture: Picture) {
        this._pictures.push(picture);
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Session', PhotoOrientation.Panorama);

// Podemos hacer uso de los métodos disponibles en la clase
album.addPicture(picture);

console.log('album', album);

// Podemos acceder a los atributos a pesar de que sean privados porque internamente usamos los métodos setter y getter
picture.id = 100; // Private
picture.title = 'Another title'; // Private

album.title = 'Personal Activities';
console.log();
