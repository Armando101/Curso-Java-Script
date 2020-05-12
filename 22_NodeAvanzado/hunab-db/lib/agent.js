'use strict'

module.exports = function setupAgent(AgentModel) {
	async function createOrUpdate(agent) {
		const cond = {
			where: {
				uuid: agent.uuid
			}
		}

		// findOne es de sequelize
		const existingAgent = await AgentModel.findOne(cond)

		if (existingAgent) {
			const update = await AgentModel.update(agent, cond)
			return update ? AgentModel.findOne(cond) : existingAgent; // update me regresa el número de líneas que fueron acutalizadas	
		}

		// Si no existe lo crea y me regresa sólo el JSON si otros datos que le agrega sequelize
		const result = await AgentModel.create(agent)
		return result.toJSON()
	}

	function findById(id) {
		// id += 1	// Esto no debería de pasar las pruebas ya que estamos alterando el id
		return AgentModel.findById(id)
	}
	
	return {
		findById,
		createOrUpdate
	}
}