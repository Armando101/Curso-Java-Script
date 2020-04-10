function logProperty(target, key) {
    let _val = this[key];
    const getter = () => {
        console.log(`Get: ${key} = ${_val}`);
        return _val;
    }
    const setter = (newValue) => {
        console.log(`Set: ${key} = ${newValue}`);
        _val = newValue;
    }

    // Object.defineProperty es una funcionalidad que le puedo aplicar a los objetos
    // Pide tres argumentos
    // target: el elemento que contiene lo que estamos extendiendo, en este caso Persona
    // key: a quién estamos extendiendo, en este caso name
    // objectProperty: el objeto que estamos añadiendo como funcionalidad extra

    // Defino mis métodos get y set
    const objectProperty = {
        get: getter,
        set: setter
    } 
    Object.defineProperty(target, key, objectProperty)
}

class Persona {
    
    // Extiendo la funcionalidad de la propiedad
    // Ahora esta propiedad tiene un getter y un setter personalizado
    @logProperty
    public name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

const p = new Persona('Armando');
p.name = 'José';    // Set Armando = José

const nameFromClass = p.name;   // José = José