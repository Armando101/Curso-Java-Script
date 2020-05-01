## Manejando errores

Para el manejo general de errores con Hapi usamos la instrucción:
```
process.on( '<tipo de error>', ( <error> ) => { <callback> } )
```

en el script principal.  
En el callback de la función, error devuelve un objeto con los detalles del error capturado. Los tipos de errores que vamos a manejar en el proyecto son: **unhandledRejection** y **unhandledException**. Estos dos tipos de errores son los más comunes y los que se aconseja manejar como mínimo en cualquier aplicación.  

Luego definimos el método **failActions** en las rutas en las que haremos las validaciones. Este método hará referencia a su vez al método del controlador en el cual se procesará el manejo de los errores.  

Para mostrar los mensajes de error en la aplicación de una manera más amigable y controlada, usaremos el módulo **boom**, que está integrado en el core de Hapi.

### Instalación de boom
```
npm install boom
```

### Documentación  
[Boom](https://www.npmjs.com/package/boom)