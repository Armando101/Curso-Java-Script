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