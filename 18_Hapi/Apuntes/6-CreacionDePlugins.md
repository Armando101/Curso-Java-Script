## Creación de plugins - Teoría

Habiendo completado toda la funcionalidad básica de nuestra aplicación, podemos pensar en extender algunas de estas funcionalidades para que otros desarrolladores puedan tener acceso desde sitios externos e integrarse con nuestro proyecto. Por lo general la solución más conveniente es ofrecer una API REST a través de un plugin personalizado.

En Hapi, un plugin es un Objeto que tiene básicamente la siguiente estructura:

```
const plugin = {
  'name'    : 'miPlugin', // --- requerido
  'version' : '1.0.0', // --- opcional e informativo, puede ser usado por otros plugins
  'register': function (server, options) { // Función que recibirá el servidor inyectando
  											// los argumentos iniciales
    ...
  }
}
```

En server se indica la referencia de cuál servidor se la añadirán las responsabilidades asociadas a este plugin.

En opciones se pueden colocar parámetros externos como credenciales, condiciones especiales, entre otras.

## Creación de plugins - Implementando un API REST

Partiremos de la estructura que vimos en la clase anterior para desarrollar nuestra API REST.

En el método register del *plugin* definiremos tanto las rutas necesarias para acceder a nuestra API, como el handler que hace las veces de método del controlador para cada ruta. Además, en lugar de preparar y devolver una vista, devolveremos simplemente la salida por defecto de Hapi que es de formato *JSON*.

Luego de tener definidas todas las rutas, los *handlers* con los parámetros esperados, las validaciones con Joi y las salidas de posibles errores con Boom, estamos listos para requerir y registrar nuestro plugin en el *script* principal de nuestra aplicación.

Adicionalmente, modificaremos la función fileNotFound(...) en el controlador de sitio para evitar que los errores 404 de nuestra API, se visualicen a través de la vista y en cambio lo hagan con JSON que es la salida por defecto.