'use strict'

// Configurar los resolvers
// Debe tener una propiedad igual al nombre, ésta será una función que se ejecuta cuando llamamos la quiery

const courses = [
	{
		_id: 'anyid',
		title: 'GraphQL',
		teacher: 'Mi profesor',
		description: 'Curso de GraphQL desde cero',
		topic: 'Programación'
	},
	{
		_id: 'anyid',
		title: 'Backend con Node',
		teacher: 'Mi profesor',
		description: 'Curso de Backend con Node desde cero',
		topic: 'Programación'
	},
	{
		_id: 'anyid',
		title: 'Backend con Hapi',
		teacher: 'Mi profesor',
		description: 'Curso de Backend con Hapi desde cero',
		topic: 'Programación'
	}
];

module.exports = {
  getCourses: () => {
    return courses
  },
  saludo: () => {
    return 'Hola a todos'
  }
}