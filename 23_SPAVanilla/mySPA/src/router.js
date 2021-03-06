class Router {
	constructor(routes) {
		this.routes = routes;
		this.loadInitialRoute();
	}
	
	loadInitialRoute() {
		const pathNameSplit = window.location.pathname.split('/');
		const pathSegs = pathNameSplit.slice(1);

		this.loadRoute(...pathSegs);
	}

	loadRoute(...urlSegs) {
		const matchedRoute = this.matchUrlToRoute(urlSegs);

		const url = `/${urlSegs.toString()}`;

		history.pushState({}, 'This works', url);

		const routerOutElement = document.querySelectorAll('[data-router]')[0];
		routerOutElement.innerHTML = matchedRoute.template;
	}


	matchUrlToRoute(urlSegs) {
		const matchedRoute = this.routes.find(route => {
			const routePathSegs = route.path.split('/').slice(1);

			return routePathSegs.toString() === urlSegs.toString();

		});

		return matchedRoute ? matchedRoute : this.routes[0];
	}
}
