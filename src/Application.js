import Component from "@default-js/defaultjs-html-components/src/Component";
import { define, toNodeName } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import { findClosestInDepth } from "@default-js/defaultjs-html-components/src/utils/NodeHelper";
import { EVENT_CLICK as ROUTE_CLICK } from "./Route/Events";
import { EVENT_TO_ROUTE } from "./RouteLink/Events";
import Resolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver";
import Route from "./Route";
import RouteLink from "./RouteLink";
import View from "./View";

const NODENAME = toNodeName("application");
export const EVENT_STORE_CHANGED = "app-store-changed";

const findRoute = (app, name) => {
	const selector = `${Route.NODENAME}[name="${name}"]`;
	return app.find(selector).first();
};

const buildRouteContext = async (context, app) => {
	try {
		return Resolver.resolve(context, app.store, null);
	} catch (e) {
		return null;
	}
};

class Application extends Component {
	static get NODENAME() {
		return NODENAME;
	}

	constructor() {
		super();

		this.ready.then(() => {
			this.root.on([ROUTE_CLICK, EVENT_TO_ROUTE], async (event) => {
				this.route({ route: event.target });
			});
		});
	}

	get root() {
		return this;
	}

	async routes() {
		return this.root.find(Route.NODENAME);
	}

	async route({ route, refresh = null, context = null }) {
		if (arguments.length == 0) return this.__route__;

		if (typeof route === "string") route = findRoute(this, route);
		if (route instanceof RouteLink) {
			refresh = refresh != null ? refresh : route.refresh;
			if (context == null) context = await buildRouteContext(route.context, this);
			route = findRoute(this, route.target);
		}
		if (!(route instanceof Route)) throw new Error("Unsupported route type!");

		if(refresh == null) refresh = false;

		if (!refresh && this.__route__ == route) return;

		if (context == null) context = await buildRouteContext(route.context, this);

		if (this.__route__) this.__route__.active = false;
		await this.view.display({ route, context, refresh });
		this.__route__ = route;
		route.active = true;
	}

	get view() {
		if (!this.__view__) {
			this.__view__ = findClosestInDepth(this.root, (node) => {
				return node instanceof View;
			});
			this.__view__.app = this;
		}

		return this.__view__;
	}

	get store() {
		if (!this.__store__) this.__store__ = {};
		return this.__store__;
	}
}

define(Application);
export default Application;
