'use stric'

const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabase (config) {
  // Patrón singelton para evitar múltiples instancias
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }

  return sequelize
}
