interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

// Agregamos un and o intersección
type InterfaceMix = Interface1 & Interface2;

// Si sólo incluimos una propiedad obtendremos un error
// Tenemos que incluir las propiedades de las dos interfaces
const InterfaceMix: InterfaceMix = {
    prop1: 2,
    prop2: 5
}