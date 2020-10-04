import Component from "@default-js/defaultjs-html-components/src/Component";
import { define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import NODENAME from "./Nodename";
import { EVENT_TO_ROUTE } from "./Events";
import { ATTR_TARGET, ATTR_CONTEXT, ATTR_REFRESH} from "./Attributes";
import {} from "@default-js/defaultjs-html-components/src/utils/NodeHelper";

const ATTRIBUTES = [ATTR_TARGET, ATTR_CONTEXT];

const EVENTS = [EVENT_TO_ROUTE];

class RouteLink extends Component {
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
		this.on("click", (event) => {
			event.preventDefault();
			this.trigger(EVENT_TO_ROUTE);
		});
	}

	async init() {}

	get target() {
		return this.attr(ATTR_TARGET);
	}
	
	get context(){
		return this.attr(ATTR_CONTEXT);
	}

	get refresh(){
		return this.hasAttribute(ATTR_REFRESH);
	}
}

define(RouteLink);
export default RouteLink;
