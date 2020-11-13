export {};

let user: [number, string];
user = [1, 'armando101'];

console.log('user ', user);
console.log('id ', user[0]);
console.log('username ', user[1]);
console.log('username.length ', user[1].length);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'armando101', true];
console.log('userInfo ', userInfo);

// Arreglo de tuplas
let array: [number, string][] = [];
array.push([1, 'armando101']);
array.push([2, 'paparazzi']);
array.push([3, 'lensQueen']);

// Uso de funciones Array
// lensQueen -> lensQueen001

array[2][1] = array[2][1].concat('001'); // lensQueen001
console.log(array);