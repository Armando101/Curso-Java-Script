// Alias de tipos en TS
export {};

type IdUser = number | string;
type Username = string;

// Ahora podemos usar IdUser como la union de number y string
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUsernameById(id:IdUser): Username {
    // Logica de negocio, find the user
    return 'armando101';
}

getUsernameById(20)
getUsernameById('20')