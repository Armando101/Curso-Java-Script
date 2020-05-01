'use strict'

function register (req, h) {
  	// Devuelvo un objeto de respuesta
    return h.view('register', {
    	title: 'Regsitro',
      user: req.state.user
    });
  }

function login (req, h) {
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