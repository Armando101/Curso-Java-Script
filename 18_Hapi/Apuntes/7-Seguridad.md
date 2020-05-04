## Estrategías de autenticación - Asegurando el API REST

Con el objeto de restringir el acceso a nuestra API para que solo los usuarios registrados en nuestra base de datos puedan hacer usa de ella, implementaremos una estrategia de autenticación básica de Hapi, para lo cual será necesario instalar un módulo adicional llamado hapi-auth-basic.

Una vez instalado, requerido y registrado el módulo hapi-auth-basic en el script de nuestro plugin de API REST, debemos implementarlo de la siguiente manera:

```
server.auth.strategy('simple', 'basic', { 'validate': validateAuth })
```

### Instalación
```
npm i hapi-auth-basic
```

### Importación
```
const autBasic = require('hapi-auth-basic');
```

### Documentación
[Hapi auth basic](https://www.npmjs.com/package/hapi-auth-basic)

Donde simple es el nombre de la estrategia de autenticación, basic es el tipo (asociado al módulo que instalamos) y validateAuth es el método en el que definiremos la lógica de validación de los usuarios. Este último de forma muy similar a como lo hicimos antes en el método validate del modelo users en nuestra aplicación.

De esta manera, cuando se intente acceder a cualquiera de las rutas definidas para nuestra API REST, el navegador solicitará los datos de autenticación usuario y password y solo devolverá resultados útiles cuando las credenciales obtenidas de la autenticación sean válidas.

## Seguridad básica - Asegurando el servidor contra CSRF

Una de las vulnerabilidades más comunes en cualquier servidor o sitio web, es la Falsificación de Petición en Sitios Cruzados o **CSRF** por sus sigles del inglés Cross-site request forgery, que es un tipo de ataque en el que son transmitidos comandos no autorizados por un usuario del sitio web en el que deberíamos confiar.

Para atender y corregir esta vulnerabilidad incorporaremos a nuestro proyecto un módulo adicional de Hapi llamado **crumb** que utiliza un token de validación para cada una de las rutas accedidas por los usuarios.

### Instalación
```
npm install crumb
```

### Implementación

Una vez instalado con npm i crumb -S procedemos a registrarlo en el scrip principal, de la misma manera que hemos hecho antes con good.

```
const crumb = require('crumb')

await server.register({
  'plugin': crumb, 
  'options': {
    'cookieOptions': {
      'isSecure': process.env.NODE_ENV === 'prod'
    }
  }
})
```

### Documentaci[on]
[crumb](https://www.npmjs.com/package/crumb)  

**Crumb** utiliza una cookie para realizar la validación del token en cada una de las rutas de nuestra aplicación y la contrasta con el valor de un input de tipo hidden y de nombre crumb, que debe estar presente en cada una de las vistas.

La propiedad isSecure estaría entonces activa (en true) cuando estemos en el entorno de producción e inactiva (en false) mientras estemos en el entorno de desarrollo. Cuando no está presente el input de validación o su valor no es el correcto, el servidor devuelve un código de error 403 al browser, indicando que el acceso está prohibido o no está autorizado. 