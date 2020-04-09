class Persona {
    private edad: number;
    private altura: number;
    private dni: string;

    constructor(edad: number, altura: number, dni: string) {
        this.edad = edad;
        this.altura = altura;
        this.dni = dni;
    }
}

class Alumno extends Persona {
    private matricula: string;

    constructor(edad: number, altura: number, dni: string, matricula: string) {
        super(edad, altura, dni);

        this.matricula = matricula;
    }
}

// Cada uno de los tipos tiene una forma o estructura en que es representado, esto es mediante sus propiedades. Dentro de TypeScript si dos variables poseen propiedades idénticas aunque sean de distintas interfaces o clases, estas pueden ser asignadas entre sí.

let persona: Persona = new Persona(22, 1.80, '1234');
let alumno: Alumno = new Alumno(22, 1.80, '1234', '567');

// Todo alumno es una persona pero no toda Persona es un alumno
// alumno = persona; // Esto nos marcará un error
// persona = alumno; // Esto es correcto

// Todo tipo tiene una propiedad que es la estructura que representan
// alumno = persona Marca error ya que alumno contiene matricula pero Persona no
// persona = alumno Es correcto ya que persona tiene todas las propiedades que también tiene alumno