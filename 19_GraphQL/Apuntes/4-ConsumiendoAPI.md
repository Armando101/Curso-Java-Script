## Preparando API para producción

Para que nuestra API sea accesible desde cualquier lugar debemos añadir el middleware cors a express, primero debemos instalarlo con el siguiente comando:

```
npm i cors
```
  
Aplicamos cors en el index
```
app.use(cors());
```

### Modo producción

En el index agregamos la constante isDev
```
const isDev = process.env.NODE_ENV !== 'production';
```
Agregamos el siguiente script en el **package.json**
```
"start": "NODE_ENV=production node index",
```

### Documentación
[Cors](https://www.npmjs.com/package/cors#configuring-cors-w-dynamic-origin)

## HTTP requests

Insertamos directamente la URL desde postman, también podemos utilizar el feature que nos proporciona Postman para hacer peticiones similares a las que hacemos con graphiql.

## Clientes de GraphQL  

**FetchQl**: https://www.npmjs.com/package/fetchql  
Tiene un objeto de configuración donde se introduce todas los requerimientos que necesita un query.  

**Graphql-request** https://www.npmjs.com/package/graphql-request  
Se puede usar tanto en node como en un aplicativo de front. Es el más sencillo de usar.

**Apollo Client**: https://www.npmjs.com/package/apollo-client  
En un cliente muy completo pues tiene los mismos usos que graphql-request, pero se puede manejar caché de query, uso de promesas, entre otros.  

**Relay**: https://relay.dev/  
Es un cliente orientado a integrar el front. es usado por Facebook de manera oficial para conectar con graphql.  

**Vue Apollo**: https://apollo.vuejs.org/  

**Apollo Angular**: https://www.apollographql.com/docs/angular/
