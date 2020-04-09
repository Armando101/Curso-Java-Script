// Una interface es un tipo abstracto
// Denota la estructura que se espera para un objeto

type Dni = number;

interface Persona {
    altura: number;
    edad: number;
    nombre: string;
    apellido: string;
    Notas?: string;
    dni: Dni;
}

// Si declaro Persona como una clase y hago una instancia
// const persona: Persona = new Persona();
// No me marcará error

// Al tener una interface y hago una instancia
// const persona: Persona = {}
// Marcará error ya que la interface me forza asignar valores a las propiedades
// El signo de interrogación se le conoce como Elvis sign, esto quiere decir que la propiedad es opcional

const persona: Persona = {
    altura: 1.80,
    edad: 22,
    nombre: 'Armando',
    apellido: 'Rivera',
    dni: 36601731
}
