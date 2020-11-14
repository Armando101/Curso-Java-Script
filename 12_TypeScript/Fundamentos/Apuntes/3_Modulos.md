## Resolviendo módulos

TS resuleve la ubicación de módulos observando referencias relativas y no relativas.
Posteriormente intenta localizar el módulo usando una estrategia de resolución de módulos.

```
tsc --moduleResolution node
tsc --moduleResolution classic
```

Para ver la configuración de resolución de módulos que estamos utilizando vamos al archivo tsconfig.json y añadimos un campo llamado traceResolution y le asignamos un valor en true

## Webpack
Para integrar webpack necesitamos crear un archivo package.json

```
npm init -y 
```

Instalación de webpack 
```
npm install typescript webpack webpack-cli --save-dev
```