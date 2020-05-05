'use strict'

// Esto automáticamente carga las configuraciones que tenemos en .env
require('dotenv').config();
// makeExecutableSchema tiene más funcionalidades que buildSchema  
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');

const app = express()
const port = process.env.port || 3000

const typeDefs = readFileSync(
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
);

// Hacemos un pequeño cambio en la siguiente línea y en los resolvers
const schema = makeExecutableSchema({ typeDefs, resolvers});

// Definimos una ruta en /api
// Ejecuta el Middleware de graphql que recibe un objeto con:
// El schema de las queries, los resolvers
// graphiql true indica que vamos a trabajar en entorno de desarrollo
app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})

// Ejecutar el query hello
// Recibe el nombre del esquema, la query y el objeto resolvers
/*
graphql(schema, '{ saludo }', resolvers).then((data) => {
console.log(data);
});
*/
