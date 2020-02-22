// Importamos un módulo
// Utilizamos la palabra reservada import
// Dentro de llaves indicamos los elementos a importar
// Especificamos el módulo del cuál se importará el elemento

// Para abrirlo usamos un servidor local
// Podemos usar static server

// sudo npm install static-server
// static-server
import { name, edad } from './modulo_dos.mjs'
console.log(name);

// Importar valores por defecto
// def no es una palabra reservada, es un identificador el cual tomará el valor del valor por defecto exportado
import def from './modulo_dos.mjs'
console.log(def);

// Otra sintaxis para exportar el valores por defecto y con nombres es:
// import def, {name, edad} from './modulo_dos.mjs'

// Si intento modificar una variable perteneciente al módulo me marca un error, esto porque las variables son de sólo lectura
// edad = 18;

console.log(edad);