## Debugging e inspect 

### Haciendo debugging

Para aprovechar por completo la funcionalidad de debugging que implementa Express, lo que recomiendo es cambiar todos los console.log por debug haciendo uso de un namespace de la siguiente forma:

```
const debug = require("debug")("app:server");
debug("Hello debug");
```

De esta manera si ejecutamos nuestra aplicación con el comando DEBUG=app:* node index.js nos mostrará los diferentes logs.

Los namespaces que recomiendo son los siguientes:

- app:server para todo lo relacionado con el inicio del servidor como el mensaje Listening on http://localshost
- app:db para todo lo relacionado con logs de las bases de datos, inicialización y ejecución de scripts.
- app:error para todo lo relacionado con errores en nuestra aplicación.

Nótese que esta convención es opcional, es decir, tu puedes seleccionar cualquier namespace. Lo más importante es que sea el mismo que se pasará en la opción DEBUG.

Express.js por defecto ya trae unos logs de debugging por defecto los podemos activar mediante la variable de entorno DEBUG=express:\*.

Por lo que recomiendo los scripts en nuestro archivo package.json de la siguiente manera:


```
"scripts": {
	"dev": "DEBUG=express:*,app:* nodemon index",
	"debug": "DEBUG=express:*,app:* npm run start",
},
```

Ejecutando el modo inspect en desarrollo

El modulo inspect de Node.js nos permite ejecutar un ambiente para hacer debugging de código haciendo uso de la consola de desarrolladores de Google. Para ejecutarlo en modo desarrollo con nodemon basta con agregar el flag --inspect por lo que recomiendo el siguiente script en nuestro archivo package.json

```
"scripts": {
	"inspect": "DEBUG=express:*,app:* nodemon --inspect index"
},
```
