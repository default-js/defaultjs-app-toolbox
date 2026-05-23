import Component from "@default-js/defaultjs-html-components/src/Component.js";
import { define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js";
import Template, { NODE_ATTRIBUTE_TEMPLATE } from "@default-js/defaultjs-template-language/src/Template.js";
import Resolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import NODENAME from "./Nodename.js";
import { EVENT_INIT, EVENT_CLICK, EVENT_ACTIVATE, EVENT_DEACTIVATE } from "./Events.js";
import { ATTR_NAME, ATTR_ACTIVE, ATTR_COMPONENT_TAG, ATTR_COMPONENT_TAG_ATTRIBUTES, ATTR_STATEFUL, ATTR_CONTEXT, ATTR_VIEW } from "./Attributes.js";

const ATTRIBUTES = [ATTR_NAME, NODE_ATTRIBUTE_TEMPLATE, ATTR_COMPONENT_TAG, ATTR_COMPONENT_TAG_ATTRIBUTES, ATTR_STATEFUL, ATTR_VIEW];
const EVENTS = [EVENT_CLICK, EVENT_ACTIVATE, EVENT_DEACTIVATE];

class Route extends Component {
	static observedAttributes = ATTRIBUTES;
	static NODENAME = NODENAME;
	static EVENTS = EVENTS;

	#initialized = false;
	#template = null;

	constructor(setting) {
		super(setting || {});
		this.on("click", () => {
			if (!this.active) this.trigger(EVENT_CLICK);
		});
	}

	async init() {
		await super.init();
		if (!this.#initialized) {
			this.#initialized = true;
			this.trigger(EVENT_INIT);
			if (this.active) this.trigger(EVENT_CLICK);
		}
	}

	get name() {
		return this.attr(ATTR_NAME);
	}

	get view() {
		return this.attr(ATTR_VIEW);
	}

	get active() {
		return this.hasAttribute(ATTR_ACTIVE);
	}

	set active(active) {
		const current = this.active;
		if (active != current) {
			this.attr(ATTR_ACTIVE, active ? "" : null);
			if (active) this.trigger(EVENT_ACTIVATE);
			else this.trigger(EVENT_DEACTIVATE);
		}
	}

	get stateful() {
		return this.hasAttribute(ATTR_STATEFUL);
	}

	get context() {
		return this.attr(ATTR_CONTEXT) || "{}";
	}

	get refresh() {
		return this.hasAttribute(ATTR_REFRESH);
	}

	async component() {
		return this.#buildComponent();
	}

	#buildComponent = async () => {
		if (this.hasAttribute(NODE_ATTRIBUTE_TEMPLATE)) {
			if (!this.#template) this.#template = await Template.loadNodeTemplate(this, null, false);
			return this.#template;
		} else {
			const tag = this.attr(ATTR_COMPONENT_TAG);
			const clazz = customElements.get(tag);
			const attributes = await this.#getTagAttributes();

			const element = new clazz();
			for (let attribute in attributes) {
				const value = attributes[attribute];
				if (typeof value === "string") element.attr(attribute, value);
			}

			return element;
		}
	}

	#getTagAttributes = async () => {
		const attributes = this.attr(ATTR_COMPONENT_TAG_ATTRIBUTES) || "{}";
		return Resolver.resolve(attributes, {}, {});
	}
};

define(Route);
export default Route;
