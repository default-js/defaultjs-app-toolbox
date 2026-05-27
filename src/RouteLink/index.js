import Component from "@default-js/defaultjs-html-components/src/Component";
import { define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import NODENAME from "./Nodename";
import { EVENT_TO_ROUTE } from "./Events";
import { ATTR_TARGET, ATTR_CONTEXT, ATTR_REFRESH, ATTR_VIEW } from "./Attributes";
import {} from "@default-js/defaultjs-html-components/src/utils/NodeHelper";

const ATTRIBUTES = [ATTR_TARGET, ATTR_CONTEXT];

const EVENTS = [EVENT_TO_ROUTE];

class RouteLink extends Component {
	static observedAttributes = ATTRIBUTES;
	static NODENAME = NODENAME;
	static EVENTS = EVENTS;	
	
	#initialized = false;

	constructor(setting) {
		super(setting || {});
		this.on("click", (event) => {
			this.trigger(EVENT_TO_ROUTE);
		});
	}

	async init() {
		await super.init();
		if(!this.#initialized) {
			this.#initialized = true;
			this.attr("tabindex", "0");
			this.attr("role", "button");
		}
	}

	get view() {
		return this.attr(ATTR_VIEW);
	}

	get target() {
		return this.attr(ATTR_TARGET);
	}

	get context() {
		return this.attr(ATTR_CONTEXT) || "{}";
	}

	get refresh() {
		return this.hasAttribute(ATTR_REFRESH);
	}
}

define(RouteLink);
export default RouteLink;
