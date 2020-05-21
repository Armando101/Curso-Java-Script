# ¿Qué es JavaScript?
La web nace con los primeros navegadores, como netScape era difícil encontrar las páginas ya que se tenían que buscar directamente con las URL.  

En ese momento las páginas eran estáticas, no había interacción y así nace JS. El fundador es **Brendad Eich**, en el 95 generó mocha que es un lenguaje para NetScape, este lenguaje intentaba darle interactividad a las páginas fue creado en 3 semanas, después evolucionó a LiveScript y a finales de 1995 nace JS esto fue más una cuestión de Marketing porque en ese momento estaba naciendo Java que tenía mucho auge en la comunidad.  

Microsoft decide tomar JS para su navegador IE y saca JScript, es lo mismo que JS pero para IE.  

En 1997 ECMA que es una organización decide poner orden para evitar que cada navegador tuviera distintos lenguajes, ECMA se encarga de decidir los estándares para los navegadores.  

V8 nace en el 2008, es una herramienta de JS que corre en el navegador.  

En el 2009 se crea Node.js, es la forma en la que podemos trabajar con JS en el backend.  

En el 2010 debido a la adopción de JS nacen los framewoks web.  

En el 2015 nace ES6 que es JS con nuevas funcionalidades y cada año se agregan más.  

**ECMAScript** es una especificación estandarizada por **Ecma International**. Fue creada para estandarizar *JavaScript* y para ayudar a fomentar múltiples implementaciones independientes.

[Evolución de la web](http://www.evolutionoftheweb.com/)

## Historia de JS

En los 90's sólo podíamos tener páginas estáticas, sólo podíamos ver texto e imáganes.
Ante este problema nace la necesidad de tener un lenguaje de programación que nos permita agregar interactividad del usuario para generar contenido en sitios de otros usuarios.  

Así nace JS, es un lenguaje interpretado, orientado a objetos, débilmente tipado.  
Debido a que es un lenguaje débilmente tipado podemos hacer cosas como la siguiente:  

```js
4 + "7"; // 47 esto es una string
4 * "7"; // 28 esto es un number
2 + true; // 3 esto es un number
false - 3; // -3 esto es un number
```

JS realmente es compilado ya que el motor V8 es el que se encarga de compilar este código.

## Forwards
Hace referencia a que si sale una nueva versión tú ya la vas a poder utilizar en tu entorno de trabajo y esto no va a romper lo que ya has hecho antes.  
_Ser compatible con versiones futuras significa que incluir una adicción al lenguaje en un programa no causaría que se rompa si se ejecuta en un motor JS anterior. JS no es compatible con versiones futuras_

## Backwards
Hace referencia a que todas las funciones nuevas o módulos nuevos no van a romper el código anterior pero no lo puedes utilizar en tu entorno de trabajo en ese momento. Todas las versiones de JS tienen que ser evaluadas por la W3E y se tienen que hacer estándares.  
_La compatibilidad con versiones anteriores sigifica que cuando se acepta como JS válido, no habrá un cambio futuro que haga que el código deje de funcionar._

## Babel
Babel es un compilador de JS que te permite utilizar las diferentes versiones de JS. Lo que hace babel es traducir nuevas versiones de JS a versiones viejas para poderlas utilizar en el navegador.

[JS ¿Es compilado o interpretado?](https://medium.com/@pharesdiego/javascript-un-lenguaje-compilado-o-interpretado-962ee405e123)

# ¿Por qué JavaScript?

JS permite que nuestro sitio web sea dinámico. A finales del 2019 la W3E (organización que determina los estándares que vas a poder utilizar y que van a poder correr en el navegador) sacó un nuevo lenguaje de progamación llamado WebAssembly, con este lenguaje ya no vas a necesitar utilizar HTML ni CSS ni JS.  

- JS tiene una comunidad enorme.   
- Para desarrollo web tenemos Frameworks como Angular, Vue, React y Svelt
- Si no quires desarrollar para web puedes utilizar React Native para aplicaciones nativas para Android y IOs.
- Con Electron puedes construir aplicaciones de escritorio tanto para windows como para Linux
- Puedes trabajar en el Backend o IoT con node JS.

## Datos primitivos

```js
40 Number
"Armando Rivera" String

true
false 	Boolean

null		Object
undefined	undefined
```

## Objetos
Los objetos no son tipos primitivos
```js
[1, 2, 3, 4] // Arrays
{name: 'Armando', lastname: 'Rivera'} 	// Objeto
```

## Variables
_Una variable es la representación de un lugar en memoria que reservamos para guradar un valor_

```js
// Declarar una variable y asignarle un valor
var nombre = 'Armando';

// Declarar variables
var edad;	// Le digo al navegador que reserve un espacio en memoria llamado edad

// Inicializar variables
edad = 21;

// Decalaramos e inizalizamos un arreglo
var elementos = ["Computadora", 'Celular'];

// Declaramos un objeto
var persona = {
	nombre: 'Armando',
	edad: 21
}

// Mostramos el contenido de las variables
console.log(elementos);
console.log(persona);

// Accedemos a un elementos del arreglo
console.log(elementos[0])

// Accedemos a un atributo del objeto
console.log(persona.nombre)
```

## Funciones
Son un conjunto de sentencias que podemos utilizar con los valores que ya guardamos antes en las variables.  
Es un conjunto de tareas para generar algo y regresarlo.  
Las funcines pueden recibir parámetros que son valores de entrada de la función, se colocan dentro de los paréntesis.

Existen dos tipos de funciones.

### Funcioes declarativas
Con la palabra reservada __function__ declaro una función
```js
function miFuncionDeclarativa() {
	return 3;
}

// Llamamos la función
miFuncionDeclarativa();
```

### Funcioes de expresión
También son conocidas como funciones anónimas.  
Genereamos una variable que guarda una función.
```js
var miFuncionDeExpresion = function (a, b) {
	return a + b;
}

// Llamamos la función
mifuncion(5, 3);

```

### Ejemplos
```js
function saludar(estudiante) {
	console.log('Hola ', estudiante);
}
```

```js
function sumar(a, b) {
	return a + b;
}
```
## ¿Cuándo utilizar una función declarativa y una expresiva? 

Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

### Funciones Declarativas:

En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:
```js
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Armando');
```

### Expresión de función:

En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará un función anónima.

```js
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre('Armando');
```

En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

### Diferencias:

A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.  

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.