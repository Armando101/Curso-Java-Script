## El objeto h, response y sus herramientas

El objeto **h**, es el segundo argumento que recibe la función handler de una ruta definida.

Contiene una colección de utilidades y propiedades relativas a la información de respuesta que se va a enviar al cliente, al navegador.

### Métodos básicos del objeto h:

- h.response(): Crea un objeto de respuesta.
- h.redirect(): Redirecciona una petición.

El objeto Response (creado con el método h.response), permite definir las propiedades de la respuesta, puedo cambiar el código de estado o enviar información.  

A través de este objeto se pueden especificar las cabeceras, tipo de documento y código de respuesta devuelto al cliente, mediante los métodos: 
- .header(): Configura un encabezado en la respuesta.
- .type(): Permite definir el tipo mime de la respuesta
- .code(): Permite definir el código de estado de la respuesta

Código: Ejemplo de respuesta simple y redirect.  

## Uso de plugins - Contenido estático

Los plugins son módulos o archivos de Javascript creados generalmente por terceros, que le adicionan funcionalidades al framework base de **Hapi**.  

Para implementar un plugin nuevo a nuestro proyecto, lo primero es importarlo en el index.js con la función **require()** de NodeJS. Luego es necesario registrarlo con ___awaitserver.register(plugin)___.

Por el momento, incluiremos en nuestro proyecto los plugins de **Inert** y **Path**
### Intalación
```
npm install inert
```

```
const inert = require('inert')
const path = require('path')
```

El plugin Inert extiende los métodos disponibles en el objeto *h*, y **Path** nos permite definir una ubicación relativa para todos los routes de nuestro proyecto, entre otras cosas.  
### Documentación  
[inert](https://www.npmjs.com/package/inert)