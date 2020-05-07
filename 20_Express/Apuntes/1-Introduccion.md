## ¿Qué es express y para qué sirve?

**Express.js** es un framework para crear aplicaciones web, apis y web services que ha sido inspirado en la librería Sinatra de Ruby. Es software libre y de código abierto con licencia MIT.

### Historio
- **StrongLoop** junio 2014
- **IBM** Septiembre 2015
- **node** Enero 2016

Algunas de las características de **Express.js**:

- Es **minimalista**, lo que lo hace muy liviano ya que muchas de sus funcionalidades deben ser instaladas posteriormente a través de plugins y módulos adicionales.
- Incluye un sistema de template engines muy poderoso, con Handlebars, Pug, Mustach, etc. disponibles por defecto.
- Maneja **Routing**, con wildcards, parámetros, etc.
- Implementa middlewares, lo que es una de sus características más notables e importantes.
- Permite la instalación de plugins a travpes de middlewares.

## Creando tu primer servidor

Para crear un servidor Express básico es necesario crear una carpeta para el proyecto, inicializar npm en este directorio e instalar Express.js como la primera dependencia de nuestro proyecto: npm i -S express. Seguidamente creamos el index.js con el código básico para requerir y ejecutar el servidor y la ruta base de nuestra aplicación.  

Con el método .listen inicializamos nuestro server en el puerto que elijamos. Este método devuelve el servidor como un objeto, que luego podemos utilizar para hacer un log con información que se mostrará por consola.  

En el archivo package.json definimos el script con el que arrancaremos nuestro server, el cual ejecutará la instrucción node index, adicionalmente podemos definir un script para desarrollo en el que ejecutemos el index con nodemon que es una dependencia que ejecutará el servidor y actualizará su ejecución de manera automática cada vez que se hagan cambios en los archivos.  

Finalmente con npm run dev iniciamos el servidor y estamos listos para ver los resultados en el navegador, ya sea como html o como JSON.

## Express application generator

El generador de aplicaciones oficial de Express, llamado **express-generator** permite generar toda una estructura base o scafold predeterminada para iniciar un proyecto nuevo.  

Primero debemos instalarlo como una dependencia global con la instrucción:

```
npm i express-generator -g
```

Luego para generar una aplicación, ejecutamos la instrucción:

```
express --view=pug <nombre-de-la-aplicacion>
```

Finalmente seguimos las instrucciones que nos indica:

```
#Cambiar de directorio:
cd <nombre-de-la-aplicacion>

#Instalar las dependencias:
npm install

#Ejecutar la app:
DEBUG=<nombre-de-la-aplicacion>:* npm start
```

Con esta funcionalidad creamos una estructura inicial, predeterminada para un nuevo proyecto con **Express.js**, con algunas rutas y middlewares iniciales con los que podemos empezar a trabajar, ahorrándonos algunos pasos de configuración.