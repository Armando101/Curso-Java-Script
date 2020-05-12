'use strict'

const Sequalize = require('sequalize')
const setupDatabase = require('../lib/db')

module.exports = function setupAgentModel (config) {
  const sequalize = setupDatabase(config)

  // Configuración del modelo de agente
  // Va a crear automáticamente la tabla en la base de datos con los campos
  // Pluraliza el nombre de la tabla
  return sequalize.define('agent', {
    uuid: {
      type: Sequalize.STRING,
      allowNull: false
    },
    username: {
      type: Sequalize.STRING,
      allowNull: false
    },
    name: {
      type: Sequalize.STRING,
      allowNull: false
    },
    hostname: {
      type: Sequalize.STRING,
      allowNull: false
    },
    pid: {
      type: Sequalize.INTEGER,
      allowNull: false
    },
    connected: {
      type: Sequalize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
