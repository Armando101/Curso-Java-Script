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

## Argumentos

Vamos a instalar una nueva dependencia para facilitar el trabajo con GraphQL, vamos a correr el siguiente comando:

```
npm i graphql-tools
```

Podemos pasar argumentos con distintos tipos de información dentro de las peticiones que hagamos en GraphQL, su sintaxis quedaría de la siguiente manera:

```
nombreQuery(campo: tipo): tipo
```

Dentro del resolver los argumentos de la petición pasarían como segundo parámetro, el primero es *root* y el segundo es *args*.

## Configuración de base de datos

Por el momento nuestra API maneja pura información estática, vamos a cambiar esto pasando la información a una base de datos, en este caso usaremos MongoDB.

Es recomendable almacenar las credenciales de conexión a la base de datos como variables de entorno del sistema y utilizar dotenv para la lectura de dichas credenciales. Para su instalación vamos a correr el comando

```
npm i dotenv
```
#### Instalación de mongo
```
npm i mongo
```

Vamos a utilizar Roboto 3T para conexión con Mongo DB  

[Roboto](https://robomongo.org/)

## Integrando una base de datos
Usamos el cliente **Roboto 3T**  
Creamos una colección con el nombre que definimos en .env y agregamos los datos.
```
db.getCollection('courses').insertMany([
    {
		title: 'GraphQL',
		teacher: 'Mi profesor 1',
		description: 'Curso de GraphQL desde cero',
		topic: 'Programación'
	},
	{
		title: 'Backend con Node',
		teacher: 'Mi profesor 2',
		description: 'Curso de Backend con Node desde cero',
		topic: 'Programación'
	},
	{
		title: 'Backend con Hapi',
		teacher: 'Mi profesor 3',
		description: 'Curso de Backend con Hapi desde cero',
		topic: 'Programación'
	}
])
```