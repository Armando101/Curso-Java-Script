// 10, '10'
export {};

let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUsernameById(id:number | string) {
    // Logica de negocio, find the user
    return 'armando101';
}

// Ahora podemos usar un tipo numero o string
getUsernameById(20)
getUsernameById('20')