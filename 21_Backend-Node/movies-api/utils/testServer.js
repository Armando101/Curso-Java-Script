const express = require('express');
const supertest = require('supertest');

function testServer(route) {
	const app = express();
	route(app);
	return supertest(app);	// Indicamos que el servidor será de pruebas
}

module.exports = testServer;