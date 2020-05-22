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

## Server-side vs Client-side sessions 
Sesiones del lado del servidor vs sesiones del lado del cliente

### ¿Qué es una sesión?

En terminos generales una sesion es una manera de preservar un estado deseado.

### ¿Qué es una sesion del lado del servidor?

La sesión en el lado del servidor suele ser una pieza de información que se guarda en memoria o en una base de datos y esta permite hacerle seguimiento a la información de autenticación, con el fin de identificar al usuario y determinar cuál es el estado de autenticación. Mantener la sesión de esta manera en el lado del servidor es lo que se considera "stateful", es decir que maneja un estado.

### ¿Qué es una sesión del lado del cliente?

Las SPA (Single-page apps) requieren una manera de saber si el usuario esta autenticado o no. Pero esto no se puede hacer de una manera tradicional porque suelen ser muy desacopladas con el backend y no suelen refrescar la página como lo hacen las aplicaciones renderizadas en el servidor.

JWT (JSON Web Token) es un mecanismo de autenticación sin estado, lo que conocemos como "stateless". Lo que significa que no hay una sesión que exista del lado del servidor.

La manera como se comporta la sesión del lado del cliente es:

1. Cuando el usuario hace "login" agregamos una bandera para indicar que lo esta.
2. En cualquier punto de la aplicación verificamos la expiración del token.
3. Si el token expira, cambiamos la bandera para indicar que el usuario no está logueado.
4. Se suele chequear cuando la ruta cambia.
5. Si el token expiró lo redireccionamos a la ruta de "login" y actualizamos el estado como "logout".
6. Se actualiza la UI para mostrar que el usuario ha cerrado la sesión.

## Buenas prácticas con JWT
### Buenas practicas con JSON Web token

En los últimos años se ha criticado fuertemente el uso de JSON Web Tokens como buena practica de seguridad. La realidad es que muchas compañías hoy en día los usan sin ningún problema siguiendo unas buenas practicas de seguridad, que aseguran su uso sin ningún inconveniente.

A continuación listaremos unos consejos que se deben tener en cuenta:

### Evitar almacenar información sensible

Debido a que los JSON Web tokens son decodificables es posible visualizar la información del payload, por lo que ningún tipo de información sensible debe ser expuesto como contraseñas, keys, etc. Tampoco debería agregarse información confidencial del usuario como su numero de identificación o información medica, ya que como hablamos anteriormente, los hackers pueden usar esta información para hacer ingeniería social.

### Mantener su peso lo más liviano posible

Suele tenerse la tentación de guardar toda la información del perfil en el payload del JWT, pero esto no debería hacerse ya que necesitamos que el JWT sea lo más pequeño posible debido a que al enviarse con todos los request estamos consumiendo parte del ancho de banda.

### Establecer un tiempo de expiración corto

Debido a que los tokens pueden ser robados si no se toman las medidas correctas de almacenamiento seguro, es muy importante que estos tengan unas expiración corta, el tiempo recomendado es desde 15 minutos hasta un maximo de 2 horas.

### Tratar los JWT como tokens opacos

Aunque los tokens se pueden decodificar, deben tratarse como tokens opacos, es decir como si no tuviesen ningún valor legible. Esto es porque desde el lado del cliente no tenemos manera de verificar si la firma es correcta, así que si confiamos en la información decodificada del token, alguien podría introducir un token invalido con otra información a propósito. Lo mejor, es siempre enviar el token del lado del servidor y hacer las verificaciones allí.

### ¿Donde guardar los tokens?

Cuando estamos trabajando con SPA (Single Page apps) debemos evitar almacenar los tokens en Local Storage o Session Storage. Estos deben ser almacenados en memoria o en una Cookie, pero solo de manera segura y con el flag httpOnly, esto quiere decir que la cookie debe venir del lado del servidor con el token almacenado.  
Más información: https://auth0.com/docs/security/store-tokens#single-page-apps

### Silent authenticacion vs Refresh tokens

Debido a que es riesgoso almacenar tokens del lado del cliente, no se deberian usar Refresh Tokens cuando se trabaja solo con una SPA. Lo que se debe implementar es **Silent Authentication**, para ello se debe seguir el siguiente flujo:

1. La SPA obtiene un access token al hacer login o mediante cualquier flujo de OAuth.
2. Cuando el token expira el API retornara un error 401.
3. En este momento se debe detectar el error y hacer un request para obtener de nuevo un access token.
4. Si nuestro backend server tiene una sesión valida (Se puede usar una cookie) entonces respondemos con un nuevo access token.

Más información:

- https://auth0.com/docs/api-auth/tutorials/silent-authentication
- https://auth0.com/docs/tokens/refresh-token/current

> Hay que tener en cuenta que para implementar Silent authentication y Refresh tokens, se require tener un tipo de sesión valida del lado del servidor por lo que en una SPA es posible que sea necesario una especie de backend-proxy, ya que la sesión no debería convivir en el lado del API server.
> En el paso 2, si se esta usando alguna librería para manejo de estado como redux, se puede implementar un middleware que detecte este error y proceda con el paso 3.

