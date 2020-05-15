'use strict'

const debug = require('debug')('hunab:api:routes');
const express = require('express');

const api = express.Router();

// Nos retorna los agentes conectados
api.get('/agents', (req, res) => {
	res.send({});
});

api.get('/agent/:uuid', (req, res) => {
	const { uuid } = req.params;
	res.send({ uuid });
});

api.get('/metrics/:uuid/:type', (req, res) => {
	const { uuid, type } = req.params;
	res.send({ uuid, type });
});

module.exports = api;
