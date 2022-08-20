import Component from "@default-js/defaultjs-html-components/src/Component";
import { define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import Template, {NODE_ATTRIBUTE_TEMPLATE}  from "@default-js/defaultjs-template-language/src/Template";
import Resolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver";
import { privatePropertyAccessor } from "@default-js/defaultjs-common-utils/src/PrivateProperty";
import NODENAME from "./Nodename";
import { EVENT_INIT, EVENT_CLICK, EVENT_ACTIVATE, EVENT_DEACTIVATE } from "./Events";
import { ATTR_NAME, ATTR_ACTIVE, ATTR_COMPONENT_TAG, ATTR_COMPONENT_TAG_ATTRIBUTES, ATTR_STATEFUL, ATTR_CONTEXT, ATTR_VIEW } from "./Attributes";

const ATTRIBUTES = [ATTR_NAME, NODE_ATTRIBUTE_TEMPLATE, ATTR_COMPONENT_TAG, ATTR_COMPONENT_TAG_ATTRIBUTES, ATTR_STATEFUL, ATTR_VIEW];
const EVENTS = [EVENT_CLICK, EVENT_ACTIVATE, EVENT_DEACTIVATE];
const getTagAttributes = async (route) => {
	const attributes = route.attr(ATTR_COMPONENT_TAG_ATTRIBUTES) || "{}";
	return Resolver.resolve(attributes, {}, {});
};

const _template = privatePropertyAccessor(NODE_ATTRIBUTE_TEMPLATE);

const buildComponent = async (route) => {
	if (route.hasAttribute(NODE_ATTRIBUTE_TEMPLATE)) {
		let template = _template(route);
		if (!template) {
			template = await Template.loadNodeTemplate(route, null, false);
			_template(route, template);
		}
		return template;
	} else {
		const tag = route.attr(ATTR_COMPONENT_TAG);
		const clazz = customElements.get(tag);
		const attributes = await getTagAttributes(route);

		const element = new clazz();
		for (let attribute in attributes) {
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

	#initialized = false;

	constructor(setting) {
		super(setting || {});
		this.on("click", () => {
			if(!this.active)
				this.trigger(EVENT_CLICK);
		});
	}

	async init() {
		await super.init();
		if(!this.#initialized){
			this.#initialized = true;
			this.trigger(EVENT_INIT);
			if(this.active)
				this.trigger(EVENT_CLICK);
		}
	}

	get name() {
		return this.attr(ATTR_NAME);
	}

	get view(){
		return this.attr(ATTR_VIEW);
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
		return this.hasAttribute(ATTR_STATEFUL);
	}

	get context(){
		return this.attr(ATTR_CONTEXT);
	}	
	
	get refresh(){
		return this.hasAttribute(ATTR_REFRESH);
	}

	async component() {		
		return buildComponent(this);
	}
}

define(Route);
export default Route;
