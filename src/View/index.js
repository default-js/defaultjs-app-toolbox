import Component from "@default-js/defaultjs-html-components/src/Component";
import { define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import NODENAME from "./Nodename";
import { Renderer, Template } from "@default-js/defaultjs-template-language";
import WeakData from "@default-js/defaultjs-html-components/src/utils/WeakData";

const ROUTEDATA = new WeakData();

class View extends Component {	
	static get NODENAME() {
		return NODENAME;
	}

	constructor() {
		super();
	}

	get root() {
		return this;
	}

	get app() {
		return this.__app__;
	}

	set app(app) {
		this.__app__ = app;
	}

	async display({ route, context, view, refresh = false }) {
		if (view) throw new Error("you must override the display function!");

		const { root, app } = this;
		root.empty();

		let component = route.stateful ? ROUTEDATA.value(route, "component") : null;
		if (refresh || !component) {
			component = await route.component();
			if (component instanceof Template) {
				await Renderer.render({
					container: root,
					data: {
						$view: this,
						$app: app,
						$store: app.store,
						$route: route,
						$context: context,
					},
					template: component,
				});
				component = NodeList.from(root.childNodes);
			} else {
				if (component instanceof View) await component.display({ route, context, view: this });
				root.append(component);
			}

			if (route.stateful) ROUTEDATA.value(route, "component", component);
		} else {
			if (component instanceof View) await component.display({ route, context, view: this });
			root.append(component);
		}
	}
}
define(View);
export default View;
