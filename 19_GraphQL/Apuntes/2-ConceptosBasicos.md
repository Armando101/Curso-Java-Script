## Schema y types

El Schema es la base de una API en GraphQL, es el encargado de describir todos los tipos de información que va a contener.

Para la creación de este proyecto usaremos una herramienta llamada npx, para ello primero debes instalarlo con el comando:
```
npm i -g npx
```

Una vez instalado, dentro de la carpeta de nuestro proyecto vamos a correr el siguiente comando:

```
npx license mit > LICENSE && npx gitignore node && git init && npm init -y
```

Ya que termina de correr el comando es momento de añadir la dependencia de GraphQL a nuestro proyecto:

```
npm i graphql
```

Dentro de GraphQL contamos con distintos tipos de datos escalares:

- String
- Int
- Float
- Boolean
- ID

### Documentación
[Schemas and types](https://graphql.org/learn/schema/) 

## Queries y Resolvers

Una query permite ejecutar una petición al API para obtener información, dentro de una query debes indicar la consulta que quieres ejecutar y los campos que deseas obtener. GraphQL te va a devolver la información que solicitaste dentro del objeto data.

El resultado de tu petición no se va a ejecutar de manera mágica, para ello debes definir el objeto resolvers, este objeto va a contener una propiedad del mismo nombre que la query que va a resolver o ejecutar.

## Sirviendo el API en la web

Ya viste que nuestra API funciona a través de la línea de comandos, pero necesitamos que está funcione dentro de la web, para ello necesitas de las dependencias de express y un middleware de GraphQL, vamos a instalarlo con el siguiente comando:

```
npm i express express-graphql
```

Para evitar el proceso de detener nuestro servidor cada que ejecutamos un nuevo cambio vamos a utilizar la dependencia de desarrollo Nodemon:

```
npm i nodemon -D
```

## Custom Types

Para este proyecto vamos a seguir el estándar de estilos Standard, para instalarlo corremos el siguiente comando:

```
npm i standard -D
```
  
Agregamos al package.json lint y lint-fix para arreglar posibles errores:
```
"scripts": {
    "lint": "standard",
    "lint-fix": "standard --fix",
  },
```
  
Ahora lo podemos correr y ver los posibles errores  
```
npm run lint-fix
```

GraphQL nos permite configurar nuestros propios tipos de datos, estos deben tener la siguientes sintaxis:

```
type <Nombre del tipo> {
  propiedad: Tipo de dato
}
```

Dentro de nuestros tipos de datos podemos configurar un campo de un tipo como obligatorio con el signo “!”, quedando por ejemplo:

```
type Course {
  title: String!
}
```
