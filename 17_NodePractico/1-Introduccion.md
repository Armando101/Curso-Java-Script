## Arquitectura de un backend complejo  

Llega una petición de un cliente a internet y de internet al servidor.  
  
**¿Cómo recibe estas peticiones el servidor?**  
Lo ideal sería que un proceso dentro de nuestro servidor recibiera las peticiones y las pudiera mandar a servicios difierentes.  
También tendremos otra serie de servicios privados.  
  
Nuestros componentes tendrán capas de:  
- Red  
- Controlador  
- Datos  

Podemos tener un archivo aparte llamado store el cuál se encargará de hacer la conexión a la base de datos, a este archivo tendrá acceso al controlador.  

### Estructura de carpetas  
#### Primer nivel  
Accesible desde todos los componentes
- Store  
- Network 
- Configuración  
- Microservicios  

#### Segundo nivel  
Dentro de la carpeta de microservicios  
- Network: se encarga de comunicarse hacía arriba con los gestores de rutas  
- Controller: define la lógica de los controladores  
- Secure: se encarga de que todas las reglas de seguridad se cumplan  
- index.js: definiremos como interactua el microservicio 

## Estructuras de datos para nuestro proyecto  
Elaboraremos una pequeña red social. Tendremos:  
- Usuarios: nombre, id, etc. Podrán construir post's  
- Post: cuando un usuario publique un post tendremos una relación 1:M  
- Follow: un usuario puede seguir a muchos usuarios y viceversa. M:M  
- Like: un usuario puede dar like a un post y un post puede tener like's de muchos usuarios. M:M  

