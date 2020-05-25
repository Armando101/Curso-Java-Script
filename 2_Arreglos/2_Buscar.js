
let names = ['Armando', 'Rodrigo', 'Francisco', 'Pablo'];

// Find
// Itera el arreglo y si encuentra la coincidencia la retorna
// En otro caso retorna undefined
var search = names.find(name => name == 'Rodrigo');
console.log(search);

// findIndex
// Retorna el índice de la primera coincidencia
// En otro caso retorna -1
search = names.findIndex(name => name == 'Francisco');
console.log(search);

// Determines if the callback function returns true
var numbers = [10, 20, 30, 40, 50, 80, 110];
search = numbers.some(number => number > 30);
console.log(search);
