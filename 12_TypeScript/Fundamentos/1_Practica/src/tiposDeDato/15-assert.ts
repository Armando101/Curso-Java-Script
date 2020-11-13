// <> // Angle Brackets syntax
// Asercion de tipos

export {};

let username: any;
username = 'armando101';

// Tenemos una cadena, TS confía en nosotros
let message: string = (<string>username).length > 5 ? `Hello ${username}` : 'Goodbye';

console.log(message);

let usernameWithId: any = 'armando101';
// Como obtener el username?
username = (<string>usernameWithId).substring(0,10);
console.log('Username only ', username);

// También podemos utilizar la palabra reservada as
let otherMessage: string = (username as string).length > 5 ? `Hello ${username}` : 'Goodbye';
