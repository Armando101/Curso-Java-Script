## Common Matchers / Comparadores Comunes

Los comparadores comunes nos permiten probar nuevas cosas dentro de nuestro codigo.

Las pruebas dan a entender la información de lo que estamos creando en nuestro proyecto, así que siempre recuerda documentarlas muy bien y siempre guardar los cambios en tu repositorio ya sea localmente o de forma remota.

Los comparadores pueden ser:

- toEqual()
- not.toEqual()

## Numbers

Se puede correr las pruebas sin necesidad de tener la funcion de describe, Aunque es una muy buena practica agregarla.

Los Métodos para numeros que nos provee jest son:

- .toBeGreaterThan()
- .toBeGreaterThanOrEqual()
- .toBeLessThan()
- .toBeLessThanOrEqual()
- .toBeCloseTo()

## Truthness / Verdadero

Métodos de Jest usados:

- .toBeNull()
- .toBeTruthy()
- .toBeFalsy()
- .toBeUndefined()
- .not.toBeTruthy()

## Arrays
Métodos:

- .toContain()
- .toHaveLength()

## Coverage
Coverage de Jest es una opción que nos permite verificar el código de nuestra aplicación validando que porciones de código no han sido testeadas.

Para ello debemos agregar el flag --coverage en nuestro comando. Como output, nos dará un reporte.

## Métodos:

- toMatch()
- not.toMatch()
- toHaveLength()

## Monitoreo
Crearemos un watcher para que escuche los cambios y realice las pruebas automaticamente. Para ello usamos el flag **–watch**.
también podemos crear un script en nuetro package.json

## Setup de pruebas

Jest nos proporciona funciones auxiliares para mejorar el manejo de nuestras pruebas, esto significa. Que podremos correr funciones antes, durante o después de nuestras pruebas.

Esto nos permite setear ciertas configuraciones muy particulares que necesitemos antes que corra la prueba o después de esta.

afterEach() // Despues de cada prueba
afterAll() // Despues de todas las pruebas

beforeEach() // Antes de cada prueba
beforeAll() // Antes de todas las pruebas