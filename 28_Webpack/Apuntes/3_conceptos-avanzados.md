## Evitar código duplicado

Para evitar código duplicado agregamos el siguiente objeto en la configuración de webpack

```js
optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'commons'
    }
```