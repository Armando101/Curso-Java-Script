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