// Corchetes []

// Tipo explicito
let users: string[];
users = ['Armando', 'Gerardo', 'Yordy', 'Oscar'];
// users = [1, true, 'test']; // Error

// Tipo inferido
let otherUsers = ['Oscar', 'Nicolas', 'Ana', 'Christian'];
// otherUsers = [1, true, 'test']; // Error

// Array<tipo>
let pictureTitle: Array<string>;
pictureTitle = ['Favorite sunset', 'Vacation time', 'Lanscape'];

// Accediendo a los valores de un Array
console.log('First user ', users[0]);
console.log('First Picture ', pictureTitle[0]);

// Propiedades de un Array
console.log('users.length ', users.length);

// Uso de funciones en Arrays
users.push('Juan');
users.sort();
console.log('users ', users);