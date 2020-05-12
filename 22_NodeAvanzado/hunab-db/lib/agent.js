'use strict'

module.exports = function setupAgent(AgentModel) {
	function findById(id) {
		// id += 1	// Esto no debería de pasar las pruebas ya que estamos alterando el id
		return AgentModel.findById(id)
	}
	
	return {
		findById
	}
}