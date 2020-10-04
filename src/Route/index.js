import Component from "@default-js/defaultjs-html-components/src/Component";
import { define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import { loadTemplate, ATTR_TEMPLATE } from "@default-js/defaultjs-html-components/src/utils/TemplateHelper";
import Resolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver";
import NODENAME from "./Nodename";
import { EVENT_CLICK, EVENT_ACTIVATE, EVENT_DEACTIVATE } from "./Events";
import { ATTR_NAME, ATTR_ACTIVE, ATTR_COMPONENT_TAG, ATTR_COMPONENT_TAG_ATTRIBUTES, ATTR_STATEFUL, ATTR_CONTEXT } from "./Attributes";

const ATTRIBUTES = [ATTR_NAME, ATTR_TEMPLATE, ATTR_COMPONENT_TAG, ATTR_COMPONENT_TAG_ATTRIBUTES, ATTR_STATEFUL];
const EVENTS = [EVENT_CLICK, EVENT_ACTIVATE, EVENT_DEACTIVATE];
const getTagAttributes = async (route) => {
	const attributes = route.attr(ATTR_COMPONENT_TAG_ATTRIBUTES) || "{}";
	return Resolver.resolve(attributes, {}, {});
};

const buildComponent = async (route) => {
	if (route.hasAttribute(ATTR_TEMPLATE)) {
		if (!route.__template__) route.__template__ = loadTemplate(route, null);
		return route.__template__;
	} else {
		const tag = route.attr(ATTR_COMPONENT_TAG);
		const clazz = customElements.get(tag);
		const attributes = await getTagAttributes(route);

		const element = new clazz();
		for (attribute in attributes) {
			const value = attributes[attribute];
			if (typeof value === "string") element.attr(attribute, value);
		}

		return element;
	}
};

class Route extends Component {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return NODENAME;
	}

	static get EVENTS() {
		return EVENTS;
	}

	constructor() {
		super();
		this.on("click", () => {
			if(!this.active)
				this.trigger(EVENT_CLICK);
		});
	}

	async init() {}

	get name() {
		return this.attr(ATTR_NAME);
	}

	get active() {
		return this.hasAttribute(ATTR_ACTIVE);
	}

	set active(active) {
		const current = this.active;
		if (active != current) {
			this.attr(ATTR_ACTIVE, active ? "" : null);
			if (active)
				this.trigger(EVENT_ACTIVATE);
			else 
				this.trigger(EVENT_DEACTIVATE);
		}
	}
	
	get stateful() {
		return this.attr(ATTR_STATEFUL);
	}

	get context(){
		return this.attr(ATTR_CONTEXT);
	}

	async component() {		
		return buildComponent(this);
	}
}

define(Route);
export default Route;
