## ¿Qué es un middleware?  

Un middleware es una **función** que tiene **tres argumentos**:  
- **request object**
- **response object**
- **callback**: llamado next que cunado se invoca llama al siguiente middleware.

```
function(req, res, next) {
	next();
}
```
Un middleware es como una serie de capas en un request, sirve generalmente para hacer modificaciones al reques y response object, podemos hacer manejo de errores, validaciones, etc. Lo más importante es llamar la función next.  

### Tipos de middleware
- 3rd party: un ejemplo es el body-parser. Cuando lo agregamos a la aplicación lo que hace es intersectar el request, identificar el cuerpo y aplicar lo necesario para que funcione.
- Router level: son usados para aplicar router a las vistas.
- Application level: por ejemplo express.static
- Built-in: vienen integrados con express
- Error-handling.

### Error-handling
Este es un middleware diferente ya que tiene un parámetro de error, si no incluye estos cuatro parámetros express no lo va a reconocer como middleware.  
Si agregamos un middleware personalizado tenemos que incluir el error.

```
function errorHandler(err, req, res, next) {
	res.status(err.status || 500);
	res.render("error", { error: err }):
}
```