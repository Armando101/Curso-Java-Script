'use strict'

const Sequalize = require('sequalize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequalize = setupDatabase(config)

  return sequalize.define('metric', {
    type: {
      type: Sequalize.STRING,
      allowNull: false
    },
    value: {
      type: Sequalize.TEXT,
      allowNull: false
    }
  })
}
