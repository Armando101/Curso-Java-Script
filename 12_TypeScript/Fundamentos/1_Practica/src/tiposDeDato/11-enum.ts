// Orientación para fotografías
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
};

// Internamente TS hace lo siguiente
// enum PhotoOrientation {
//     Landscape = 0,
//     Portrait = 1,
//     Square = 2,
//     Panorama = 3
// };

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape ', landscape); // 0
console.log('landscape ', PhotoOrientation[0]); // Landscape


// Podemos modificar los valores que TS asigna por defecto

enum PictureOrientation {
    Landscape = 10,
    Portrait, // 11
    Square, // 12
    Panorama // 13
}

enum Country {
    Bolivia = 'BOL',
    Colombia = 'CO',
    Mexico = 'MX',
    EEUU = 'USA',
    Espania = 'ESP',
}

const country: Country = Country.Colombia;
console.log('contry', country); // CO