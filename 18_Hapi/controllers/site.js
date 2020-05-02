'use strict'

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

function notFound(req, h) {
   return h.view('404', {}, {layout: 'error-layout'}).code(404);
}

// Esta función se ejecuta antes de dar una respuesta
// Me perimite capturar los errores de tipo 404 que no caputra notFound
// Por ejemplo :3000/assets/algo
// Por ejemplo :3000/assets
function fileNotFound(req, h) {
  const response = req.response;
  if (response.isBoom && (response.output.statusCode === 404 || response.output.statusCode === 403)) {
   return h.view('404', {}, {layout: 'error-layout'}).code(404);
  }

  // Continuamos el life cycle
  return h.continue;
}

function home(req, h) {
  	// Devuelvo un objeto de respuesta
    return h.view('index', {
    	title: 'home',
      user: req.state.user
    });
 }

function homes(req, h) {
    return h.redirect('/home');
 }

module.exports = {
	register: register,
	home: home,
  homes: homes,
  login: login,
  notFound:notFound,
  fileNotFound: fileNotFound
}