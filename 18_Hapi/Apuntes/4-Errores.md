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

## Visualización de errores

Hasta ahora hemos estado mostrando un texto básico con los detalles de cada error capturado, pero en lo que se refiere a la apariencia, esta no es la forma más amigable de hacerlo ya que no le estamos dando mayor feedback al usuario sobre lo que ha pasado con su operación y lo estamos dejando en una calle sin salida.  

Lo que haremos será utilizar una vista a la que pasaremos la información del error y la mostraremos de una manera que sea visualmente más amigable para los usuarios. Para esto, sustituiremos los llamados a:
```
h.response( '<mensaje>' ).code( <código-error> )
```
por:  
```
h.view( '<ruta>', { <variables> } )
```

Para la visualización del error 404, incorporamos un nuevo layout, con su respectiva vista 404.hbs y definimos una nueva ruta para los llamados a urls que no estén definidas en nuestra aplicación con */{any\*}*. Esta ruta se coloca al final de las definiciones para que solo se tome en cuenta si ninguna de las rutas anteriores se corresponde con el request. Al hacer el llamado a la vista en el controlador del sitio, debemos recordar indicar en el tercer argumento de la función view, el objeto con la propiedad layout para indicar el nuevo layou que mostrará el error.  

## Controlar el error 404 en inert y el error de validación

El error 404 que ya estamos controlando es el que está relacionado con las rutas de nuestra aplicación, sin embargo, falta controlar la visualización de este mismo tipo de error para los archivos estáticos que usamos en nuestra interfaz y que estamos cargando con inert. Para esto haremos una nueva función en el controlador del sitio para el manejo de not found de los archivos estáticos.  

Básicamente lo que haremos será interceptar el error de *boom* devuelto por inert con *response.isBoom* y analizar si su código es 404 para redireccionar entonces a la vista apropiada. Para poder hacer la intercepción del error y alterar el life cycle del request, es necesario indicar la siguiente instrucción:
```
server.ext( 'onPreResponse', handler )
```
antes de la definición de las rutas en el script principal.

Cuando interceptamos el life cycle de un request, debemos hacer un *.takeover()* para forzar la finalización del ciclo, y esto lo hacemos luego del *code(n)* en el llamado a la vista.