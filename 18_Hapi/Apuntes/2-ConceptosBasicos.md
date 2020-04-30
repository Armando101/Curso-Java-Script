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

Para implementar un plugin nuevo a nuestro proyecto, lo primero es importarlo en el index.js con la función **require()** de NodeJS. Luego es necesario registrarlo con ___await server.register(plugin)___.

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

## Plantillas con Handlebars

Las plantillas son generalmente archivos html con marcadores particulares que permiten la inserción de variables y la ejecución de algunas instrucciones de programación, antes de ser renderizados. Esta interpretación previa la realiza un plugin conocido como motor de plantillas, como es el caso de Handlebars.

Para incluir variables o instrucciones de código con Handlebars es necesario el uso de dobles llaves (o curly braces). Un bloque de html con Handlebars sería algo como lo siguiente:

```
<div class=""post"">
  <h1>Author: {{fullName author}}</h1>
  <div class=""body"">{{body}}</div>

  <h1>Comments</h1>

  {{#each comments}}
  <h2>By {{fullName author}}</h2>
  <div class=""body"">{{body}}</div>
  {{/each}}
</div>
```

Los bloques de instrucción en Handlebars comienzan con # y se cierran con /.

Para más información, recuerda consultar la documentación oficial en [Handlebars](http://handlebarsjs.com/) y así conocer mucho más de las opciones que te brinda este potente motor de plantillas.

## Renderizado de vistas - Layout y template del home

En **Hapi** podemos usar la arquitectura *MVC (Modelo-Vista-Controlador)* para organizar la lógica de nuestras aplicaciones. Para implementar el uso de vistas es necesario instalar el plugin Vision y configurarlo de la siguiente manera:

```
server.views({
  engines: { // --- hapi puede usar diferentes engines
    hbs: handlebars // --- asociamos el plugin al tipo de archivos  
  },
  relativeTo: __dirname, // --- para que las vistas las busque fuera de /public
  path: 'views', // --- directorio donde colocaremos las vistas dentro de nuestro proyecto
  layout: true, // --- indica que usaremos layouts 
  layoutPath: 'views' // --- ubicación de los layouts
})
```

Al crear el archivo **layout.hbs** evitaremos repetir las mismas secciones de html en cada una de las vistas, remplazando sólo lo relativo al contenido que cambiará según las rutas definidas en nuestra aplicación.  

En la definición de las rutas, tendremos que cambiar la respuesta devuelta en *handler* para que invoque a *h.view()* en lugar de *h.file()*, con los parámetros esperados por el layout.  

Para poder incorporar el html de las vistas dentro del **layout.hbs**, es necesario usar **triples llaves** en lugar de dobles, ya que por defecto Handlebars escapa el código html convirtiéndolo en su equivalente texto plano.

## Recibiendo parámetros en una ruta POST - Creación del registro

El objeto **request** nos permite obtener datos de la petición recibida desde el cliente. El método pasado como parámetro para la creación de este objeto define si trabajaremos con GET o POST.

Proipiedades del request:
```
- request.path
- request.method
- request.get
- request.payload: es en esta propiedad donde recibimos los datos enviados con el método POST.
```
Ciclo de vida del objeto request, se refiere a los eventos que suceden durante la carga, existencia y descarga del objeto:  

```
- OnRequest			// Se recibe el request
- OnPreAuth			// Se valida la autorización
- OnCredentials		// Se reciben las credenciales
- OnPostAuth		// Despues que se valida la autorización
- OnPreHandler		// Antes de que corra el handler
- OnPostHandler		// Después de que corra el handler
- OnPreResponse		// Antes de que responda la ruta
```

Más información sobre el ciclo de vida del objeto **request** en el repositorio oficial del proyecto: [Link](https://github.com/hapijs/hapi/blob/master/API.md#request-lifecycle)

## Definir una mejor estructura con buenas prácticas en Hapi

Con el fin de tener una mejor organización de los archivos de nuestro proyecto, y considerando que estamos trabajando con la arquitectura MVC, haremos una primera refactorización del código.

Creamos el directorio */controllers* para colocar los controladores site y user de nuestro proyecto. Pasamos la definición de las rutas a su propio módulo *routes.js* como un arreglo que exportaremos más adelante. Distribuímos los handlers asociados a cada vista en la definición de las rutas hacia el archivo del controlador para cada contexto, ya sea site o user. Requerimos los controladores desde el módulo de rutas, y fnalmente importamos la definición de rutas desde el index.js y las asociamos al server con server.route(routes).

La raíz de la estructura general quedaría de momento:  
- /public
- /controllers
- /views
- routers.js
- index.js