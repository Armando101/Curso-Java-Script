'use strict'

const questions = require('../models/index').questions;

function register (req, h) {
    // Si el usuario ya está logeado por lo tanto ya está registrado 
    // No podrá acceder a la página de register y cuando lo intente lo mandaremos a '/'
    if (req.state.user) {
        return h.redirect('/');
      }
  	// Devuelvo un objeto de respuesta
    return h.view('register', {
    	title: 'Regsitro',
      user: req.state.user
    });
  }

function login (req, h) {
    // console.log(req.state);
    if (req.state.user) {
      return h.redirect('/');
    }

    // Devuelvo un objeto de respuesta
    return h.view('login', {
      title: 'Ingrese',
      user: req.state.user
    });
}

async function viewQuestion(req, h) {
  let data;
  try {
    // Recojo los datos que me vienen de la ruta
    data = await questions.getOne(req.params.id);
    if (!data) {
      return notFound(req, h);
    }
  } catch(error) {
    console.error(error);
  }

  return h.view('question', {
    title: 'Detalles de la pregunta',
    user: req.state.user,
    question: data,
    key: req.params.id
  });
}

function notFound(req, h) {
   return h.view('404', {}, {layout: 'error-layout'}).code(404);
}

// Esta función se ejecuta antes de dar una respuesta
// Me perimite capturar los errores de tipo 404 que no caputra notFound
// Por ejemplo :3000/assets/algo
// Por ejemplo :3000/assets
function fileNotFound(req, h) {
  const response = req.response;
  // Esto es para que no me muestre la vista de 404 cuando no encuentre un id
  // Esto es más amigable para el desarrollador
  if (!req.path.startsWith('/api') && response.isBoom && (response.output.statusCode === 404 || response.output.statusCode === 403)) {
   return h.view('404', {}, {layout: 'error-layout'}).code(404);
  }

  // Continuamos el life cycle
  return h.continue;
}

async function home(req, h) {

    const data = await req.server.methods.getLast(10);

  	// Devuelvo un objeto de respuesta
    return h.view('index', {
    	title: 'home',
      user: req.state.user,
      questions: data
    });
}

function homes(req, h) {
    return h.redirect('/home');
}

function ask(req, h) {
  // Si no está logeado el usuario no puede hacer preguntas
  if (!req.state.user) {
      return h.redirect('/login');
  }

  return h.view('ask', {
    title: 'Crear pregunta',
    user: req.state.user
  });
}

module.exports = {
	register: register,
	home: home,
  homes: homes,
  login: login,
  notFound:notFound,
  fileNotFound: fileNotFound,
  ask: ask,
  viewQuestion: viewQuestion
}