const { config } = require('../config');

function cacheResponse(res, seconds) {
	if (!config.dev) {
		res.set("Cache-Control", `public, max-age=${seconds}`); // Esto debe ser escrito exactamente igual
	}
}

// No todas las rutas deben contener caché
// Sólo deben tener las que estan solicitando recursos a la base de datos
module.exports = cacheResponse;