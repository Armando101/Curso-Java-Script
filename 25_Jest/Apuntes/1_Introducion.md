## ¿Qué son las pruebas Unitarias?

Las pruebas unitarias lo que hacen es tomar todos tus proyectos o esos bloques de código y descomponerlo en pequeñas partes que vamos a probar. Así, todo lo que vamos pasando sabemos que esta funcionando correctamente y que no hay ningún inconveniente o bug.

Las pruebas unitarias comprueban lo que son casos estándares (suposición explícita) es decir, no son perfectas. Las características de las pruebas unitarias son:

- Automatizable: Deben correr sin ningún proceso manual.
- Total Cobertura: Debemos de pasar por cada bloque escrito.
- Reutilizables: Podemos usarlas para probar otros bloques.
- Independientes: No pueden depender de otra prueba para funcionar.
- Rápidas de crear: TIenen que ser algo conciso que prueben algo muy particular.

### Ventajas de las pruebas unitarias:

- Proporciona un trabajo ágil.
- Calidad del código.
- Detectar errores rapido.
- Facilita los cambios y favorece la integración.
- Proporciona información.
- Reduce el coste.

### Desventajas
- Al ser programadas por nosotros no son perfectas


## Herramientas para pruebas en Javascript

JavaScript es un lenguaje muy competitivo y curiosamente ha sido uno de los lenguajes con más frameworks de pruebas, pero con menos cultura en la comunidad.
Entre los más populares encontramos frameworks como Ava, Tape, Enzyme, Jasmine, Mocha y Jest.

En este curso nos enfocaremos a trabajar con Jest, Aunque te invito a que conozcas un poco de los otros frameworks mencionados anteriormente.

## ¿Qué es Jest?

Jest es una herramienta creada y mantenida por la comunidad open source con apoyo de Facebook. Jest surgió con el objetivo de agregar pruebas unitarias a proyectos con react pero ha sido tan importante que cada vez se emplea en mas proyectos con otros frameworks.

Jest no requiere configuraciones adicionales demasiado complejas para añadir pruebas a cualquiera de nuestros proyectos.

## Instalación y configuración

Vamos a configurar el proyecto en el que estaremos creando las pruebas unitarias. Para esto es necesario irnos a la consola.

Los comandos que usaremos en la consola son:

- pwd para saber donde estamos exactamente en el computador.
- mkdir para crear un directorio.
- cd para entrar a la carpeta creada.
- npm init para inicializar nuestro proyecto, esto nos creara un package.json.
- **npm install --save-dev jest** para agregar jest como dependencia de desarollo a nuestro poryecto.
- **npm install --save-dev babel-jest babel-polyfill** para poder usar ES6 en nuestras pruebas unitarias.
- **npm install -g jest**
- npm install --save-dev @babel/preset-env

Para poder utilizar ES6 creamos un archivo llamado .babelrc y escribimos lo siguiente

```js
{
    presets: ["@babel/preset-env"]
}
```

Ejecutamos una prueba con el comando
jest
```

Recuerda:
Siempre iniciar tu proyecto creando un repositorio en git para mantener tu código siempre actualizado usando Git init.
