## Introducción a Firebase

Ya teniendo validada la información que recibimos del usuario, el siguiente paso es almacenarla para su posterior recuperación. Para esto haremos uso del servicio de base de datos de **Firebase / Storage** con una configuración básica.

El proceso de creación y configuración de la base de datos se hace a través del sitio web [Firebase](https://firebase.google.com) mediante la consola de administración, accediendo con una cuenta Google y creando un proyecto nuevo. En la sección de Configuración / Cuentas de Servicio, generamos las credenciales de acceso para NodeJS en formato json, que usaremos en nuestro proyecto, en la siguiente clase.  

## Creando un modelo y guardando en firebase

Para implementar el uso de la base de datos de Firebase en nuestro proyecto, crearemos el directorio /config para guardar el archivo json con las credenciales de acceso al servicio, y el directorio /models con los modelos asociados a las diferentes entidades que requiere nuestra aplicación. Instalamos desde la terminal el módulo firebase-admin con npm. Requerimos el módulo en el index.js del directorio /models e invocamos el método firebase.initializeApp()

### Instalación
```
npm install firebase-admin
```

También instalamos bcrypt que nos ayudará a encriptar las contraseñas de los usuarios
```
npm install bcrypt
```