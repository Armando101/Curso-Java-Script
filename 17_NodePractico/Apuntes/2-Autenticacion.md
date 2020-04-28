## Anatomía de un JWT

**JWT** es un estándar de la industria que nos permite manejar demandas de información entre dos clientes.  

Un JSON Web Token es un estandar que nos permite generar demandas entre 2 clientes de manera segura.  
Un JWT está encriptado, pero tiene 3 partes principales divididas por "."" (punto)  

1. **Header**: Contiene los archivos de configuración (el tipo y el algoritmo de encriptación)  
2. **Payload**: Guarda la información de nuestros usuarios  
3. **Signature**: es la firma que contiene el header códificado más el payload códificado, para poder dar acceso a un contenido, éste deberá de ser firmado con un secret, que es la clave secreta con la que se firman los tokens, misma que sólo la deberá de conocer el backend.  

Dentro del payload tenemos información que puede ser relevante para la autorización tal como:

- La expiración
- Id’s
- Nombres
- etc
  
[JWT](https://jwt.io/)