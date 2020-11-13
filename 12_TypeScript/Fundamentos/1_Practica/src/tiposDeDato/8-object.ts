let user: object;
user = {}; // Object

user = {
    id: 5,
    username: 'Armando101',
    firstName: 'Armando',
    isPro: true
};

// Object vs object (Clase JS vs tipo TS)
// user.id = 9; // Da un error ya que el tipo es object

const myUser = {
    id: 5,
    username: 'Armando101',
    firstName: 'Armando',
    isPro: true
};

const isInstance = myUser instanceof Object; // true  // Clase Object de JS
myUser.id = 10; // No marca error es una instancia de la clase Object