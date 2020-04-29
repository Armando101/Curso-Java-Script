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

## Gestión de microservicios con PM2  

PM2 Es un gestor de microservicios, los podemos correr, reiniciar y detener, nos permite tener un control sobre los microservicios, así evitamos tener tantas terminales abiertas y podemos monitorear todos estos procesos.

[PM2](https://pm2.keymetrics.io/)  

### Instalación
```
npm install pm2 -g
```

### Monitorear los procesos
```
pm2 logs
```

### Monitorear los microservicios
```
pm2 status
```

### Iniciar un micrioservicio
```
pm2 start servicio.js
```  
También podemos iniciarlo dandole un nombre, si no se lo damos por defecto tomará el nombre del archivo como nombre del proceso  

```
pm2 start servicio.js --name miMicroservicio
```  

### Detener un microservicio
```
pm2 stop id
```  
El id del microservicio lo podemos ver con el comando  pm2 status

### Reiniciar un microservicio
```
pm2 restart id
```

