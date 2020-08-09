class Router {
	constructor(routes) {
		this.routes = routes;
		this._loadInitialRoute()
	}
	
	loadRoute(...urlSegs) {
		const matchedRoute = this._matchUrlToRoute(urlSegs);

		const url = `/${urlSegs.join('/')}`;

		history.pushState({}, 'This works', url);

		const routerOutElement = document.querySelectorAll('[data-router]')[0];
		routerOutElement.innerHTML = matchedRoute.template;
	}

	_loadInitialRoute() {
		const pathNameSplit = window.location.pathname.split('/');
		const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';

		this.loadRoute(...pathSegs);
	}

	_matchUrlToRoute(urlSegs) {
		const matchedRoute = this.routes.find(route => {
			const routePathSegs = route.path.split('/').slice(1);

			if (routePathSegs.length !== urlSegs.length) {
				return false;
			}

			return routePathSegs
				.every((routePathSegs, i) => routePathSegs === urlSegs[i]);

		});

		return matchedRoute;
	}
}
