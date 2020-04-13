// JS no tiene variables privadas en sus objetos
// Podemos simular esto de la siguiente manera

const person = () => {
    var saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName  = name;
        }
    };
};

newPerson = person();

// Para acceder a la variable saveName, solo con getName y setName
console.log(newPerson.getName());
newPerson.setName('Armando');
console.log(newPerson.getName());

// No podemos acceder a la propiedad de esta manera
// console.log(newPerson.saveName);
