'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function (config) {
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
