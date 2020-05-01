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

function home(req, h) {
  	// Devuelvo un objeto de respuesta
    return h.view('index', {
    	title: 'home',
      user: req.state.user
    });
 }

module.exports = {
	register: register,
	home: home,
  login: login
}