'use strict'

const agent = {
	id: 1,
	uuid: 'yyy-yyy-yyy',
	name: 'fixture',
	username: 'armando',
	hostname: 'test-host',
	pid: 0,
	connected: true,
	createdAt: new Date(),
	updateAt: new Date()
}

const agents = [
	agent,
	extend(agent, { id:1, uuid: 'yyy-yyy-yyw', connected: false, username: 'test'}),
	extend(agent, { id:3, uuid: 'yyy-yyy-yyx'}),
	extend(agent, { id:4, uuid: 'yyy-yyy-yyZ', username:'test'}),
]

function extend(obj, values) {
	const clone = Object.assign({}, obj)
	return Object.assign(clone, values)
}

module.exports = {
	single: agent,
	all: agents,
	connected: agents.filter(item => item.connected),
	armando: agents.filter(item => item.username === 'armando'),
	findByUuid: id => agents.filter(item => item.uuid === id).shift(),
	findById: id => agents.filter(item => item.id === id).shift()
}