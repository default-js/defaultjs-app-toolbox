import Component from "@default-js/defaultjs-html-components/src/Component";
import { define, toNodeName } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import { findClosestInDepth } from "@default-js/defaultjs-html-components/src/utils/NodeHelper";
import { attributeChangeEventname } from "@default-js/defaultjs-html-components/src/utils/EventHelper";
import { EVENT_CLICK as ROUTE_CLICK } from "./Route/Events";
import { EVENT_TO_ROUTE } from "./RouteLink/Events";
import Resolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver";
import Route from "./Route";
import RouteLink from "./RouteLink";
import View from "./View";

const NODENAME = toNodeName("application");
export const EVENT_STORE_CHANGED = "app-store-changed";
export const ATTR_ROUTE = "route";
export const ATTR_VIEW = "view";

const findRoute = (app, name) => {
	const selector = `${Route.NODENAME}[name="${name}"]`;
	return app.find(selector).first();
};

const closestView = (app, name) => {
	return findClosestInDepth(app.root, (node) => {
		return node instanceof View && (name == null || node.name == name);
	});
};

const findView = (app, name) => {
	let view = null;
	if (name) {
		const result = app.root.find(`d-view[name="${name}"]`).first();
		if (result && result.length == 1) view = result.first();
	}

	if (!view) view = closestView(app, name);

	if (view) view.app = app;

	return view;
};

const buildRouteContext = async (context, app) => {
	try {
		return Resolver.resolve(context, app.store, null);
	} catch (e) {
		return null;
	}
};

const ATTRIBUTES = [ATTR_ROUTE, ATTR_VIEW];

class Application extends Component {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return NODENAME;
	}

	constructor() {
		super();

		this.ready.then(() => {
			this.root.on([ROUTE_CLICK, EVENT_TO_ROUTE], async (event) => {
				this.route({ route: event.target });
			});

			this.on(attributeChangeEventname(ATTR_ROUTE, this), () => {
				if (this.hasAttribute(ATTR_ROUTE)) this.route({ route: this.attr(ATTR_ROUTE) });
			});

			if (this.hasAttribute(ATTR_ROUTE)) this.route({ route: this.attr(ATTR_ROUTE) });
		});
	}

	async init() {}

	get root() {
		return this;
	}

	async routes() {
		return this.root.find(Route.NODENAME);
	}

	async route({ route, refresh = null, context = null, view = null }) {
		if (arguments.length == 0) return this.view.route;

		if (typeof route === "string") route = findRoute(this, route);
		if (route instanceof RouteLink) {
			refresh = refresh != null ? refresh : route.refresh;
			if (context == null) context = await buildRouteContext(route.context, this);
			if (view == null) view = route.view;
			route = findRoute(this, route.target);
		}
		if (!(route instanceof Route)) throw new Error("Unsupported route type!");

		if (refresh == null) refresh = false;
		if (view == null) view = route.view;

		view = view ? findView(this, view) : this.view;

		if (!refresh && view.route == route) return;

		if (context == null) context = await buildRouteContext(route.context, this);

		if (view.route) view.route.active = false;
		await view.display({ route, context, refresh });
		route.active = true;
	}

	get view() {
		if (!this.__view__) {
			this.__view__ = findView(this, this.attr(ATTR_VIEW));
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
