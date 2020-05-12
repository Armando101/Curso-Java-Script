'use strict'

module.exports = function setupMetric(MetricModel, AgentModel) {
	
	async function findByAgentUuid(uuid) {
		return MetricModel.findAll({
			attributes: ['type'],
			group: ['type'],
			include: [{
				attributes: [],
				model: AgentModel,
				where: {
					uuid
				}
			}],
			raw: true
		})
	}

	async function findByTypeAgentUuid(type, uuid) {
		return MetricModel.findAll({
			attributes: ['id', 'type', 'createdAt'], //  // Los atributos que se van a regresar en el SELECT -->id, type, value, createdAt<-- FROM table
			where: {	// // SELECT xxxx FROM yyyy WHERE -->type = type<--
				type
			},
			limit: 20,
			order: [['createdAt', 'DESC']],
			include: [{	// Join
				attributes: [],
				model: AgentModel,
				where: {
					uuid
				}
			}],
			raw: true 	// return in JSON
		})
	}

	async function create(uuid, metric) {
		const agent = await AgentModel.findOne({
			where: { uuid }
		})

		if (agent) {
			Object.assign(metric, { agentId: agent.id})
			const result = await MetricModel.create(metric)
			return result.toJSON()
		}
	}

	return {
		create,
		findByAgentUuid,
		findByTypeAgentUuid
	}
}