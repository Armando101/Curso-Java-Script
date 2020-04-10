function log(target, key) {
    console.log(key + ' se ha llamado');
}

class Persona {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    // Manda llamar a la función log y se le pasa la lógica de esta función
    @log
    sayMyName() {
        console.log(this.name);
    }
}

const persona: Persona = new Persona('Armando');
persona.sayMyName(); // 'Armando' 'sayMyName se ha llamado'

