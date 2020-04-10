// Con pipe | indicamos que puede ser uno u otro tipo de dato
type SumaParameter = string | number;

// Hago un casteo a Number en caso que introduzca strings
function sumaNumber(num1:SumaParameter, num2: SumaParameter) {
    return Number(num1) + Number(num2);
}

// Hago un casteo a String en caso que introduzca numbers
function sumaString(num1:SumaParameter, num2: SumaParameter) {
    return String(num1) + String(num2);
}

// Creamos dos interfaces con propiedades distintas
interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

// Este tipo de dato tiene las dos interfaces
type InterfaceMix = Interface1 | Interface2;

// Puede tener cualquiera de las propiedades de las interfaces o las dos
const InterfaceMix: InterfaceMix = {
    prop1: 2,
    prop2: 2
}