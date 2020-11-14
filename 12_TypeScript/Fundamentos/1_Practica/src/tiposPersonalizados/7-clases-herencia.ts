export {};

enum PhotoOrientation {
    Lanscape,
    Portrait,
    Square,
    Panorama
}


// Creamos una superclase
// Está como abstracta porque no tiene sentido que podamos hacer instancias de esta clase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    // Estos métodos los tendrán todas las clases que hereden de esta
    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get id() {
        return this._id;
    }

    // Comentamos este codigo ya que id es de solo lectura
    // set id(id: number) {
    //     this._id = id;
    // }
}

// Podemos colocar atributos privados con la palabra reservada private

class Picture extends Item {

    static photoOrientation = PhotoOrientation;

    // Propiedades
    // Esta clase también tiene las propiedades de id y title
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        super(id, title);
        this._orientation = orientation;
    }

    public toString() {
        return `[
            id: ${this._id}
            title: ${this._title}
            orientation: ${this._orientation}
        ]`;
    }

    get orientation() {
        return this._orientation;
    }

    set orientation(orientation: PhotoOrientation) {
        this._orientation = orientation;
    }

}

class Album extends Item {
    private _pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title);
        this._pictures = [];
    }

    public addPicture(picture: Picture) {
        this._pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Session', PhotoOrientation.Panorama);

// Podemos hacer uso de los métodos disponibles en la clase
album.addPicture(picture);

console.log('album', album);

// Podemos acceder a los atributos a pesar de que sean privados porque internamente usamos los métodos setter y getter

// picture.id = 100; // Private // Quitamos este código ya que esta propiedad es de solo lectura

picture.title = 'Another title'; // Private

album.title = 'Personal Activities';
console.log();

// Si hacemos una instancia vemos que no tiene mucho sentido crear un objeto
// const item = new Item(1, 'Test title');
// La clase Item en este caso la ocupamos más como una clase disponible para que otras hereden
// Por esta razon conviene declararla como abstrat, de esta manera no se puede hacer ninguna instancia

// Probar el miembro estático de la clase Picture
// No tenemos que instanciar ninguna clase para hacer uso de este atributo
console.log('PhotoOrientation ', Picture.photoOrientation.Portrait);
