// Explicito
let nullVariable: null;
nullVariable = null;

// No podemos asignarle un valor diferente de null
// nullVariable = 0;

// Si intentamos declarar una variable de la manera inferida
// Le asigna any no null

let otherVariable = null;
otherVariable = 'Test';

// Undefined
let undefinedVarible: undefined;
undefinedVarible = undefined;

// No podemos asignarle un valor diferente de undefined
// undefinedVarible = 'Test';

// Si intentamos declarar una variable de la manera inferida
// Le asigna any no undefined
let otherVariableUndefined = undefined;
otherVariableUndefined = 'Test';

// Null y undefined como subtipos

// --strictNullChecks
let albumName: string;
// Nos da error
// albumName = null;
// albumName = undefined