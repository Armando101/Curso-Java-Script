// Vamos a extender la funcionalidad de la clase P con la función init
function init(target) {
    // Regresamos lo que ya tenía la clase y aparte lo que estoy extendiendo
    return class extends target {
        nombre = 'Armando';
        apellido = 'Rivera';

        sayMyName() {
            return `${this.nombre} ${this.apellido}`;
        }
    }
}

// Nuevamente coloco el decorador
// Esto provoca que se extienda la funcionalidad de la clase P como indico en la función init
@init
class P {
    constructor() {}

    sayMyName(){}
}

const p: P = new P();

console.log(p.sayMyName()); // Armando Rivera