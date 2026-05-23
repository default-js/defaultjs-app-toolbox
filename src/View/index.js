import Component from "@default-js/defaultjs-html-components/src/Component";
import { define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import NODENAME from "./Nodename";
import { Renderer, Template } from "@default-js/defaultjs-template-language";
import WeakData from "@default-js/defaultjs-html-components/src/utils/WeakData";
import { ATTR_VIEW } from "../Application";

const ROUTEDATA = new WeakData();

const ATTR_NAME = "name";
const ATTRIBUTES = [ATTR_NAME];
class View extends Component {

	static observedAttributes=  ATTRIBUTES;
	static NODENAME = NODENAME;

	#app = null;
	#route = null;

	constructor(setting) {
		super(setting || {});
	}

	get name(){
		return this.attr(ATTR_NAME);
	}

	get app() {
		return this.#app;
	}

	set app(app) {
		this.#app = app;
	}

	get route(){
		return this.#route;
	}

	async display({ route, context, view, refresh = false }) {
		if (view) throw new Error("you must override the display function!");

		this.#route = route;
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
				if (component instanceof View) {
					component.app = app;
					await component.ready;
					component.display({ route, context, view: this });
				}
				root.append(component);
			}

			if (route.stateful) ROUTEDATA.value(route, "component", component);
		} else {
			if (component instanceof View) {
				component.app = app;
				await component.ready;
				component.display({ route, context, view: this });
			}
			root.append(component);
		}
	}
}
define(View);
export default View;
