// Creamos una clase
class Transporte {
    // Indicamos el acceso de las propiedades y el tipo de datos
    private velocidad: number;
    private formaDeMovilidad: string;
    
    // En el constructor asignamos valores a las variables
    constructor(velocidad: number, formaDeMovilidad: string) {
        this.velocidad = velocidad;
        this.formaDeMovilidad = formaDeMovilidad;
    }
    
    // Definimos funciones
    getVelocidad() {
        return this.velocidad;
    }
    
    setVelocidad(velocidad: number) {
        this.velocidad = velocidad;
    }
    
    getFormaDeMovilidad() {
        return this.formaDeMovilidad;
    }
    
    setFormaDeMovilidad(formaDeMovilidad: string) {
        this.formaDeMovilidad = formaDeMovilidad;
    }
}

// Instanciamos la clase
const carro: Transporte = new Transporte(20, 'Suelo');

// Declaramos una nueva clase que hereda de la clase transporte
// Al estar heredando tendrá los mismos métodos y propiedades
class Auto extends Transporte {
    // Declaramos los atributos
    private cantidaDePuertas: number;

    // Con super hacemos referencia al constructor de la clase padre
    // Super asigna valores a los atributos de la clase padre
    constructor(velocidad: number, formaDeMovilidad: string, cantidaDePuertas: number) {
        super(velocidad, formaDeMovilidad);
        this.cantidaDePuertas = cantidaDePuertas;
    }

    getVelocidad() {
        return super.getVelocidad() + 10;
    }

    getCantidadDePuertas() {
        return this.cantidaDePuertas;
    }

    setCantidadDePuertas(cantidaDePuertas: number) {
        return this.cantidaDePuertas = cantidaDePuertas;
    }
}

// Instanciamos una clase de tipo Auto
const auto : Auto = new Auto(20, 'Suelo', 4);