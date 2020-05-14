'use strict'

function parsePayload(payload) {
	if (payload instanceof Buffer) {
		payload = payload.toString('utf8');
	}

	try {
		payload = JSON.parse(payload);
	} catch (e) {
		payload = {};
	}

	return payload;
}

module.expors = {
	parsePayload
}