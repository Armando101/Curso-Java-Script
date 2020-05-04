## Logging con Good - Monitoreando el servidor

El proceso de registrar los eventos que suceden internamente en nuestra aplicación, también conocido como logging, es un aspecto técnico bastante habitual en entornos de producción de la vida real.

Hapi incluye un método .log( args ) tanto en el objeto server, como en request y en response que nos permiten un registro muy básico de eventos; sin embargo, la práctica recomendada es hacer logging con un módulo adicional llamado Good y una dependencia para el manejo de transporters llamada good-console.

Al igual que hemos hecho antes, una vez instalado el paquete de Good, será necesario requerirlo y registrarlo debidamente en el script principal, pero en este caso lo haremos de una manera ligeramente diferente:

```
await server.register({  // Esta es una manera distinta de registrar un plugin
    plugin: require('good'),
    options: {
      ops: {
        interval: 2000
      },
      reporters: {
        myConsoleReporters: [
          {
            module: require('good-console'), // Se requiere instalar
          },
          'stdout'
        ]
      }
    }
});
```

Luego de configurado el paquete, la implementación es tan simple como ejecutar la misma instrucción:
```
server.log( '<etiqueta o tag>', <mensaje> )
```

donde <mensaje> puede ser una cadena de texto o un objeto. Recuerda que el método log también está disponible en los objetos request y response.