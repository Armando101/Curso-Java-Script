## JSON Web Tokens

Es un estandar que permite representar claims que son como permisos entre dos partes.  
Un **JWT** tiene la siguiente estructura.  

- Header: incluye el tipo de algoritmo usdo y el tipo de token
- Payload: tiene información que queremos compartir, por ejemplo, id de usuario, name, fecha de generación del tiempo.
- Signature: se hace codificando el header + payload + una firma con un secreto encriptada.

[JWT](https://jwt.io/)

## Passport.js
```
npm i passport passport-http passport-jwt jsonwebtoken bcrypt
```

La siguiente dependencia nos servirá para ver mensajes en consola con colores
```
npm i -D chalk
```


### Documentación
[Passport](http://www.passportjs.org/)
[Passport-HTTP](http://www.passportjs.org/packages/passport-http/)
[Bcrypt](https://github.com/kelektiv/node.bcrypt.js#usaged