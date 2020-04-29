const auth = require('../../../auth');
const response = require('../../../network/response');
module.exports = function checkAuth(action) {

	function middleWare(req, res, next) {
		switch(action) {
			case 'update':
				// owner es el usuario que quiere modificar su propia información
				const owner = req.body.id;
				auth.check.own(req, owner);
				next();
				break;

			case 'follow':
				auth.check.logged(req);
				next();
				break;

			default:
				next();
		}
	}

	return middleWare;
}