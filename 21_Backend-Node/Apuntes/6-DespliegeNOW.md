## Despliegue en Now.js

### Instalación
```
npm i -g now
```

### Agregar variables
```
now secret add movies-db-user armando
```
Ejecutar el mismo comando con: password, host y db_name  

Para listar los secrets ejeutamos
```
now secret ls
```

### Crear now.json
```
{
	"name": "movies-video",
	"version": 2,
	"builds": [{ "src": "index.js", "use": "@now/node"}],
	"routes": [{ "src": "/(.*)", "dest": "/index.js"}],
	"env": {
		"DB_USER": "@movies-db-user",
		"DB_PASSWORD": "@movies-db-password",
		"DB_HOST": "@movies-db-host",
		"DB_NAME": "@movies-db-name"
	}
}
```

Para probar antes de hacer el despliegue ejecutamos:
```
now dev
```

Se tardará la primera vez que se hace el despliegue.  

Una vez funcione podemos ejecutar el comando:
```
now
```
Cuando hagamos cambios sólo queda ejecutar dicho comando.


```
now alias  https://movies-video.armando101.now.sh movies-api.now.sh
```