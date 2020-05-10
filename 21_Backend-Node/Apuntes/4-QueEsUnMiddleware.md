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
