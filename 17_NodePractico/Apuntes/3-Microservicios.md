## Microservicios

Actualmente tenemos una API, esta api tiene servicios de:  
- usuarios  
- autenticación  
- post  

Por el momento sólo son tres pero seguramente tendremos más a medida que avanzamos, esto tiene el inconveniente de que si se cae el único proceso de node que tenemos se cae todo.  
Al separar nuestros servicios si se cae un proceso todo lo demás seguirá funcionando.  

El problema viene cuando un servicio depende de otro y se vuelve complejo gestionarlos. Lo ideal es crear los microservicios conforme avanzamos en el desarrollo en lugar de quererlos implementar desde el principio.  

De esta manera vamos separando los servicios conforme avanzamos y no complicarnos el desarrollo desde el principio.  

Lo primero que vamos a tener en un microservicio será la base de datos. Esto nos servirá para poder acceder a la base con otros lenguajes de programación sin la necesidad de volver a crear funciones que ya hizimos.