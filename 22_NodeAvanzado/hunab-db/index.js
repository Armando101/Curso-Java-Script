'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')
const defaults = require('defaults')

module.exports = async function (config) {
  // Tomamos la configuración e indicamos una por defecto
  config = defaults(config, {
  	dialect: 'sqlite',
  	pool: {
  	  max: 10, // maximo 10 conexiones
  	  min: 0,
      idle: 10000  // Si un usuario tiene más de 10 segundos sin actividad se desloguea
    },
    query: {
    	raw: true  // Indico que cada query me entregue sólo el JSON y no todo lo demás que viene
    }
  })
  const sequelize = setupDatabase(config)
  const agentModel = setupAgentModel(config)
  const metricModel = setupMetricModel(config)

  agentModel.hasMany(metricModel)
  metricModel.belongsTo(agentModel)

  // Devuelve una promesa
  await sequelize.authenticate()

  if (config.setup) {
    // Si la base de datos existe borrela y cree una nueva
    await sequelize.sync({ force: true })
  }

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
