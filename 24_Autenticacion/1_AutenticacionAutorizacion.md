# Stack de seguridad moderno
Anteriormente las compañías se comunicaban mediante un intranet, esto se quedó corto con la revolución mobile y HTML exigía mejoras de serguridad, actualmente ha sido reemplazado con un stack de seguridad moderno usando:

- JSON Web Tokens: Son un estándar abierto que nos permite comunicarnos entre dos clientes de una manera más segura.
- OAuth 2.0: Un estándar de la industria que nos permite implementar autorización.
- OpenID Connect: Es una capa de autenticación que funciona por encima de Oauth 2.0.

## ¿Qué es la autenticación y la autorización ?

La **autenticación** sirve para verificar la identidad de un usuario, verificar si el usuario existe y si los datos que está colocando son correctos. En nuestras aplicaciones comunmente utilizamos usuario y contraseña, podemos generar autenticación por huellas dáctiles, reconocimiento facial, etc.

La **autorización** es la acción de permitir a un usuario acceso limitado a nuestro recursos. Podemos otorgar permisos de sólo lectura y escritura para el usuario común. Para usuarios administradores otorgamos otros permisos, esto lo logramos gerenando tokens.  

Ejemplo:
**Autenticación**: Iniciar sesión en YouTube
**Autorización**: Ver videos, subir y/o eliminar videos, dar like/dislike.

## Introducción a las sesiones

Cuando visitas un sitio web se manda una petición Http.
Cuando visitamos un sitio por primera vez se crea una sesión (no es necesario estar autenticado para que esta sesión sea creada) con los ajustes que se configuran. Por ejemplo, en un sitio web de reserva de hoteles, a medida que buscamos y ponemos preferencias de precios y demás, éstas se irán guardando en dicha sesión. Y luego estos datos se convertirán en un ID que será almacenado en una cookie en tu navegador, de esta manera cuando cierras el navegador y lo vuelves a abrir se carga esa cookie con los datos guardados en la sesión previamente abierta.  

Esta es la razón por la cuál aunque no hemos iniciado sesión se guadan las preferencias en el navegador. Por seguridad la sesión debería terminar cierto tiempo después de que es inicidada.  

Dependiendo el mecanismo que estemos usando podemos tener sesiones inicidas por semanas o meses.  

CookieSession y ExpressSession son librerías que nos permiten trabajar con sesiones en node.  
**CookieSession** nos permite almacenar la sesión en la cookie.  
**ExpresSession** no permite almacenar la sesión en memoria de lado del servidor.

Para escalar la aplicación es necesario usar bases de datos en memoria como redis.
