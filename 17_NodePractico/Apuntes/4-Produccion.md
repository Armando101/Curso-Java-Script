## Microservicios en producción  
Podemos ejecutar nuestra aplicación desde la terminal, a esto se le conoce como despliegue en **servidores**.  
Una segunda manera de correr nuestra aplicación es con **serverles** esto es no tener ningún tipo de servidor y dejar que nuestra aplicación corra en la nube.  
Para crear esto utilizaremos **zeit Now**.  

### Zeit Now  
Es una plataforma serverless que levanta los servicios de node. Funciona en producción, no es necesario hacer muhcas configuraciones, y es muy sencillo hacer el deploy.
[Zeit Now](https://vercel.com/)

### Instalación
```
npm install -g now
```

### Ejecutar Now
```
now
```
Es posile que tengamos que dar permisos de ejecución, para esto nos envían un correo.  

### Configuración
Creamos un archivo now.json y ahí agregamos toda la configuración.  
Es importante que nuestra base de datos sea remota, no local, de lo contrario no podrá hacer las peticiones.

### Now Dev
Nos despliega un servidor para desarrollo, nos despliega lo mismo pero esta vez en local.
```
now dev
```