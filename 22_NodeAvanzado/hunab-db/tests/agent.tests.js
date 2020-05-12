'use strict'

const test = require('ava')

// Por el momento no nos vamos a conectar a la base de datos real
let config = {
	logging: function(){}
}

let db = null

// Se ejecuta antes de cada test
test.beforeEach(async () => {
	const setupDatabase = require('../')
	db = await setupDatabase(config)
})


test('Agent', t => {
	t.truthy(db.Agent, 'Agent service should exist')
})