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
