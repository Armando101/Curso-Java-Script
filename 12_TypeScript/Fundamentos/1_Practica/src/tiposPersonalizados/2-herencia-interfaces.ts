export {};

enum PhotoOrientation {
    Lanscape,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    // Copia los atributos de Entity
    description: string;
}

interface Picture extends Entity {
    orientation: PhotoOrientation;
}

// Si omitimos uno de los atributos de Entity nos da error
const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'Community events around the world'
}

const picture: Picture = {
    id: 1,
    title: 'Family',
    orientation: PhotoOrientation.Lanscape
}

// Podemos declarar una variable con su tipo con la palabra reservada as
let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('Album', album);
console.log('Picture', picture);
console.log('newPicture', newPicture);