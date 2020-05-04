## Depuración del proyecto

Para depurar el código del proyecto solo hace falta iniciar el servidor de node con la siguiente instrucción:

```
node --inspect index.js
```

Se lanzará el servidor como de costumbre, pero adicionalmente se creará un servidor para la interfaz de depuración que podemos acceder desde el navegador Google Chrome.

Específicamente se podrá ver un icono de NodeJS al inicio de la barra de menú del Inspector de elementos, y al hacer clic sobre este, se abrirá una consola de DevTools dedicada para la depuración de Node. Agregamos luego el proyecto al workspace y estamos listos para iniciar la depuración.

Una alternativa a las DevTools de Google Chrome es la funcuionalidad de depuración que viene integrada con el editor de Microsoft VisualStudio Code. Esta funcionalidad está representada por un ícono particular en la barra de herramientas que asemeja un bug con un círculo tachado. Al hacer clic sobre este icono, se habilita el panel con las opciones de configuración y ejecución de la depuración. Luego en la terminal integrada del editor se puede ver la consola de depuración.

En ambas herramientas es posible establecer breakpoints, run paso a paso, inspección de variables y otras funciones de depuración.

Una tercera alternativa es mediante la implementación del módulo hapi-dev-errors dentro del propio código de la aplicación. Este módulo se instala, requiere y registra de la misma manera que Good y los otros módulos que hemos visto, pero en las opciones de registro indicaremos la propiedad: showErrors, a la que asignaremos un valor buleano de acuerdo con la variable de entorno process.env.NODE_ENV para asegurarnos de que los mensajes de depuración solo sean visibles en el entorno de desarrollo, no en producción. Con este módulo, los errores serán capturados y mostrados directamente en el navegador de una forma amigable y con algunos detalles para su depuración.