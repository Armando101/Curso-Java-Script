# ¿Qué son las cookies y cómo implementar el manejo de sesión?

Una **cookie** es un archivo creado por un sitio web que tiene pequeños pedazos de datos almacenados en él. Su propósito es identificar al usuario mediante el almacenamiento de su historial.  

Las **cookie session** son cookies que tienen un corto periodo de vida ya que son removidas cuando el navegador o la pestaña se cierran.  

Las **persistent cookies** se usan generalmente para guardar información de interés para el usuario.

Las **secure cookies** almacenan datos de forma cifradas para que terceros no puedan tener acceso a ellas, se suelen usar en conexiones HTTPS (Conexiones seguras).

Hay leyes sobre cookies que debes seguir al pie de la letra:

1. Avisarle al usuario que estás haciendo uso de cookies en tu sitio para guardar información
2. Es necesario que el usuario de su consentimiento para manejar cookies en tu sitio.  

Si las cookies son necesarias para la autenticación del usuario o para algun problema de seguidad, las leyes anteriores no aplican.

## Cookies vs Session Storage vs Local Storage

El **Local Storage** tiene un almacenamiento máximo de 5MB y la información no se va con cada request al servidor, la información va a persistir aunque cerremos el navegador.

El **Session Storage** es similar al Local Storage solo que la información está disponible por pestaña o por la ventana del navegador. La información estará disponible solo en esa pestaña. Al momento de cerrar el tab o ventana la información deja de existir.

Las **Cookies** tienen solo un almacenamiento de 4KB, se les puede establecer un tiempo de expiración, la desventaja de usarlo es que al hacer request de imágenes o datos las cookies van junto con la petición. Esto ocasiona un gran consumo de datos con cada petición. Una de sus ventajas es que se pueden hacer seguras mediante un flag llamado http only, esto permite que la información de la cookie sólo sera acedida y modificada en el servidor.

Para agregar un timpo de exipración en el session storage o local storage tenemos que hacerlo de manera programática con JS

Si la información no es sensible podemos almacenarla en Local Storage o en Session Storage.  

Si la información es medianamente sensible como nombres de usuario o terminos que puedan identificar al usuario lo más seguro es usar el session storage.  

Si la información es muy sensible como contraseñas o JWT lo más remendado es almacenarlo en una cookie siempre con el flag http only.

Para acceder a la API de session Storage y localStorage:
sessionStorage tiene dos métodos		
```js
sessionStorage.setItem('hello', 'temporary wolrd'); // Nos permite especificar con que key queremos almacenar la información

localStorage.setItem('hello', 'temporary wolrd');
```

Podemos ver estos valores que acabamos de agregar en el navegador en la parte de aplicación en Storage.

Para acceder a los datos des desde la consola:

```js
sessionStorage.getItem('hello');
localStorage.getItem('hello');
```