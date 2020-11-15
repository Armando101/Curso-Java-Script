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

## Manejo de assets con loaders
Nativamente no podemos importar css en nuestros js, para esto utilizamos loaders, estos los configuramos de la siguiente manera en nuestro objeto de configuración. La configuración de loaders la incluimos en un objeto llamado module
```js
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }
    ]
}
```

Indicamos que para cualquier archivo que termine en _.css_ aplique un css-loader (interpreta los css), y después con el style-loader los inyecta en el html, los loaders se ejecutan de abajo hacía arriba, pero antes tenemos que instalar los siguientes paquetes.
```
npm i -D -E css-loader
npm i -D -E style-loader
```

### style-loader
Sirve para interpretar css

### css-loader
Sirve para inyectar el css en el html

## Plugins
La configuración de los plugins la metemos en un objeto llamado plugins.
Vamos a utilizar un plugin para comprimir los archivos css.
Anteriormente los comprimiamos y quedaban en un archivos js pero en esta ocasión queremos tener uno aparte, es por eso que establecemos la configuración de la siguiente manera.

```
npm i mini-css-extract-plugin html-webpack-plugin -E -D
```

Note que reemplazamos la configuración anterior del style loader.
Primero el css-loader interpreta el css
Después comprime el css con MiniCSSExtractPlugin, las reglas de como lo va a comprimir están dadas en el objeto plugins.
```
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCSSExtractPlugin.loader
                },
                'css-loader',
            ]
        }
    ]
},
plugins: [
    new MiniCSSExtractPlugin({
        filename: 'css/[name].css'
    })
]
```

También podemos usar un plugin de HTML
```js
 plugins: [
        new HtmlWebpackPlugin({
            title: 'Plugins'
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
```

Este nos sirve para generar un HTMl automáticamente y colocar ahí los archivos css y js

## Servidor de desarrollo
Para hacer que nuestro webpack se quede escuchando cambios agregamos una bandera

```
npm run build:dev -- -w
```

Para hacer que nuestro navegador recarge de manera automática cuando hacemos cambios primero instalamos lo siguiente

```
npm i webpack-dev-server -E -D
```

Ahpra agregamos la tarea de la siguiente manera
```json
"build:dev": "npx webpack-web-server --config ./5_webpack-dev-server/webpack.config.js",
```
Esto automáticamente corre el -- -w

## Hot Module Replacement
En la parte de configuración agregamos un nuevo objeto llamado devServer
hot indica que está en modo hot reload
open indica que se va a abrir el navegador automáticamente
port indica el puerto en el cual va a correr
```js
devServer: {
    hot: true,
    open: true,
    port: 8080
},
```
Agregamos el siguiente plugin 
```js
new webpack.HotModuleReplacementPlugin()
```

En nuestro archivo js agregamos la siguiente configuración
```js
import '../css/index.css';
import text from './text';

text();

if (module.hot) {   // Si tenemos activo el hot module
    module.hot.accept('./text', function() {    // Haz hot reaload cuando haya cambios en este archivo
        text();
        console.log('He recargado en caliente');
    });
}
```

Para seguir con la optimización en el archivo de configuración regresamos a la configuración anterior para el css
```js
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }
    ]
},
plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: 'webpack-dev-server'
    })
]
```

Esto porque en un entorno de desarrollo nos conviene que nuestro css se inyecte directo en el html y no que genere un nuevo archivo css.
Para modo producción podemos cambiar a la otra configuración.