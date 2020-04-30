'use strict'

function register (req, h) {
  	// Devuelvo un objeto de respuesta
    return h.view('register', {
    	title: 'Regsitro'
    });
  }

function home(req, h) {
  	// Devuelvo un objeto de respuesta
    return h.view('index', {
    	title: 'home'
    });
 }

module.exports = {
	register: register,
	home: home
}