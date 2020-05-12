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
let uuid = 'yyy-yyy-yyy'

let connectedArgs = {
	where: { connected: true }
}

let usernameArgs = {
	where: { username: 'armando', connected: true }
}

let uuidArgs = {
	where: { uuid }
}

let newAgent = {
	uuid: '123-123-123',
	name: 'test',
	username: 'test',
	hostname: 'test',
	pid: 0,
	connected: false
}
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

	// Model create Stub
	AgentStub.create = sandbox.stub()
	AgentStub.create.withArgs(newAgent).returns(Promise.resolve({toJSON() { return newAgent }}))

	// Model findOne Stub
	AgentStub.findOne = sandbox.stub()
	AgentStub.findOne.withArgs(uuidArgs).returns(Promise.resolve(agentFixtures.findByUuid(uuid)))

	// Model update Stub
	AgentStub.update = sandbox.stub()
	AgentStub.update.withArgs(single, uuidArgs).returns(Promise.resolve(single))

	// Model findById Stub
	AgentStub.findById = sandbox.stub()
	AgentStub.findById.withArgs(id).returns(Promise.resolve(agentFixtures.findById(id)))

	// Model findAll Stub
	AgentStub.findAll = sandbox.stub()
	AgentStub.findAll.withArgs().returns(Promise.resolve(agentFixtures.all))
	AgentStub.findAll.withArgs(connectedArgs).returns(Promise.resolve(agentFixtures.connected))
	AgentStub.findAll.withArgs(usernameArgs).returns(Promise.resolve(agentFixtures.armando))
	
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

test.serial('AgentCreateOrUpdate - exists', async t => {
	let agent = await db.Agent.createOrUpdate(single)

	t.true(AgentStub.findOne.called, 'FindOne should be called')
	t.true(AgentStub.findOne.calledTwice, 'findOne should be called twice')
	t.true(AgentStub.update.calledOnce, 'update shuld be called once')

	t.deepEqual(agent, single, 'agent should be the same')
})

test.serial('Agent#createOrUpdate - new', async t => {
  let agent = await db.Agent.createOrUpdate(newAgent)

  t.true(AgentStub.findOne.called, 'findOne should be called on model')
  t.true(AgentStub.findOne.calledOnce, 'findOne should be called once')
  t.true(AgentStub.findOne.calledWith({
    where: { uuid: newAgent.uuid }
  }), 'findOne should be called with uuid args')
  t.true(AgentStub.create.called, 'create should be called on model')
  t.true(AgentStub.create.calledOnce, 'create should be called once')
  t.true(AgentStub.create.calledWith(newAgent), 'create should be called with specified args')

  t.deepEqual(agent, newAgent, 'agent should be the same')
})