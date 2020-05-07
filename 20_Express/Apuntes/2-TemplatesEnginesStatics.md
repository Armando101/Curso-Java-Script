## Qué es y cómo crear tu propio template engine

Un template engine es una implementación de software que nos permite mezclar datos con una plantilla o template con el fin de generar un documento que será renderizado en el navegador. Algunos de los template engines más conocidos son: Handlebars (para JavaScript), Twig y Blade (para Laravel / PHP), JSP (para Java) o Ninja (de python).    

**Express** nos permite crear nuestro propio template engine personalizado. Además permite el uso de múltiples engines según la extensión de los archivos que le hayamos indicado.  

```
app.engine('<extension>', function( filePath, options, callback ){});

app.set('views', '<directorio-de-vistas>');
app.set('view engine', '<extension>');
```

Donde **filePath** indica la ruta del template, **options** indica las variables que vamos a mezclar con el template y **callback** será la función que mezcle la plantilla con las opciones para obtener el documento que será mostrado en el navegador.  

Algo importante que debemos notar es que en Node, los callbacks son *"error first"*, por lo que el primer parámetro devuelto por las funciones por lo general serán siempre el objeto que contenga los detalles del error, si es que los hay.  

Además en el objeto options recibido en el callback del engine, no solo se pasan las variables que definimos en la llamada, sino otros datos como **settings** y locals que deberemos descartar cuando estamos creando nuestro propio engine, pero que, cuando trabajamos con los template engines predefinidos, ya es Node quien se encarga de manejarlos.

## Usando Pug como template engine
Utiliza un sistema de indentación

### Instalación
```
npm i pug
```

## Usando Handlebars como template engine

Para poder hacer uso de Handlebars en nuestro proyecto de Express.js lo único que debemos hacer es instalar como dependencia la librería consolidate y registrarla como engine.

Tenienendo una aplicacion de Express.js basica:

```
const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.render("index", { hello: "hola", world: "mundo" });
});

const server = app.listen(3000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
```

Justo antes de las definiciones de rutas agregamos:

```
const engines = require('consolidate');

app.engine('hbs', engines.handlebars)

app.set('views', './views')
app.set('view engine', 'hbs')
```

De esta manera podemos crear un nuevo template llamado **index.hbs** en la carpeta **views**.

```
<h1>{{hello}} {{world}}h1>
```

Y eso es todo, ya podemos usar nuestros templates hecho con Handlebars.

## Creando nuestro layout de productos usando Pug

Para implementar templates con PUG, sólo bastará con instalar PUG con la instrucción npm i -D pug y definir el uso del view engine respectivo usando los middlewares de manera similar a como vimos antes con Handlebars.

PUG incluye instrucciones que facilitan el trabajo con las vistas:

- **extends**: define un template base del que extiende el template actual.
- **include**: define la inclusión o importación de otro template.
- **block**: define un placeholder para el contenido de bloques en los que se insertarán partes de un template.

Para más información sobre el uso de PUG, Bulma y FontAwesome, recuerden consultar los enlaces adicionales de esta clase.

### Bulma
Es un framework de css

#### Documetación
[Bulma](https://bulma.io/alternative-to-bootstrap/)