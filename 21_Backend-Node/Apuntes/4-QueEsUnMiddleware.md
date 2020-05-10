# ¿Qué es un middleware? 

Un middleware es una pieza de sotware que está en medio de otras dos, se le suele decir *softwareglue*, esto porque ayuda a conectar piezas de software.  

En express las funciones middleware están estructuradas de la siguiente manera:
```
function(req, res, next) {
	next()
}
```

En el middleware podemos modificar el request o el respone object. Para mandar llamar el siguiente middleware es ejecutando la función next(), si le pasamos un argumento a la función next, se ejecutan los middlewares de erro.

## Capa de manejo de erores con middlewares

Los middlewares de error son un poco diferentes, agregamos un parámetro de error al principio.
```
function errorHanlder(err, req, res, next) {
	res.status(err.status || 500);
	res.json({ error: err });
} 
```

## Manejo de errores asíncronos y síncronos en Express 

El manejo de errores en Express es el proceso de capturar un error de manera asíncrona como síncrona . Por defecto Express viene con un manejador de errores por defecto, así que no es necesario escribir uno para empezar a usarlo.

Los errores que ocurren de manera síncrona dentro un manejador de rutas o un middleware no requieren trabajo extra. Si un código síncrono lanza un error Express automáticamente capturará el error. Por ejemplo:

```
app.get("/", function(req, res) {
  throw new Error("BROKEN"); // Express capturara este error por sí solo.
});
```

Para errores que se retornan desde funciones asíncronas invocadas desde un manejador de ruta o un middleware, es necesario pasar el error como argumento a la función next(), de esta manera Express capturará el error y lo procesará. Por ejemplo:

```
app.get("/", function(req, res, next) {
  fs.readFile("/file-does-not-exist", function(err, data) {
    if (err) {
      next(err); // Se debe pasar el error a Express.
    } else {
      res.send(data);
    }
  });
});
```

Es responsabilidad de nosotros capturar errores que puedan ocurrir en código asíncrono invocado desde un manejador de ruta o middleware para que Express lo procese. Por ejemplo:

```
app.get("/", function(req, res, next) {
  setTimeout(function() {
    try {
      throw new Error("BROKEN");
    } catch (err) {
      next(err);
    }
  }, 100);
});
```

El ejemplo de arriba usa un bloque try...catch para capturar los errores en el código asíncrono y pasarlo a Express. Si el bloque try...catch fuese omitido, Express no podría capturar el error debido a que no es parte de un manejador síncrono de código.

Cuando se usan funciones que retornan promesas, puedes simplemente proveer la funcionalidad next al final del manejador catch de la promesa y Express automáticamente capturará el error. Por ejemplo:

```
app.get("/", function(req, res, next) {
  Promise.resolve()
    .then(function() {
      throw new Error("BROKEN");
    })
    .catch(next); // Errores serán pasados a Express.
});
```
## Validación de datos usando un middleware
La función que permitirá validar que un dato ingesado contenga lo que debe contener usamos unafunción de validación con la siguiente estructura.

```
function validationHandler(schema, check="body") {
	return function(req, res, next) {
		const error = validate(req[check], schema);
		error ? next (new Error(error)) : next()
	}
}
```

El objeto schema determina las reglas de los datos que vamos a enviar.  
check indica lo que vamos a verificar que sea correcto, por defecto tomamos el body del request.  

## ¿Qué es Joi y Boom?

**Joi**(Object Schema Validation). Sirve para validar que los datos que recibimos vengan en el formato adecuado.  

**Boom**(HTTP-friendly error objects). Nos ayuda a imprimir errores comunes en peticiones HTTP de forma sencilla.  

### Instalación
```
npm install @hapi/boom
```

### Documentación
[Joi](https://github.com/hapijs/joi)  
[Boom](https://github.com/hapijs/boom)  

## Middlewares más comunes
### Body parser

Analiza los cuerpos de las solicitudes entrantes en un middleware antes que los manejadores de ruta disponibles bajo la propiedad req.body. http://expressjs.com/en/resources/middleware/body-parser.html
### CORS

Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación. http://expressjs.com/en/resources/middleware/cors.html
Morgan

Un logger de solicitudes HTTP para Node.js. http://expressjs.com/en/resources/middleware/morgan.html
### Helmet

Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados
HTTP. ¡No es a prueba de balas de plata, pero puede ayudar! https://github.com/helmetjs/helmet
### Express Debug

Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando. https://github.com/devoidfury/express-debug
### Express Slash

Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas. https://github.com/ericf/express-slash
### Passport

Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones. https://github.com/jaredhanson/passport

Puedes encontrar más middlewares populares en el siguiente enlace: http://expressjs.com/en/resources/middleware.html
