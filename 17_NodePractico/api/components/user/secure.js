const auth = require('../../../auth');

module.exports = function checkAuth(action) {

	function middleWare(req, res, next) {
		switch(action) {
			case 'update':
				// owner es el usuario que quiere modificar su propia información
				const owner = req.body.id;
				auth.check.own(req, owner);
				break;

			default:
				next();
		}
	}

	return middleWare;
}