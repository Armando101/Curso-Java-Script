## Soporte de JS moderno

Para dar soporte a JS moderno usamos babel y para eso instlamos las siguientes dependencias
```
npm i -D -E @babel/core babel-loader @babel/preset-env
```

Agregamos la siguiente regla
```
 rules: [
    {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
    },
```

Lo que hace primero es que webpack toma los archivos js y se los pasa al __babel-loader__, este es un intermediario entre webpack y babel, ahora se los pasa a __@babel/core__, esta dependencia se encarga de transpilar el código JS moderno a una versión en específico, esta versión se la indico con ayuda de la dependencia __@babel/preset-env__ en el archivo __.babelrc__

Si queremos utilizar async / await y fetch que son funciones de JS moderno necesitamos instalar plugins extra para babel
```
npm i -D -E @babel/plugin-transform-runtime
npm i -D -E @babel/runtime
```

Agregamos la configuración en el .babelrlc
```js
{
    "plugins": [
        "@babel/plugin-transform-runtime"
    ],
    "presets": [
        "@babel/preset-env"
    ]
}
```

## Soporte de JS
Para añadir react a nuestro proyecto agregamos el siguiente presset de babel
```js
"presets": [
    "@babel/preset-env",
    "@babel/preset-react"
]
```

Instalamos la librería de babel que soporta react
```
npm i -D -E @babel/preset-react
```

Ahora instalamo react
```
npm i react react-dom
```

También es necesario agregar en el index.html una section con el id container
```html
<body>
    <section id="container"></section>
</body>
```

Y en los plugins especificamos que vamos a leer este archivo
```js
plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: 'webpack-dev-server',
        template: path.resolve(__dirname, 'index.html')
    })
]
```

## Soporte para imágenes, fuentes y videos
Necesitamos instalar las siguientes dependencias

```
npm i -D -E url-loader
npm i -D -E file-loader
```

Con url-loader indicamos la configuración de nuestros assets
Indicamos cuales archivos va a comprimir,
usamos la dependencia de url-loader
Indicamos que sólo aplique esta compresión si la imágen es menor a 9kB, esto porque si es más grande ya no vemos beneficio sino todo lo contrario ya que aunque comprima, no se ve mucha mejora en el rendimiento. Lo que hace internamente es convertir el asset a base 64
```js
{
    test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
    use: {
        loader: 'url-loader',
        options: {
        limit: 90000
        },
    }
}
```

## Estilos con preprocesadores

Instalamos las siguientes dependencias
```
npm install sass-loader stylus-loader less-loader postcss-loader --save-dev --save-exact
```

Ahora instalamos las dependencias de los preprocesadores
```
npm i stylus less node-sass -D
```

Ahora hacemos las configuraciones en webpack

```
{
    test: /\.less$/,
    use: [
        'style-loader',
        'css-loader',
        'less-loader'
    ]
    },
    {
    test: /\.scss$/,
    use: [
        'style-loader',
        'css-loader',
        'sass-loader'
    ]
    },
    {
    test: /\.stylus$/,
    use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
    ]
}
```
