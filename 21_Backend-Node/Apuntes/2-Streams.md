## Introducción a streams

Los Streams son una colección de datos como los arrays o strings sólo que se van procesando pedazo por pedazo, esta capacidad los hace muy poderosos porque podemos manejar una gran cantidad de datos de manera óptima.

## Readable y Writable streams

Los Readable y Writeable streams tienen los siguientes eventos y funciones respectivamente:
Readable
### Eventos

Tienen eventos porque los heredan de la clase **EventEmitter**.

- data. Se dispara cuando recibe datos.
- end. Se dispara cuando termina de recibir datos.
- error. Se dispara cuando hay un error.

### Funciones

- pipe
- unpipe
- read
- push

### Writeable
#### Eventos

- drain. Se dispara cuando emite datos.
- finish. Se dispara cuando termina de emitir.
- error. Se dispara cuando hay un error.

#### Funciones

- write
- end
