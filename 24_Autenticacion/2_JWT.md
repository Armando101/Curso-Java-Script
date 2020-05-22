Anatomía de un JWT

JWT es un estándar de la industria que nos permite manejar demandas de información entre dos clientes.

Un JWT consta de tres partes generlamente divididas por un punto.

1. Header: tiene dos atributos, el tipo *typ* que siempre es JWT y *alg* que es el algorítmo de encriptación de la firma.
Podemos tener algorítmos *síncronos* que se desencirptan y encriptan con una sóla llave, los algorítmos *asíncronos* se encriptan con una llave publica y se desencriptan con otra llave llamada privada.

Los dos algorítmos son seguros pero depende de donde los utilicemos, los algorítmos *asíncronos* se ocupan cuando partes públicas pueden tener acceso a estas llaves como en el frontend. Los algorítmos *síncronos* son utilizados en el backend.

2. Payload: Es donde se guarda la información del usuario, aquí podemos tener private claims y public claims, son representados por tres letras para tener los JWT más compactos.

3. Signature: Es lo que hace más seguro los JWT, se compone del header codificado + el payload codificado + una firma secreta.

## Auth tradicional

1. Se crea una sesión (el id se almacena en una cookie)
2. Los request de ahí en adelante (hasta que expire) vienen con la información de la cookie

### Problemas del auth tradicional
- Las SPA no refrescan todas las veces (y no saben si hubieron cambios en la sesión)
- Las REST API no deberían tener estado, al crear sesiones se crea estado
Para microservicios las sesiones de una sóla máquina no fluyen naturalmente hacia varios clientes
El control de acceso requiere que vayamos a base de datos

## JSON Web Tokens Auth

1. En el proceso de Autenticación el server firma un token
2. A partir de ese momento el cliente almacena el token en memoria y en una cookie
3. Todos los request de ahí en adelante llevan el token

### Ventajas de JWT

- No requiere del backend para saber si está autenticado porque lleva una firma (post autenticación)
- El backend puede recibir multiples request de multiples clientes (sólo necesita saber si el token está bien firmado)
- El cliente conoce los permisos que tiene, por lo que no los tiene que bajar de base de datos


## Firmando y Verificando nuestro JWT

Para firmar nuestro token utilizaremos un paquete de node llamado **jsonwebtoken** y al usarlo en nuestro código se verá de esta manera:

```js
jwt.sign({ sub: user.id }, 'secret', options);
```

El primer atributo que recibe es el **payload** o sea los datos que guardaremos en ese token. De segundo atributo recibe una **clave** secreta con la cual será firmado y finalmente podremos pasarle **opciones** si es nuestro caso.

Para verificar nuestro token lo haremos de la siguiente manera:

```js
jwt.verify(token, 'secret', function(err, decoded) {});
```

Como primer atributo recibiremos el **token**, de segundo atributo el **secreto** de la firma y como tercer argumento (opcional) recibiremos una función de callback que nos devolverá el **token decodificado**.

- Vamos a inicializar nuestro proyecto con npm init -y
- Crearemos el archivo index.js
- Vamos a instalar los paquetes necesarios con npm i jsonwebtoken
- En el index.js vamos a hacer toda la lógica de nuestra aplicación
