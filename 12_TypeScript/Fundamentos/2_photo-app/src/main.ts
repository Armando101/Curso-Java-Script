import { PhotoOrientation } from "./photo-orientation";
import { Album } from "./album";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, 'armando101', 'Armando', true);
const album = new Album(10, 'My first Album');
const picture = new Picture(1, 'Foto', '2020-08', PhotoOrientation.Landscape);

// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);

// Borrar un album
user.removeAlbum(album);
console.log('user ', user);