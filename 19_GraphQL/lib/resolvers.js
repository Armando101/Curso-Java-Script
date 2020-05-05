'use strict'

// Configurar los resolvers
// Debe tener una propiedad igual al nombre, ésta será una función que se ejecuta cuando llamamos la quiery

module.exports = {
  hello: () => {
    return 'Hola Mundo'
  },
  saludo: () => {
    return 'Hola a todos'
  }
}