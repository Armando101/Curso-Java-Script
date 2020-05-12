'use strict'

const test = require('ava')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

const agentFixtures = require('./fixtures/agent')

// Por el momento no nos vamos a conectar a la base de datos real
let config = {
	logging: function(){}
}

let MetricStub = {
	// spy es una función que me permite hacer preguntas como:
	// Fue llamada esta función? cuántas veces fue llamada? con qué argumentos?
	belongsTo: sinon.spy()
}

let single = Object.assign({}, agentFixtures.single)
let id = 1
let AgentStub = {}

let db = null

// Un sandbox me permite crear un pequeño ambiente que sólo va a ser usado en caso determinado
// Al terminar el test se resetea el estado del sandbox
let sandbox = null

// Se ejecuta antes de cada test
test.beforeEach(async () => {
	sandbox = sinon.createSandbox()
	AgentStub = {
		hasMany: sandbox.spy()
	}

	// Model findById Stub
	AgentStub.findById = sandbox.stub()
	AgentStub.findById.withArgs(id).returns(Promise.resolve(agentFixtures.findById(id)))

	// Reemplaza las llamadas en el index.js por los stubs
	const setupDatabase = proxyquire('../', {
		'./models/agent': () => AgentStub,
		'./models/metric': () => MetricStub
	})
	db = await setupDatabase(config)
})

// Volvemos a crear el sandbox y automáticamente se resetea después de cada test
test.afterEach(() => {
	sandbox && sandbox.restore()
})

test('Agent', t => {
	t.truthy(db.Agent, 'Agent service should exist')
})

// Indicamos que ejecute los test de manera serial
// Esto porque por defecto Ava los ejecuta de manera paralela
// Elegimos serial para evitar congruencias con los stub ya que pueden alterarse en los test

test.serial('Setup', t => {
	// Asesguramos que hasMany sea llamada, called es de spy
	t.true(AgentStub.hasMany.called, 'AgentModel.hasMany was executed')
	t.true(AgentStub.hasMany.calledWith(MetricStub), 'Argument shpuld be the model')
	t.true(MetricStub.belongsTo.called, 'MetricModel.belongsTo was executed')
	t.true(MetricStub.belongsTo.calledWith(AgentStub), 'Argument shpuld be the model')
})

test.serial('AgentFindById', async t => {
	let agent = await db.Agent.findById(id)

	t.true(AgentStub.findById.called, 'findById shoul be called on model')
	t.true(AgentStub.findById.calledOnce, 'Shoul be called once')
	t.true(AgentStub.findById.calledWith(id), 'Should be called whit id')

	t.deepEqual(agent, agentFixtures.findById(id), 'Should be the same')
})