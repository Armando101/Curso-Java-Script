## Creando primer bundle

Necesitamos instalar webpack
```
npm i webpack
```

Desde la versión 4 necesitamos instalar el cli de webpack
```
npm i webpack-cli -D -E
```

Ahora podemos usar webpack como comando para esto hacemos lo siguiente
```
npx webpack -v
```

Ahora podemos configurar algunos comandos, por ejemplo tomar mi archivo de JS y pasarlo por webpack
Inicamos el archivo de entrada y como se va a llamar el archivo de salida.
Después de ejecutar el comando podemos ver que generó un archivo con código optimizado, tal vez no se vea en un principio la optimización si sólo tenemos un hola mundo.
Al tener más código podemos ver más claramente la relación de costo/beneficio
```
npx webpack --entry ./index.js --output ./bundle.js
```

Podemos especificar de igual manera el modo en que se ejecutará nuestra conversión, podemos seleccionar modo desarrollo o producción, si no lo especificamos por defecto selecciona modo _production_
```
npx webpack --entry ./index.js --output ./bundle.js --mode development
```
El modo de __desarrollo__ resulta más fácil para los desarrolladores hacer debug, webpack no comprime todo el código, esto ayuda a que sea más rápido ya que cuando desarrollamos es más común hacer varias transpilaciones y esto ahorra tiempo.

## Webpack config
Este es un archivo que nos permite dar configuración a nuestro proyecto.
Este archivo se tiene que llamar __webpack.config.js__

El siguiente script es igual a la línea que habíamos corrido anteriormente en la terminal
Ahora ya sólo ejecutamos el siguiente comando y se tomarán las configuraciones de este archivo
```
npx webpack
```

```js
const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname),
        filename:'bundle.js'
    }
}
```

También podemos hacer crear un comando con npm, primero lo configuramos en el archivo __package.json__

```json
 "scripts": {
    "build": "npx webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Ahora ya sólo ejecutamos en la terminal de esta manera
```
npm run build
```

## Cargar configuraciones por defecto y personalizadas
Ahora también podemos especificar el archivo en el cual están las configuraciones de webpack de la siguiente manera
```json
 "build:external": "npx webpack --config ./1_external/webpack.config.js",
```

## Multiples puntos de entrada
En el objeto de entrys podemos especificar nuestros puntos de entrada
Para múltiples páginas del proyecto estamos utilizando un mismo archivo de configuración.
En los outputs indicamos la carpeta en la cual estaran los compilados.
en filename con name entre corchetes tomamos el mismo nombre del archivo de entrada, en casos anteriores usabamos un nombre estático llado bundle.js
```js
const path = require('path');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        precios: path.resolve(__dirname, 'src/js/precios.js'),
        contacto: path.resolve(__dirname, 'src/js/contacto.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name].js'
    }
}
```