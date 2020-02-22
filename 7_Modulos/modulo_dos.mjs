// mjs es una extensión para módulos, también se puede hacer un archivo con extensión js pero es más común hacerlo con mjs

// con la palabra export indicamos que la constante se va a exportar y que este archivo será usado como módulo

// Un módulo puede tener varios elementos a exportar pero sólo uno por default

export const name = 'Armando';

let valor_por_defecto = 20;

export default valor_por_defecto;
// La siguiente línea es internamente lo que hace la línea anterior
// export default = 20;


// La siguiente línea es incorrecta
// export default let valor_por_defecto = 20;
// El equivalente es los siguiente
// export default = let valor_por_defecto = 20;

// Si declaro una variable
export let edad = 21;

// Después la modifico
edad = 22;

// Al momento de importarla el valor de edad es el último que fue asignado, para este caso es 22

// Ese valor no se puede modificar en el archivo del cuál se está importando
