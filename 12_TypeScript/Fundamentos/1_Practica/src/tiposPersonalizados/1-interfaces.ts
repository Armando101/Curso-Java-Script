// Funcionalidad para mostrar una fotografía
export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// Definimos una interfaz, firma, contrato
interface Picture {
    title: string,
    date: string,
    orientation: PhotoOrientation
}

// Ahora el tipo de dato será el de la interfaz
function showPicture(picture: Picture) {
    console.log(`
        [title: ${picture.title},
        date: ${picture.date},
        orientation: ${picture.orientation}},
    ]`)
}


let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Panorama
});

// También podemos colocar datos opcionales en una interfaz
// Para que sean opcionales colocamos un signo de interrogación

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = { title: 'Default', date: '2020-03'};
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }

    return pic;
}


let picture = generatePicture({});
picture = generatePicture({title: 'Travel Pic'});

// Interfaz: Usuario
interface User {
    readonly id: number; // Propiedad de sólo lectura
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: 'armando101', isPro: true};
console.log('user', user);

// No deja sobreescribir porque el atributo es de sólo lectura
// user.id = 8;