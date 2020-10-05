/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./module-bundle.js":
/*!**************************!*\
  !*** ./module-bundle.js ***!
  \**************************/
/*! exports provided: Application, Route, View, RouteLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Application */ "./src/Application.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _src_Application__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Route */ "./src/Route/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _src_Route__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_RouteLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/RouteLink */ "./src/RouteLink/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteLink", function() { return _src_RouteLink__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/View */ "./src/View/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _src_View__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/* harmony default export */ __webpack_exports__["default"] = (_src_Application__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/Global.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/Global.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {const GLOBAL = (() => {
	if(typeof global !== "undefined") return global;
	if(typeof window !== "undefined") return window;	
	if(typeof self !== "undefined") return self;
	return {};
})();

/* harmony default export */ __webpack_exports__["default"] = (GLOBAL);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectProperty; });
class ObjectProperty {
	constructor(key, context){
		this.key = key;
		this.context = context;
	}
	
	get keyDefined(){
		return this.key in this.context; 
	}
	
	get hasValue(){
		return !!this.context[this.key];
	}
	
	get value(){
		return this.context[this.key];
	}
	
	set value(data){
		this.context[this.key] = data;
	}
	
	set append(data) {
		if(!this.hasValue)
			this.value = data;
		else {
			const value = this.value;
			if(value instanceof Array)
				value.push(data);
			else
				this.value = [this.value, data];
		}
	}
	
	remove(){
		delete this.context[this.key];
	}
	
	static load(data, key, create=true) {
		let context = data;
		const keys = key.split("\.");
		let name = keys.shift().trim();
		while(keys.length > 0){
			if(!context[name]){
				if(!create)
					return null;
				
				context[name] = {}
			}
			
			context = context[name];
			name = keys.shift().trim();
		}
		
		return new ObjectProperty(name, context);
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: append, isPojo, merge, filter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPojo", function() { return isPojo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectProperty.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");

/**
 * append a propery value to an object. If propery exists its would be converted to an array
 * 
 *  @param aKey:string name of property
 *  @param aData:any property value
 *  @param aObject:object the object to append the property
 *  
 *  @return returns the changed object
 */
const append = function(aKey, aData, aObject) {
	if (typeof aData !== "undefined") {
		const property = _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"].load(aObject, aKey, true)
		property.append = aData;
	}
	return aObject;
};

/**
 * checked if an object a simple object. No Array, Map or something else.
 * 
 * @param aObject:object the object to be testing
 * 
 * @return boolean
 */
const isPojo = function(aObject) {
	return typeof aObject !== "undefined" && aObject != null && aObject.constructor.name === "Object"
}

/**
 * merging object into a target object. Its only merge simple object and sub objects. Every other 
 * value would be replaced by value from the source object.
 * 
 * sample: merge(target, source-1, source-2, ...source-n)
 * 
 * @param aTarget:object the target object to merging into
 * @param aSources:object
 * 
 * @return object returns the target object
 */
const merge = function(aTarget) {
	for (let i = 1; i < arguments.length; i++) {
		const source = arguments[i];
		Object.getOwnPropertyNames(source).forEach(aKey => {
			if (isPojo(aTarget[aKey]))
				merge(aTarget[aKey], source[aKey]);
			else
				aTarget[aKey] = source[aKey];
		});
	}

	return aTarget;
}



const buildPropertyFilter = function({ names, allowed }) {
	return (name, value, context) => {
		return names.includes(name) === allowed;
	}
};


const filter = function() {
	const [data, propFilter, {deep = false, recursive = true, parents = []} = {}] = arguments;
	const result = {};

	for (name in data) {
		const value = data[name];
		const accept = propFilter(name, value, data);
		if (accept && (!deep || value === null || value === undefined))
			result[name] = value;
		else if (accept && deep) {
			const type = typeof value;
			if (type !== "object"
				|| value instanceof Array
				|| value instanceof Map
				|| value instanceof Set
				|| value instanceof RegExp
				|| parents.includes[value]
				|| value == data)
				result[name] = value;
			else
				result[name] = filter(value, propFilter, {deep, recursive, parents:  parents.concat(data)});
		}

	}

	return result;
};



/* harmony default export */ __webpack_exports__["default"] = ({
	isPojo,
	append,
	merge,
	filter,
	buildPropertyFilter
});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/Context.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/Context.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Context; });
const seekAtChain = (resolver, property) => {
	while(resolver){
		const def = resolver.proxy.handle.getPropertyDef(property, false);
		if(def)
			return def;
		
		resolver = resolver.parent;
	}	
	return { data: null, resolver: null, defined: false };
}

class Handle {
	constructor(data, resolver) {
		this.data = data;
		this.resolver = resolver;
		this.cache = new Map();
	}
	
	updateData(data){
		this.data = data;
		this.cache = new Map();
	}
	
	resetCache(){
		this.cache = new Map();
	}

	getPropertyDef(property, seek = true) {
		if (this.cache.has(property))
			return this.cache.get(property);
		
		let def = null
		if (this.data && property in this.data)
			def = { data: this.data, resolver: this.resolver, defined: true };
		else if(seek)
			def = seekAtChain(this.resolver.parent, property);
		else
			return null;
		if(def.defined)
			this.cache.set(property, def);
		return def;
	}

	hasProperty(property) {
		//@TODO write tests!!!
		const { defined } = this.getPropertyDef(property);
		return defined;
	}
	getProperty(property) {
		//@TODO write tests!!!	
		const { data } = this.getPropertyDef(property);
		return data ? data[property] : undefined;
	}
	setProperty(property, value) {
		//@TODO would support this action on an proxied resolver context??? write tests!!!
		const { data, defined } = this.getPropertyDef(property);
		if (defined)
			data[property] = value;
		else {
			if (this.data)
				this.data[property] = value;
			else {
				this.data = {}
				this.data[property] = value;
			}
			this.cache.set(property, { data: this.data, resolver: this.resolver, defined: true });
		}
	}
	deleteProperty(property) {
		//@TODO would support this action on an proxied resolver context??? write tests!!!		
		throw new Error("unsupported function!")
	}
}

class Context {
	constructor(context, resolver) {
		this.handle = new Handle(context, resolver);		
		this.data = new Proxy(this.handle, {
			has: function(data, property) {
				return data.hasProperty(property);
			},
			get: function(data, property) {
				return data.getProperty(property);
			},
			set: function(data, property, value) {
				return data.setProperty(property, value);
			},
			deleteProperty: function(data, property) {
				return data.deleteProperty(property);
			}
			//@TODO need to support the other proxy actions		
		});;
	}
	
	updateData(data){
		this.handle.updateData(data)		
	}
	
	resetCache(){
		this.handle.resetCache();
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultValue; });
class DefaultValue {
	constructor(value){
		this.hasValue = arguments.length == 1;
		this.value = value;
	}	
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExpressionResolver; });
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectProperty.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/* harmony import */ var _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultValue.js */ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js");
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Context.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Context.js");







const EXECUTION_WARN_TIMEOUT = 1000;
const EXPRESSION = /\$\{(([a-zA-Z0-9\-_\s]+)::)?([^\{\}]+)\}/;
const DEFAULT_NOT_DEFINED = new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const toDefaultValue = value => {
	if (value instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])
		return value;

	return new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"](value);
};

const execute = async function(aStatement, aContext) {
	if (typeof aStatement !== "string")
		return aStatement;
		
	const expression = new Function("context", 
`
return (async (context) => {
	try{ 
		with(context){
			 return ${aStatement}
		}
	}catch(e){
		throw e;
	}
})(context)`
	);
	
	let timeout = setTimeout(() => {
		timeout = null;
		console.warn("long running statement:", aStatement, new Error());
	}, EXECUTION_WARN_TIMEOUT)
	
	const result = await expression(aContext);
	
	if(timeout)
		clearTimeout(timeout)
	return result;
};

const resolve = async function(aResolver, aExpression, aFilter, aDefault) {
	if (aFilter && aResolver.name != aFilter)
		return aResolver.parent ? resolve(aResolver.parent, aExpression, aFilter, aDefault) : null;
	
	const result = await execute(aExpression, aResolver.proxy.data);
	if (result !== null && typeof result !== "undefined")
		return result;

	else if (aDefault instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"] && aDefault.hasValue)
		return aDefault.value;

	return result;
};

const normalize = value => {
	if (value) {
		value = value.trim();
		return value.length == 0 ? null : value;
	}
	return null;
};

class ExpressionResolver {
	constructor({ context = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"], parent = null, name = null }) {
		this.parent = (parent instanceof ExpressionResolver) ? parent : null;
		this.name = name;
		this.context = context;
		this.proxy = new _Context_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.context, this);
	}

	get chain() {
		return this.parent ? this.parent.chain + "/" + this.name : "/" + this.name;
	}

	get effectiveChain() {
		if (!this.context)
			return this.parent ? this.parent.effectiveChain : "";
		return this.parent ? this.parent.effectiveChain + "/" + this.name : "/" + this.name;
	}

	get contextChain() {
		const result = [];
		let resolver = this;
		while (resolver) {
			if (resolver.context)
				result.push(resolver.context);

			resolver = resolver.parent;
		}

		return result;
	}

	getData(key, filter) {
		if (!key)
			return;
		else if (filter && filter != this.name) {
			if (this.parent)
				this.parent.getData(key, filter);
		} else {
			const property = _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(this.context, key, false);
			return property ? property.value : null;
		}
	}

	updateData(key, value, filter) {
		if (!key)
			return;
		else if (filter && filter != this.name) {
			if (this.parent)
				this.parent.updateData(key, value, filter);
		} else {
			if(this.context == null || typeof this.context === "undefined"){
				this.context = {};				
				this.proxy.updateData(this.context);
			}
			const property = _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(this.context, key);
			property.value = value;
			this.proxy.resetCache();
		}
	}

	mergeContext(context, filter) {
		if (filter && filter != this.name) {
			if (this.parent)
				this.parent.mergeContext(context, filter);
		} else {
			this.context = this.context ? _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__["default"].merge(this.context, context) : context;
		}
	}

	async resolve(aExpression, aDefault) {
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		try {
			const match = EXPRESSION.exec(aExpression);
			if (match)
				return await resolve(this, match[3], normalize(match[2]), defaultValue);
			else
				return await resolve(this, normalize(aExpression), null, defaultValue);
		} catch (e) {
			console.error("error at executing statment\"", aExpression, "\":", e);
			return defaultValue.hasValue ? defaultValue.value : aExpression;
		}
	}

	async resolveText(aText, aDefault) {
		let text = aText;
		let temp = aText; // required to prevent infinity loop
		let match = EXPRESSION.exec(text);
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED
		while (match != null) {
			const result = await this.resolve(match[0], defaultValue);
			temp = temp.split(match[0]).join(); // remove current match for next loop
			text = text.split(match[0]).join(typeof result === "undefined" ? "undefined" : (result == null ? "null" : result));
			match = EXPRESSION.exec(temp);
		}
		return text;
	}

	static async resolve(aExpression, aContext, aDefault, aTimeout) {
		const resolver = new ExpressionResolver({ context: aContext });
		const defaultValue = arguments.length > 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		if (typeof aTimeout === "number" && aTimeout > 0)
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(resolver.resolve(aExpression, defaultValue));
				}, aTimeout);
			});

		return resolver.resolve(aExpression, defaultValue)
	}

	static async resolveText(aText, aContext, aDefault, aTimeout) {
		const resolver = new ExpressionResolver({ context: aContext });
		const defaultValue = arguments.length > 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		if (typeof aTimeout === "number" && aTimeout > 0)
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(resolver.resolveText(aText, defaultValue));
				}, aTimeout);
			});

		return resolver.resolveText(aText, defaultValue);
	}
	
	static buildSecure({context, propFilter, option={deep:true}, name, parent}){
		context = _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__["default"].filter({data: context, propFilter, option});
		return new ExpressionResolver({context, name, parent});
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@default-js/defaultjs-extdom/src/index.js");


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/Global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/Global.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs || {};
_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom || {
	VERSION : "1.0.0-beta.8",
	utils : {
		Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"]
	}
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.find = function() {
	return document.find.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.ready = function() {
	return document.ready.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.create = function(aContent, asTemplate) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const template = document.createElement("template");
	template.innerHTML = aContent;
	if(asTemplate)
		return template;
	
	return document.importNode(template.content, true).childNodes;
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.script = function(aFile, aTarget) {
	if(aFile instanceof Array)
		return Promise.all(aFile.map(file => _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.script(file, aTarget)));
	
	if(typeof aFile === "string")	
		return new Promise((r,e) => {
			const script = document.createElement("script");
			script.async = true;
			script.onload = function(){r()};
			script.onerror = function(){throw new Error("load error!")};
			!aTarget ? document.body.append(script) : aTarget.append(script);
			script.src = aFile;
		});
	else
		return Promise.reject("First parameter must be an array of strings or a string!");
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

document.addEventListener("DOMContentLoaded", () => document.trigger("ready"));





/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js");



Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLTextAreaElement,Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_1__["default"])("ValueSupport", Prototype => {	
	Prototype.val = function() {
		if(arguments.length == 0)
			return this.value;
		else
			this.value = arguments[0]
			
		return this;
	};	
}));

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLCollection, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

HTMLCollection.prototype.applyTo = function(){
	const args = Array.from(arguments);
	const calling = args.shift();
	const isFunction = typeof calling === "function";
	const results = [];
	for(let i = 0; i < this.length; i++){
		const node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

HTMLCollection.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			const result = new Map();
			this.forEach(node => {
				if(typeof node.val === "function"){
					const value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		HTMLCollection.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

HTMLCollection.from = function(){
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;
	
	while(args.length > 0){
		const arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof HTMLElement)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof HTMLCollection || arg instanceof NodeList || arg instanceof Array){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof HTMLElement){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(HTMLCollection.prototype, data);
};


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
	let results = [];	
	this.forEach(node => {
		if(node && typeof node[aFunctionName] === "function"){
			let result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof HTMLCollection)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof HTMLElement || results[0] instanceof HTMLCollection)
		return HTMLCollection.from.apply(null, results);
	else
		return results;
},HTMLCollection.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__["default"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(NodeList, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

NodeList.prototype.applyTo = function(){
	const args = Array.from(arguments);
	const calling = args.shift();
	const isFunction = typeof calling === "function";
	const results = [];
	for(let i = 0; i < this.length; i++){
		const node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

NodeList.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			const result = new Map();
			this.forEach(node => {
				if(typeof node.val === "function"){
					const value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		NodeList.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

NodeList.from = function(){
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;
	
	while(args.length > 0){
		const arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof Node)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof Node){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(NodeList.prototype, data);
};


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
	let results = [];	
	this.forEach(node => {
		if(node && typeof node[aFunctionName] === "function"){
			const result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof NodeList)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof Node || results[0] instanceof NodeList)
		return NodeList.from(results);
	else
		return results;
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("AttributeSupport", Prototype => {
	Prototype.attr = function() {
		if (arguments.length == 0)
			return this.hasAttributes() ? (() => {
				const result = {};
				this.getAttributeNames().forEach(name => {
					result[name] = this.getAttribute(name);
				});
				return result;
			})() : undefined;
		else if (arguments.length == 1)
			return this.getAttribute(arguments[0]);
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			this.removeAttribute(arguments[0]);
		else
			this.setAttribute(arguments[0], arguments[1]);
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");

const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("DataSupport", Prototype => {
	Prototype.data = function() {
		const data = {};
		if (typeof this.dataset !== "undefined")
			for (name in this.dataset)
				data[name] = this.dataset[name];

		this.data = (function() {
			if (arguments.length == 0)
				return data;
			else if (arguments.length == 1)
				return data[arguments[0]];
			else if (typeof arguments[1] === "undefined" || arguments[1] == null)
				delete data[arguments[0]];
			else
				data[arguments[0]] = arguments[1];

			return this;
		}).bind(this);

		return this.data.apply(null, arguments);
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const DEFAULT_TIMEOUT = 100;
const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("EventSupport", (Prototype) => {
	const EVENTSPLITER = /(\s+)|(\s*,\s*)/;
	const getWrapperHandleMap = (element) => {
		if (!element.__wrapperhandlemap__)
			element.__wrapperhandlemap__ = new Map();

		return element.__wrapperhandlemap__;
	}

	const getTriggerTimeouts = (element) => {
		if (!element.___EVENTTRIGGERTIMEOUTS___) element.___EVENTTRIGGERTIMEOUTS___ = {};

		return element.___EVENTTRIGGERTIMEOUTS___;
	};

	const removeWrapper = (element, data, eventTypes) => {
		const { wrapper, option, events, handle } = data;
		const capture = option.capture;
		if(eventTypes){
			eventTypes = typeof eventTypes === "string" ? eventTypes.split(EVENTSPLITER) : eventTypes;
			for (let event of eventTypes) {
				const index = events.indexOf(event);
				if(index >= 0) {
					element.removeEventListener(event, wrapper, capture);
					events.splice(index, 1);
				}
				if(events.length == 0)				
					getWrapperHandleMap(element).delete(handle);
			}
			
		}else{
			for (let event of events) {
				element.removeEventListener(event, wrapper, capture);
			}
			getWrapperHandleMap(element).delete(handle);
		}		
	}

	Prototype.on = function() {
		if (arguments.length < 2) throw new Error("Too less arguments!");

		const args = Array.from(arguments);
		let events = typeof args[0] === "string" ? args.shift().split(EVENTSPLITER) : args.shift();
		const filter = typeof args[0] === "string" ? args.shift() : null;
		const handle = args.shift();
		const option = typeof args[0] === "undefined" ? { capture: false, once: false, passive: false } : (typeof args[0] === "boolean" ? { capture: args.shift(), once: false, passive: false } : args.shift());
		const wrapper = function(aEvent) {
			if (filter) {
				const target = event.target;
				if (typeof target.is === "function" && !aEvent.target.is(filter)) return true;
			}
			const result = handle.apply(null, arguments);
			if (option.once) removeWrapper(this, wrapper);
			return result;
		};

		getWrapperHandleMap(this).set(handle, { handle, wrapper: wrapper, events, option });

		for (let event of events) {
			this.addEventListener(event, wrapper, option);
		}

		return this;
	};


	Prototype.removeOn = function(handle, event, capture) {
		const data = getWrapperHandleMap(this).get(handle);
		if (data) 
			removeWrapper(this, data, event);
		else
			this.removeEventListener(handle, event, capture);

		return this;
	};

	Prototype.trigger = function() {
		const args = Array.from(arguments);
		const timeout = typeof args[0] === "number" ? args.shift() : -1;
		if (timeout >= 0) {
			const type = args[0];
			const timeouts = getTriggerTimeouts(this);
			const timeoutid = timeouts[type];
			if (timeoutid) clearTimeout(timeoutid);

			timeouts[type] = setTimeout(() => {
				delete timeouts[type];
				this.trigger.apply(this, args);
			}, timeout);
		} else {
			const type = args.shift();
			const delegate = args[0] instanceof Event ? args.shift() : null;
			const data = args.length >= 1 ? (args.length == 0 ? args.shift() : args) : delegate;
			const event = data ? new CustomEvent(type, { bubbles: true, cancelable: true, detail: data }) : new Event(type, { bubbles: true, cancelable: true });

			if (delegate) event.delegatedEvent = delegate;
			this.dispatchEvent(event);
		}
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("HtmlClassSupport", Prototype => {	
	Prototype.addClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.add(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,clazz => this.classList.add(clazz));
		
		return this;
	};
	
	Prototype.removeClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.remove(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments, clazz => this.classList.remove(clazz));
		
		return this;		
	};
	
	Prototype.toggleClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.toggle(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments, clazz => this.classList.toggle(clazz));
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ListSupport", Prototype => {		
	Prototype.indexOf = function() {
		for(let i = 0; i < this.length; i++)
			if(this[i] == arguments[0])
				return i;
		
		return -1;
	};

	Prototype.forEach = function(){
		return Array.prototype.forEach.apply(Array.from(this), arguments);
	};
	
	Prototype.map = function(){
		return Array.prototype.map.apply(Array.from(this), arguments);
	};
	
	Prototype.filter = function(){
		return Array.prototype.filter.apply(Array.from(this), arguments);
	};

	Prototype.first = function(){
		if(this.length > 0)
			return this[0];
	};	
	
	Prototype.last = function(){
		if(this.length > 0)
			return this[this.length - 1];
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");



const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ManipulationSupport", Prototype => {	
	Prototype.empty = function(){
		let nodes = this.childNodes
		while(nodes.length != 0)			
			nodes[0].remove(true);
		
		return this;
	};
	
	Prototype.content = function(){
		return this.childNodes;
	};	
	
	Prototype.html = function(){
		if(arguments.length == 0)			
			return this.innerHTML;
		else if(arguments.length == 1 && typeof arguments[0] === "boolean")
			if(arguments[0])
				return this.outerHTML;
			else
				return this.innerHTML;
		else 
			Array.from(arguments).forEach(content => {
				this.empty();
				if(typeof content === "string")
					this.append(content);
				else if(content instanceof Node || content instanceof NodeList || content instanceof HTMLCollection){
					this.append(content);
				}
			});		
			
		return this;
	};
	
	const append = function(){
		const append = Prototype.appendChild.bind(this);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof Node)
				this.appendChild(arg);
			else if(typeof arg === "string")
				create(arg).forEach(append);
			else if(typeof arg.forEach === "function")
				arg.forEach(append);
		}
	};	
	Prototype.append = append;
	
	const prepend = function(aFirstElement, aElement){
		this.insertBefore(aElement, aFirstElement);
	};
	Prototype.prepend = function(){
		if(this.childNodes.length == 0)
			append.apply(this, arguments);
		else {
			const first = this.childNodes.first();
			const insert = prepend.bind(this, first);
			for(let i = 0; i < arguments.length; i++){
				const arg = arguments[i];
				if(arg instanceof Node)
					insert(arg);
				else if(typeof arg === "string")
					arg.forEach(insert);
				else if(typeof arg.forEach === "function")
					arg.forEach(insert);
			}
		}
	};
	
	Prototype.replace = function(){
		if(arguments.length < 1)
			throw new Error("Insufficient arguments! One or two nodes required!");
		
		const parent = arguments.length == 1 ? this.parentNode : this;
		const oldNode = arguments.length == 1 ? this : arguments[0];
		const newNode = arguments.length == 1 ? arguments[0] : arguments[1];
		
		if(newNode instanceof Array || newNode instanceof NodeList || newNode instanceof HTMLCollection){
			newNode.forEach(aItem => parent.insertBefore(aItem, oldNode));
			oldNode.remove();
		}
		else
			parent.replaceChild(newNode,oldNode);
	};
	
	Prototype.after = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const next = this.nextSibling;
		if(next)
			Prototype.before.apply(next, arguments);
		else
			Prototype.append.apply(parent, arguments);
	};	
	
	Prototype.before = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const inserter = (node) => {parent.insertBefore(node, this);}
		for(let i = 0; i < arguments.length; i++){
			const arg = arguments[i];
			if(arg instanceof Node)
				inserter(arg);
			else if(typeof arg === "string")
				arg.forEach(inserter);
			else if(typeof arg.forEach === "function")
				arg.forEach(inserter);
		}
	};	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const parentSelector = /:parent(\(\"([^\)]*)\"\))?/i;
const queryExecuter = function(aElement, aSelector){
	let match = parentSelector.exec(aSelector);
	if(match){
		let result = aElement;
		if(match.index > 0){
			result = aElement.querySelectorAll(aSelector.substr(0, match.index));
			if(result.length == 0)
				return;
		}	
		result = result.parent(match[2]);			
		if(result){
			let nextSelector = aSelector.substr(match.index + match[0].length).trim();
			if(nextSelector.length > 0)
				result = result.find(nextSelector);
			
			return result;
		}		
	}
	else
		return aElement.querySelectorAll(aSelector);
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("QuerySupport", Prototype => {	
	Prototype.find = function() {
		let nodes = [];
		let args = Array.from(arguments);
		let arg = args.shift();
		while(arg){
			if(typeof arg === "string"){
				let result = queryExecuter(this, arg);
				if(result)
					nodes.push(result);
			}
			
			arg = args.shift();
		}
		
		let result = NodeList.from.apply(null, nodes);
		return result;
	};
	
	Prototype.is = function() {
		if(this instanceof Document || this instanceof DocumentFragment)
			return false;		
		else if(arguments.length == 1){
			if(typeof arguments[0] === "string")
				return this.matches(arguments[0]);
			else if(typeof arguments[0].length === "number"){
				let filter = arguments[0];
				for(let i = 0; i < filter.length; i++)
					if(this.matches(filter[i]))
						return true;
			}				
		}
		else if(arguments.length > 1)
			return this.is(Array.from(arguments));
		
		return false;
	};	
	
	Prototype.parent = function() {
		if(!this.parentNode)
			return undefined;		
		else if(typeof arguments[0] === "string"){
			let parent = this.parentNode;
			try{
				while(parent && !parent.is(arguments[0]))
					parent = parent.parent(arguments[0]);
			}catch (e) {
				console.error("this:", this, "parent:", parent, "error:", e);
			}
			return parent;
		}
		return this.parentNode;
	};
	
	Prototype.parents = function() {		
		let result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while(parent){
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}
		
		return NodeList.from(result);
	};	

	Prototype.selector = function(){
		if(this instanceof Document || this instanceof DocumentFragment)
			return undefined;
		else if(this.id)
			return "#" + this.id;
		else{			
			let selector = this.tagName.toLowerCase();
			let parent = this.parent();
			if(parent){
				let sameTagSiblings = parent.find(":scope>" + selector);			
				if (sameTagSiblings instanceof NodeList) {
					let index = sameTagSiblings.indexOf(this);
					if (index > 0)
						selector += ':nth-child(' + (index + 1) + ')';
				}		
				let parentSelector = parent.selector();
				return parentSelector ? parentSelector + ">" + selector : selector;
			} 
			return selector;
		}
	};	

	Prototype.closest = function(aQuery) {			
		let node = this;
		while(node){
			let closests = node.find(aQuery);
			if(closests && closests.length > 0)
				return closests;
			else if(node.is(aQuery))
				return NodeList.from(node);
			
			node = node.parent();		
		}
	};
	
	Prototype.nested = function(aQuery){
		if(this.is(aQuery))
			return NodeList.from(this);	
		
		let nested = this.find(aQuery);
		if(nested && nested.length > 0)
			return nested;
		else
			return NodeList.from(this.parent(aQuery));
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);



/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ReadyEventSupport", Prototype => {
	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const HIDEVALUE = "none";

const isHidden = (element) => {
	return element.style.display === HIDEVALUE
};

const init = (element) => {	
	let display = !isHidden(element) ? element.style.display : "";
	
	element.show = (function(){
		this.style.display = display;
		return this;		
	}).bind(element);
	
	element.hide = (function(){
		this.style.display = HIDEVALUE;
		return this;		
	}).bind(element);
	
	return element;
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ShowHideSupport", Prototype => {
	Prototype.show = function() {
		return init(this).show.apply(null, arguments)
	};

	Prototype.hide = function() {
		return init(this).hide.apply(null, arguments)
	};

	Prototype.toggleShow = function() {
		return isHidden(this) ? this.show() : this.hide();
	};

});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const InputTypes = [
	{
		selector : "select",
		get : function(){
			const result = [];
			this.find("option").forEach(option => {
				if(option.selected)
					result.push(option.value);
			});			
			return result;
		},
		set : function(){				
			let values = [];
			const args = Array.from(arguments);
			let arg = args.shift();
			while(arg){
				if(Array.isArray(arg))
					values = values.concat(arg);
				else
					values.push(arg);
				
				arg = args.shift();
			}
			this.value = values;
			this.find("option").forEach(option => option.selected = values.indexOf(option.value) >= 0);			
			this.trigger("changed");
		}			
	},
	{
		selector : "input[type=\"checkbox\"], input[type=\"radio\"]",
		get : function(){
			if(this.value == "on" || this.value == "off")
				return this.checked;
			else if(this.checked)
				return this.value;				
		},
		set : function(aValue){
			if(typeof aValue === "boolean")
				this.checked = aValue;
			else if(typeof aValue === "string")
				this.checked = this.value == aValue;
			else if(Array.isArray(aValue))
				this.checked = aValue.indexOf(this.value) >= 0;
			
			this.trigger("changed");
		}
	}
];

const DefaultInputType = {
		get : function(){
			return this.value;
		},
		set : function(aValue){
			this.value = aValue;
			this.trigger("input");
		}	
};

const getInputType = function(aElement){
	for(let i = 0; i < InputTypes.length; i++)
		if(aElement.is(InputTypes[i].selector))
			return InputTypes[i];		
	return DefaultInputType;
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ValueSupport", Prototype => {	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0)
			return type.get.apply(this, arguments);
		else
			type.set.apply(this, arguments);
			
		return this;
	};	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/index.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_EventTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/EventTarget */ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js");
/* harmony import */ var _dom_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Node */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js");
/* harmony import */ var _dom_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/Element */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js");
/* harmony import */ var _dom_Document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/Document */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js");
/* harmony import */ var _dom_DocumentFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/DocumentFragment */ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js");
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/HTMLElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js");
/* harmony import */ var _dom_HTMLInputElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/HTMLInputElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js");
/* harmony import */ var _dom_HTMLTextAreaElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/HTMLTextAreaElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js");
/* harmony import */ var _dom_HTMLSelectElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/HTMLSelectElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js");
/* harmony import */ var _dom_NodeList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/NodeList */ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js");
/* harmony import */ var _dom_HtmlCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/HtmlCollection */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Global */ "./node_modules/@default-js/defaultjs-extdom/src/Global.js");














/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DelegaterBuilder = function() {
	const args = Array.from(arguments);
	const callback = args.shift();
	const source = args.shift();
	args.forEach( target =>{
		Object.getOwnPropertyNames(target)
		.forEach(name => {
			const prop = Object.getOwnPropertyDescriptor(target, name);
			if (typeof source[name] === "undefined" && typeof prop.value === "function")
				source[name] = function(){
					return callback.call(this, name, arguments);
				};										
		});
	});
	
};
/* harmony default export */ __webpack_exports__["default"] = (DelegaterBuilder);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const extendPrototype = function(){
	const args = Array.from(arguments);
	const type = args.shift();	
	while(args.length > 0){
		const extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ __webpack_exports__["default"] = (extendPrototype);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__["default"].globalVar("___DOM_API_EXTENSION_MAP___", {});
const Extender = function(aName, aExtention){
	return function(aType){	
		let extensions = EXTENSIONS_MAP[aType.name];
		if(!extensions)
			extensions = EXTENSIONS_MAP[aType.name] = {};		
		
		if(!extensions[aName]){
			extensions[aName] = true;
			aExtention(aType.prototype);
		}
		else
			console.warn("duplicated load of extension \"" + aName + "\"!");
	}
};

/* harmony default export */ __webpack_exports__["default"] = (Extender);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {const Utils = {
	global : (() => {
		if(typeof window !== "undefined") return window;
		if(typeof global !== "undefined") return global;
		if(typeof self !== "undefined") return self;
		return {};		
	})(),
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof Utils.global[aName] === "undefined")
			Utils.global[aName] = aInitValue;
		
		return Utils.global[aName];		
	}
};

/* harmony default export */ __webpack_exports__["default"] = (Utils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/Component.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/Component.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_extdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-extdom */ "./node_modules/@default-js/defaultjs-extdom/index.js");
/* harmony import */ var _utils_EventHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js");
/* harmony import */ var _utils_WeakData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/WeakData */ "./node_modules/@default-js/defaultjs-html-components/src/utils/WeakData.js");
/* harmony import */ var _Ready__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ready */ "./node_modules/@default-js/defaultjs-html-components/src/Ready.js");






const TIMEOUTS = new _utils_WeakData__WEBPACK_IMPORTED_MODULE_3__["default"]();
const init = (component) => {
	const data = TIMEOUTS.data(component);
	if (data.initialize) clearTimeout(data.initialize);

	data.initialize = setTimeout(async () => {
		delete data.initialize;

		Promise.resolve(component.init()).then(() => {
			component.ready.resolve();
			component.trigger(Object(_utils_EventHelper__WEBPACK_IMPORTED_MODULE_2__["componentEventname"])("initialzed", component));
		});
	}, _Constants__WEBPACK_IMPORTED_MODULE_0__["initTimeout"]);
};

class Component extends HTMLElement {
	constructor() {
		super();
		this.ready = Object(_Ready__WEBPACK_IMPORTED_MODULE_4__["default"])();
	}

	async init() {}

	connectedCallback() {
		if(this.ownerDocument == document)
			init(this);
	}

	adoptedCallback() {
		this.connectedCallback();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue != newValue && this.isConnected) {
			this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__["triggerTimeout"], Object(_utils_EventHelper__WEBPACK_IMPORTED_MODULE_2__["attributeChangeEventname"])(name, this));
			this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__["triggerTimeout"], Object(_utils_EventHelper__WEBPACK_IMPORTED_MODULE_2__["componentEventname"])("change", this));
		}
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Component);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/Constants.js ***!
  \*****************************************************************************/
/*! exports provided: componentPrefix, attributeChangeEventPrefix, initTimeout, triggerTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentPrefix", function() { return componentPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeChangeEventPrefix", function() { return attributeChangeEventPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTimeout", function() { return initTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerTimeout", function() { return triggerTimeout; });
const componentPrefix = "d-";
const attributeChangeEventPrefix = "attribute-";
const initTimeout = 100;
const triggerTimeout = 100;


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/Ready.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/Ready.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
	let resolve , reject = null;
	const result = new Promise((r, e) => {
		resolve = r;
		reject = e;
	});

	result.resolve = resolve;
	result.reject = reject;

	return result;
});


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js ***!
  \***********************************************************************************************/
/*! exports provided: toNodeName, define, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNodeName", function() { return toNodeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "define", function() { return define; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js");


const toNodeName = (name, prefix) => {
	if(typeof prefix === "string")
		return prefix + name;
		
	return _Constants__WEBPACK_IMPORTED_MODULE_0__["componentPrefix"] + name;
};

const define = function(clazz, options) {
	const nodename = clazz.NODENAME;
	if (!customElements.get(nodename)) {
		customElements.define(nodename, clazz, options);
	}
};


/* harmony default export */ __webpack_exports__["default"] = (define); 


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js ***!
  \*************************************************************************************/
/*! exports provided: componentEventname, attributeChangeEventname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentEventname", function() { return componentEventname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeChangeEventname", function() { return attributeChangeEventname; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js");


const componentEventname = (eventType, node ) => {	
	let nodename = "unsupported";
	if(typeof node === "string")
		nodename = node;
	else if(node instanceof HTMLElement)
		nodename = node.nodeName;
	else if(typeof node.NODENAME === "string")
		nodename = node.NODENAME;
	else throw new Error(typeof node + " is not supported as pram node!");
	
   return nodename.toLowerCase() + "-" + eventType;
};


const attributeChangeEventname = (attribute, node ) => {
    return componentEventname(_Constants__WEBPACK_IMPORTED_MODULE_0__["attributeChangeEventPrefix"] + "-" + attribute, node);
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/NodeHelper.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/NodeHelper.js ***!
  \************************************************************************************/
/*! exports provided: findParent, findClosestInDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParent", function() { return findParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findClosestInDepth", function() { return findClosestInDepth; });
const findParent = (node, check) => {
	while(node != null) {		
        if(check(node))
            return node;

        node = node.parent();			
    }
    
    return null;
};

const findClosest = (node, depth, check) => {
    if(check(node))
        return {node, depth}

    let result = null;
    for(let child of node.childNodes){
        const item = findClosest(child, depth + 1, check);

        if(item != null && (result == null || result.depth > item.depth))            
            result = item;
    }

    return result;
}

const findClosestInDepth = (node, check) => {
    const closest = findClosest(node, 0, check);
    return closest != null ? closest.node : null;
}

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/TemplateHelper.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/TemplateHelper.js ***!
  \****************************************************************************************/
/*! exports provided: ATTR_TEMPLATE, loadTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_TEMPLATE", function() { return ATTR_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTemplate", function() { return loadTemplate; });
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");

const ATTR_TEMPLATE = "template";

const getTemplate = (node) => {
	let template = node.find(":scope > template").first();
	if (!!template) return template;
	const value = node.attr(ATTR_TEMPLATE);
	if (!value) return null;
	try {
		template = find(value).first();
		if (!!template) return template;
	} catch (e) {}
	return new URL(value, location.href);
};

const loadTemplate = async (node, defaultTemplate, cache, alias) => {
	const template = getTemplate(node);
	if(template)
		return _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_0__["Template"].load(template, cache, alias);

	return defaultTemplate;
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/WeakData.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/WeakData.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeakData; });
class WeakData {
	constructor() {
		this.weakmap = new WeakMap();
	}

	data(reference) {
		let data = this.weakmap.get(reference);
		if (!data) {
			data = {};
			this.weakmap.set(reference, data);
		}
		return data;
	}

	value(reference, key, value) {
		if (arguments.length == 2) return this.data(reference)[key];
		else this.data(reference)[key] = value;
	}
};



/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/index.js ***!
  \***********************************************************************/
/*! exports provided: Template, Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Template.js */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _src_Template_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Renderer.js */ "./node_modules/@default-js/defaultjs-template-language/src/Renderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!String.prototype.hashcode)
	String.prototype.hashcode = function() {
		if (this.length === 0)
			return 0;
		
		let hash = 0;
		const length = this.length;
		for (let i = 0; i < length; i++) {
			const c = this.charCodeAt(i);
			hash = ((hash << 5) - hash) + c;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Context.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Context.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Context; });
/* harmony import */ var _Wait_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wait.js */ "./node_modules/@default-js/defaultjs-template-language/src/Wait.js");


const CLOSE_TIMEOUT = 2000;
class Context {
	constructor({ resolver, renderer, template, container, root, mode = "replace", target = null, parent = null }) {
		if (!resolver) throw new Error("Parameter \"resolver\" is required!");
		if (!renderer) throw new Error("Parameter \"renderer\" is required!");
		if (!template) throw new Error("Parameter \"template\" is required!");
		if (!container) throw new Error("Parameter \"container\" is required!");
		if (!root) throw new Error("Parameter \"root\" is required!");

		this.readyHandles = [];
		this.content = null;
		this.template = template;
		this.container = container;
		this.resolver = resolver;
		this.mode = mode;
		this.renderer = renderer;
		this.root = root;
		this.target = target;
		this.parent = parent;
		this.closed = false;
		this.wait = Object(_Wait_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this);


		/* execution flags */
		this.stop = false;
		this.ignore = false;
	}

	async finish(callback) {
		if (this.closed)
			return; //context is ready and closed

		if (this.parent)
			this.parent.finish(callback);
		else
			this.ready(callback);
	};

	async ready(callback) {
		if (this.closed)
			return; //context is ready and closed

		if (callback) {
			if (callback instanceof Array)
				callback.forEach((callback) => { this.ready = callback; });
			else if (callback instanceof Promise || typeof callback === "function")
				this.readyHandles.push(callback);
		} else {
			this.closed = true;
			//wait of all sub context to be closed with an maximum amount of time

			if (this.readyHandles.length > 0) {
				try {
					await Promise.race([
						Promise.all(this.readyHandles.map(handle => handle instanceof Promise ? handle : handle(this))),
						new Promise((reject, error) => {
							setTimeout(() => {
								error(new Error("timeout"));
							}, 2000)
						})
					]);
				} catch (e) {
					console.error(e);			
					throw e
				}
			}

			this.wait.finished();
		}
	}

	subContext({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target } = {}) {
		const sub = new Context({ resolver, renderer, template, container, mode, root, target, parent: this });
		//this.ready(sub.wait);
		return sub;
	}

	clone({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: this });
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Directive.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Directive; });
const DEFINED_DIRECTIVES = [];

const defineDirective = ({ directive }) => {
	if (!(directive instanceof Directive))
		throw new Error("Implementation dosn't extend Directive class!");

	if (directive.rank < Directive.MIN_RANK)
		throw new Error("The rank of a directive can't be lower as " + Directive.MIN_RANK + "!");

	if (directive.rank > Directive.MAX_RANK)
		throw new Error("The rank of a directive can't be grater as " + Directive.MAX_RANK + "!");

	DEFINED_DIRECTIVES.push(directive);
	DEFINED_DIRECTIVES.sort((a, b) => {
		const phase = a.phase - b.phase;
		if(phase == 0)
			return a.rank - b.rank;
			
		return phase;
	});
};

const PHASE = {
	init: 0,
	data: 1,
	template: 2,
	content: 3,
	finish: 4
};

class Directive {

	static get PHASE() { return PHASE };
	static get MIN_RANK() { return 0 };
	static get MAX_RANK() { return 100000 };

	constructor() { };

	get name() { }
	get rank() { }
	get phase() {return PHASE.finish}

	/**
	 * need to be implemented
	 * 
	 * return DirectiveResult
	 */
	async execute(context) {
		return context;
	}


	static define(option) {
		defineDirective(option);
	}

	static get directives() {
		return DEFINED_DIRECTIVES;
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Element.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Element.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DirectiveElement; });
class DirectiveElement extends HTMLElement{
	constructor(){
		super();
		this.hidden = true;
	}
	
	/**
	 * need to be implemented
	 * 
	 */
	async execute({template, context}){
		context.content = template.cloneNode(true);
		return context;
	};	
}

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Renderer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Renderer.js ***!
  \******************************************************************************/
/*! exports provided: SCOPES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCOPES", function() { return SCOPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _default_js_defaultjs_extdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-extdom */ "./node_modules/@default-js/defaultjs-extdom/index.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template.js */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context.js */ "./node_modules/@default-js/defaultjs-template-language/src/Context.js");
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Element.js */ "./node_modules/@default-js/defaultjs-template-language/src/Element.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives */ "./node_modules/@default-js/defaultjs-template-language/src/directives/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements */ "./node_modules/@default-js/defaultjs-template-language/src/elements/index.js");










const SCOPES = {
	application: "application",
	data: "data",
	render: "render",
	container: "container",
	node: "node",
	directive: "directive"
};

const APPLICATION_SCOPE_RESOLVER = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.application });

const MODEWORKER = {
	"replace": async ({ container, target = null, content }) => {
		if (target) {
			target.replace(content);
		} else {
			container.empty();
			container.append(content);
		}
	},
	"append": async ({ container, target = null, content }) => {
		if (target)
			target.after(content);
		else
			container.append(content);
	},
	"prepend": async ({ container, target = null, content }) => {
		if (target)
			target.before(content);
		else
			container.prepend(content);
	}
};

const loadTemplateContent = async (template, context, renderer) => {
	if (template) {
		template = await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template)
		return template.importContent();
	} else if (context)
		return context.template;
	else if (renderer.template) {
		return await renderer.template.importContent();
	}

	throw new Error("No content template specified!");
};

class Renderer {
	constructor({ template, data } = {}) {
		if (template && !(template instanceof _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"]))
			throw new Error("template must be an instance of Template!");

		this.template = template;
		this.resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.data, context: data ? data : {}, parent: APPLICATION_SCOPE_RESOLVER });
	}

	/**
	 * @param 
	 * 		container HTMLElement -> target to render in
	 * @param
	 * 		data Object|... -> data to used at rendering
	 * @param
	 * 		template Template|Node|NodeList|HTMLCollection|String -> template to render
	 * @param
	 * 		mode "append"|"insert"|"replace"
	 * @param
	 * 		target
	 */
	async render({ template = null, data = null, container, root, mode, target, context = null }) {
		template = await loadTemplateContent(template, context, this);
		let resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.render, context: data, parent: context ? context.resolver : this.resolver });

		let renderContext = context;
		if (!renderContext)
			renderContext = new _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"]({ resolver, renderer: this, template, container, root: root ? root : container, mode: mode ? mode : "replace", target });
		else
			renderContext = renderContext.clone({ resolver, template, container, root, mode, target });

		let result = null;
		if (template instanceof Node)
			result = await this.renderNode(renderContext);
		else
			result = await this.renderContainer(renderContext)

		if (result instanceof _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"])
			renderContext = result;


		if (renderContext.content && renderContext.mode) {
			const modeworker = MODEWORKER[renderContext.mode];
			if (!modeworker)
				throw new Error("The \"" + renderContext.mode + "\" is not supported!")

			await modeworker(renderContext);
		}

		if (!context)
			await renderContext.ready();
		else
			renderContext.ready();

		return context;
	}


	async renderContainer(context) {
		if (context.template && context.template.length > 0) {
			const renderings = context.template.map(node => {
				//separate node context from the current context
				const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.node, context: null, parent: context.resolver });
				return this.renderNode(context.clone({ template: node, resolver }))
			});
			const result = await Promise.all(renderings);
			if (!result)
				return context;

			context.content = result
				.filter(result => !!result)
				.reduce((content, result) => {
					const node = result.content;
					if (node instanceof Array)
						content = content.concat(node);
					if (node instanceof NodeList || node instanceof HTMLCollection)
						content = content.concat(Array.from(node));
					else if (node instanceof Node)
						content.push(node);

					result.ready();
					return content;
				}, []);

		}
		return context;
	}

	async renderNode(context) {
		try {
			context.template.normalize();
			if (context.template instanceof _Element_js__WEBPACK_IMPORTED_MODULE_5__["default"])
				await context.template.execute(context);
			else
				await this.executeDirectives(context);

			if (!context.ignore && context.content) {
				const content = context.template.childNodes;
				if (content && content.length > 0) {
					// @TODO await or fire and forget???
					await context.renderer.render({ context: context.clone({ template: content, container: context.content }) });
				}
			}

			if (context.content && context.content.tagName && context.content.tagName == "JSTL")
				context.content = context.content.childNodes; //special case to support the old "<jstl>" tag.
				
		} catch (e) {
			console.error("error at render node:", e, context);
		}
		return context;
	}

	async executeDirectives(context) {
		//console.log("scope chain:", context.renderer.chain, "resolver chain", context.renderer.resolver.fullname);
		const directives = _Directive_js__WEBPACK_IMPORTED_MODULE_4__["default"].directives;
		const length = directives.length;
		for (let i = 0; i < length && !context.stop; i++) {
			const directive = directives[i];
			try {
				const result = await directive.execute(context);
				if (result instanceof _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"])
					context = result;
			} catch (e) {
				console.error("error at directive:", e, directive, context);
			}
		}
		return context;
	}

	static async build({ template, data } = {}) {
		if (template && template instanceof Promise)
			template = await template;

		template = template ? await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template) : null;
		return new Renderer({ template, data });
	};

	static async render({ container, data, template, mode, target }) {
		const renderer = new Renderer({ template, data });
		return renderer.render({ container, mode, target });
	}
}

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Template.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Template.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Template; });
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/javascript/String.js */ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__);


const CACHE = {};
const getKey = (template, cache, alias) => {
	if(!cache)
		return null;
	
	let key = null;
	if(alias)
		key = alias;	
	else if(typeof template === "string")
		key = template;
	else if(template instanceof URL)
		key = template.toString();
	else if(template instanceof HTMLElement)
		key = template.selector();
	
	if(key)
		return key.hashcode();
	
	return null;
};

const fromURL = async (url, cache, key) => {
	const response = await fetch(url.toString());
	const source = await response.text();
	return fromSource(source, cache, key);
};

const fromSource = async (source, cache, key) => {
	return fromElement(create(source, true), cache, key);
};

const fromElement = async (element, cache, key) => {	
	let template = null
	if(element instanceof HTMLTemplateElement)			
		template = new Template(element);
	else {
		template = document.createElement("template");
		if(element instanceof Node || element instanceof NodeList || element instanceof HTMLCollection || element instanceof Array)
			template.append(element);
		else
			throw new Error("Template type is not supported!");			
		
		template = new Template(template, key);
	}
	
	if(!template)
		throw new Error("Template can't loaded!");
	
	if(cache && key)
		CACHE[key] = template;
	
	return template;
};

class Template {	
	constructor(template, key){		
		this.template = template;
		this.key = key;	
	}
	
	importContent(doc=document){
		let imported = doc.importNode(this.template, true);
		return imported.content.childNodes;
	}
	
	remove() {
		if(this.key && CACHE[this.key])
			delete CACHE[this.key];		
	};
	
	static async load(template, cache = true, alias = null){
		if(template instanceof Template)
			return template;
		
		const key = getKey(template, cache, alias);
		if(key && CACHE[key])
			return CACHE[key];
		else if(typeof template === "string"){
			return fromSource(template, cache, key);
		}else if(template instanceof URL)
			return await fromURL(template, cache, key);
		else if(template instanceof Node || template instanceof NodeList || template instanceof HTMLCollection || template instanceof HTMLTemplateElement)
			return fromElement(template, cache, key);
		
		new Error("The template isn't a allowed type! -> [String|URL|Node|NodeList|HTMLCollection|Template] required!");
	}	
};


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Wait.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Wait.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((object) => {
	let finished = null;
	const wait =  new Promise((resolve) => {
		finished = resolve;
	});
	wait.object = object;
	
	wait.finished = async () => {
		await finished();
	};
	
	return wait;
});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Attributes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Attributes.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


const ATTRIBUTE_NAME = /(jstl)?(\?)?(@)?([^\?@]+)/i;

const bindAttribute = async ({ condition, name, value, context }) => {
	const { resolver, content, template } = context;
		
	let attribute = !condition ? value : template.attr(name);
	condition = condition ? value : template.attr("?" + name);
	const hasValue = isValue(attribute);
	
	if (condition && hasValue) {
		condition = await resolver.resolve(condition, false);
		if (condition === true)
			content.attr(name, await resolver.resolveText(attribute, attribute));
	} else if (condition) {
		condition = await resolver.resolve(condition, false);
		if (condition === true)
			content.attr(name, true);
	} else if (hasValue) {
		content.attr(name, await resolver.resolveText(attribute, attribute));
	}
};

const isValue = (value) => {
	return value != null && typeof value !== "undefined";	
};

const bindEvent = async ({ condition, name, value, context }) => {
	const { resolver, template } = context;
	
	condition = condition ? value : template.attr("?@" + name);
	let handle = !condition ? value : template.attr("@"+ name);
	let split = name.split(":");
	const event = split.shift();
	const type = split.shift() || "default";
	

	if (condition && handle){
		if(await resolver.resolve(condition, false) == true)
			await binding({event, type, handle, context });
	}
	else if (handle)
		await binding({event, type, handle, context });
};

const binding = async ({event, type, handle, context }) => {
	const { resolver, content} = context;
		
	if(type == "delegate"){
		const eventhandle = await resolver.resolveText(handle, handle);
		content.on(event, delegater(eventhandle));
	} else {		
		const eventhandle = await resolver.resolve(handle, handle);
	
		if(!eventhandle)
			console.error(new Error("Can't resolve \"" + handle + "\" to event handle!"))
		else if(typeof eventhandle === "function")
			content.on(event, eventhandle);
		else if(typeof eventhandle === "string")
			content.on(event, delegater(eventhandle));
		else if(typeof eventhandle === "object"){	
			const {capture=false, passive=false, once=false} = handle;		
			content.on(event, eventhandle.eventHandle, {capture, passive, once});
		}
	}
};

const delegater = function(delegate) {
	return function(event) {
		event.preventDefault();
		event.stopPropagation();
		if(event.currentTarget)	
			event.currentTarget.trigger(delegate, event);
		else
			event.target.trigger(delegate, event);
	};
};


class Attribute extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "attribute" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content }


	async execute(context) {
		const { template } = context;
		if (!(template instanceof HTMLElement))
			return context;

		const processed = new Set();
		for (const attribute of template.attributes) {
			const [, jstl, condition, event, name] = ATTRIBUTE_NAME.exec(attribute.name);
			if (!jstl && !processed.has(name)) {
				const value = attribute.value;
								
				if (event)
					await bindEvent({ condition, event, name, value, context })
				else
					await bindAttribute({ condition, name, value, context })
			}
			processed.add(name);
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Attribute() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Choose.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Choose.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


class Choose extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "choose" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template }

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.hasAttribute("jstl-choose") || context.template.children.length == 0)
			return context;

		const { template, resolver } = context;
		let resolved = false;
		const whens = template.find(":scope > [jstl-when]");
		const length = whens.length;
		for (let i = 0; i < length; i++) {
			const node = whens[i];
			if (!resolved && (await resolver.resolve(node.attr("jstl-when"), false)))
				resolved = true;
			else
				node.remove();
		}

		if (resolved)
			template.find(":scope > [jstl-otherwise]").remove();

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Choose() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Data.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Data.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const MODES = {
	"remote": async ({ data, context }) => {		
		const {resolver, template} = context;
		data = await resolver.resolveText(data);
		data = new URL(data, location.origin);
		let option = await resolver.resolveText(template.attr("jstl-data-option") || "{}");
		option = JSON.parse(option);

		data = await fetch(data.toString(), option);
		return data.json();
	},
	"direct": async ({ data, context }) => {
		const {resolver} = context;
		
		data = await resolver.resolveText(data);
		return data;
	}
};

const updateContext = ({ varname, data, scope, context }) => {
	if (varname)
		context.resolver.updateData(varname, data, scope);
	else if (scope)
		context.resolver.mergeContext(data, scope);
	else
		context.resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-data", parent: context.resolver });
	
		
	return context;
};



class Data extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "data" }
	get rank() { return 1000 }
	get phase(){return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.data}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.attr("jstl-data"))
			return context;
			
		try {
			const { template } = context;			
			const mode = MODES[(template.attr("jstl-data-mode") || "remote")];
			if (!mode)
				throw new Error("The jstl-data-mode is unsupported!");

			let data = template.attr("jstl-data");
			data = await mode({ data, context });

			const varname = template.attr("jstl-data-var");
			const scope = template.attr("jstl-data-scope");
			context = updateContext({ varname, data, scope, context });
		} catch (e) {
			console.error(e, context.template);
		}

		return context;

	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Data() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Foreach.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Foreach.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const ATTRIBUTE = {
	DATA: "jstl-foreach",
	VAR: "jstl-foreach-var",
	STATUS: "jstl-foreach-status",
	COUNT: "jstl-foreach-count",
	START: "jstl-foreach-start",
	STEP: "jstl-foreach-step",
	CONDITION: "jstl-foreach-condition"
};

const doCount = async (option) => {
	let { start, step, count, varname, status, resolver } = option;

	count = await resolver.resolve(count);
	const length = start + (count * step);
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
		iteration[varname] = i;
		iteration[status] = {
			index: i,
			number: i + 1,
			step,
			count
		};
		stop = !(await iterate(iteration, option));
	}
};

const doForeach = async (option) => {
	let { data, start, step, count, varname, status, resolver } = option;

	data = await resolver.resolve(data);
	let array = data;
	if (!(data instanceof Array))
		array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
		iteration[varname] = data[i];
		iteration[status] = {
			index: i,
			number: i + 1,
			count: length,
			data
		};
		stop = !(await iterate(iteration, option));
	}
};

const iterate = async (data, option) => {
	let { template, resolver, renderer, container, condition, context } = option;
	resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-foreach", parent: resolver });

	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition)
		return false;

	await renderer.render({ context: context.clone({ resolver, container, template, mode: "append" }) });
	return true;
};

class Foreach extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "foreach" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 2 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template }

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || (!context.template.attr(ATTRIBUTE.DATA) && !context.template.attr(ATTRIBUTE.COUNT)))
			return context;

		context.ignore = true;
		try {
			const { template, resolver, renderer, content } = context;
			const option = {
				data: (template.attr(ATTRIBUTE.DATA) || "").trim(),
				count: (template.attr(ATTRIBUTE.COUNT) || "").trim(),
				start: await resolver.resolve(template.attr(ATTRIBUTE.START) || "0"),
				step: await resolver.resolve(template.attr(ATTRIBUTE.STEP) || "1"),
				varname: (template.attr(ATTRIBUTE.VAR) || "item").trim(),
				status: (template.attr(ATTRIBUTE.STATUS) || "status").trim(),
				condition: template.attr(ATTRIBUTE.CONDITION),
				template: template.childNodes,
				resolver,
				renderer,
				container: content,
				context
			};
			if ((!option.data || option.data == "") && option.count)
				await doCount(option);
			else
				await doForeach(option);

		} catch (error) {
			console.error("error at jstl-foreach:", error);
		}
		return context;

	}
};

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Foreach() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/If.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/If.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


class If extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "if" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1000 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.init }

	async execute(context) {
		const { template } = context;
		if (!(template instanceof HTMLElement) || !template.attr("jstl-if"))
			return context;

		const expression = template.attr("jstl-if");
		const resolver = context.resolver;
		const result = await resolver.resolve(expression, false);
		if (!result) {
			context.content = null;
			context.stop = true;
			context.ignore = true;
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new If() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Include.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Include.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Template.js */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");



class Include extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {	
	constructor(){
		super();
	}
	
	get name() {return "include"}
	get rank() {return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK}
	get phase(){return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template}
		
	async execute(context){
		if(!(context.template instanceof HTMLElement) || !context.template.attr("jstl-include"))
			return context;
		try{
			const {template, resolver, renderer} = context;		
			let include = template.attr("jstl-include");
			include = await resolver.resolveText(include);
			include = new URL(include, location.origin);			
			include = await _Template_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(include);
			
			const mode = template.attr("jstl-include-mode") || "replace";
			await renderer.render({template:include, container: context.content, mode, context});
			context.ignore;
			
			return context;
		}catch(e){
			console.error(e, context.template);
			return context;
		}		
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({directive: new Include()});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Initial.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Initial.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _elements_Replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/Replace.js */ "./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js");




class Initial extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "initial" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.init }


	async execute(context) {
		const { template, renderer } = context;
		if (template instanceof Text)
			context.content = document.importNode(template, true);

		else if (template.attr("jstl-async")) {
			context.content = new _elements_Replace_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
			template.attr("jstl-async", null);
			setTimeout(async () => {
				await renderer.render({ mode: "replace", target: context.content, context });
			}, parseInt(template.attr("jstl-async") || "250") || 250);
			context.stop = true;
			context.ignore = true;
		} else if (template.attr("jstl-ignore")) {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		} else if (template instanceof HTMLTemplateElement) {
			context.content = document.createElement(template.tagName);
			const subcontext = context.subContext({
				template: template.content.childNodes,
				container: context.content.content
			});
			renderer.render({ context: subcontext });
			context.stop = true;
			context.ignore = true;
		} else if (template.tagName)
			context.content = document.createElement(template.tagName);
		else {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Initial() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Text.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Text.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


const DEFAULT_OPTION = {
	mode: "text",
	unsecure: false,
	preventFormat : false,
	maxLength: 0	
};

const SECURE_HTML_FILTER = "script, style, body, html, head, object, link";

const readOption = async (parent, context) => {
	const resolver = context.resolver;
	return {
		mode: await resolver.resolveText((parent.attr("jstl-text-content-type") || "text").trim().toLowerCase()),
		unsecure: parent.hasAttribute("jstl-text-unsecure"),
		preventFormat: !!parent.attr("jstl-text-prevent-format") || false,
		maxLength: parseInt(await resolver.resolveText(parent.attr("jstl-text-trim-length") || "0"))
	};
};

const trimTextLength = (text, length) => {
	return text.length > length ? text.substring(0, length - 3).trim() + "..." : text;
};

const MODES = {
	"text" : async (option, context) => {
		const {content, resolver, template} = context;
		
		let text = await resolver.resolveText(template.textContent);		
		text = create(text,true).content.textContent;
		if(option.maxLength > 0)
			text = trimTextLength(text, option.maxLength);		
		
		content.textContent = text;		
	},
	"html": async (option, context) => {
		const {resolver, template} = context;
		
		let content = await resolver.resolveText(template.textContent);		
		content = create(content,true);		
		content = document.importNode(content.content, true);
		
		if(option.unsecure)
			context.content = content;			
		else{
			content.find(SECURE_HTML_FILTER).remove();			
			context.content = content;
		}
	}
};


class TextContent extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "text" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content }



	async execute(context) {
		const { template } = context;
		if (!(template instanceof Text) || template.textContent.trim().length == 0 || (template.parentElement && template.parentElement.hasAttribute("jstl-text-ignore")))
			return context;

		const parent = template.parentElement;
		const option = parent ? await readOption(parent, context) : DEFAULT_OPTION;
		
		const  mode = MODES[option.mode];
		if(!mode)
			throw new Error("Text mode \""+ option.mode + "\" is unsupported!");
		
		await mode(option, context);
		
		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new TextContent() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/index.js ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initial.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Initial.js");
/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Data.js");
/* harmony import */ var _If_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./If.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/If.js");
/* harmony import */ var _Choose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Choose.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Choose.js");
/* harmony import */ var _Include_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Include.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Include.js");
/* harmony import */ var _Foreach_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Foreach.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Foreach.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Text.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Text.js");
/* harmony import */ var _Attributes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Attributes.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Attributes.js");









/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReplaceElement; });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element.js */ "./node_modules/@default-js/defaultjs-template-language/src/Element.js");


class ReplaceElement extends _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
	constructor(){
		super();
		
		this.attachShadow({mode: 'open'});
	}
	async execute({template, context}){
		return context;
	};		
}
try{customElements.define("jstl-replace", ReplaceElement);}catch(e){}//ignore

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/elements/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/elements/index.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replace.js */ "./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js");


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Application.js":
/*!****************************!*\
  !*** ./src/Application.js ***!
  \****************************/
/*! exports provided: EVENT_STORE_CHANGED, ATTR_ROUTE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_STORE_CHANGED", function() { return EVENT_STORE_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_ROUTE", function() { return ATTR_ROUTE; });
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_NodeHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/NodeHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/NodeHelper.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_EventHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js");
/* harmony import */ var _Route_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Route/Events */ "./src/Route/Events.js");
/* harmony import */ var _RouteLink_Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RouteLink/Events */ "./src/RouteLink/Events.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Route */ "./src/Route/index.js");
/* harmony import */ var _RouteLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RouteLink */ "./src/RouteLink/index.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./View */ "./src/View/index.js");











const NODENAME = Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__["toNodeName"])("application");
const EVENT_STORE_CHANGED = "app-store-changed";
const ATTR_ROUTE = "route";

const findRoute = (app, name) => {
	const selector = `${_Route__WEBPACK_IMPORTED_MODULE_7__["default"].NODENAME}[name="${name}"]`;
	return app.find(selector).first();
};

const buildRouteContext = async (context, app) => {
	try {
		return _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_6__["default"].resolve(context, app.store, null);
	} catch (e) {
		return null;
	}
};

const ATTRIBUTES = [ATTR_ROUTE]

class Application extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
		
	static get observedAttributes() {
		return ATTRIBUTES;
	}
	
	static get NODENAME() {
		return NODENAME;
	}

	constructor() {
		super();

		this.ready.then(() => {
			this.root.on([_Route_Events__WEBPACK_IMPORTED_MODULE_4__["EVENT_CLICK"], _RouteLink_Events__WEBPACK_IMPORTED_MODULE_5__["EVENT_TO_ROUTE"]], async (event) => {
				this.route({ route: event.target });
			});
			
			this.on(Object(_default_js_defaultjs_html_components_src_utils_EventHelper__WEBPACK_IMPORTED_MODULE_3__["attributeChangeEventname"])(ATTR_ROUTE, this), () => {
				if(this.hasAttribute(ATTR_ROUTE))
					this.route({ route: this.attr(ATTR_ROUTE) });
			});
			
			if(this.hasAttribute(ATTR_ROUTE))
				this.route({ route: this.attr(ATTR_ROUTE) });
		});
		
	}
	
	async init() {
		
	}

	get root() {
		return this;
	}

	async routes() {
		return this.root.find(_Route__WEBPACK_IMPORTED_MODULE_7__["default"].NODENAME);
	}

	async route({ route, refresh = null, context = null }) {
		if (arguments.length == 0) return this.__route__;

		if (typeof route === "string") route = findRoute(this, route);
		if (route instanceof _RouteLink__WEBPACK_IMPORTED_MODULE_8__["default"]) {
			refresh = refresh != null ? refresh : route.refresh;
			if (context == null) context = await buildRouteContext(route.context, this);
			route = findRoute(this, route.target);
		}
		if (!(route instanceof _Route__WEBPACK_IMPORTED_MODULE_7__["default"])) throw new Error("Unsupported route type!");

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
			this.__view__ = Object(_default_js_defaultjs_html_components_src_utils_NodeHelper__WEBPACK_IMPORTED_MODULE_2__["findClosestInDepth"])(this.root, (node) => {
				return node instanceof _View__WEBPACK_IMPORTED_MODULE_9__["default"];
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

Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__["define"])(Application);
/* harmony default export */ __webpack_exports__["default"] = (Application);


/***/ }),

/***/ "./src/Route/Attributes.js":
/*!*********************************!*\
  !*** ./src/Route/Attributes.js ***!
  \*********************************/
/*! exports provided: ATTR_NAME, ATTR_ACTIVE, ATTR_STATEFUL, ATTR_COMPONENT_TAG, ATTR_COMPONENT_TAG_ATTRIBUTES, ATTR_CONTEXT, ATTR_REFRESH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_NAME", function() { return ATTR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_ACTIVE", function() { return ATTR_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_STATEFUL", function() { return ATTR_STATEFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_COMPONENT_TAG", function() { return ATTR_COMPONENT_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_COMPONENT_TAG_ATTRIBUTES", function() { return ATTR_COMPONENT_TAG_ATTRIBUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_CONTEXT", function() { return ATTR_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_REFRESH", function() { return ATTR_REFRESH; });
const ATTR_NAME = "name";
const ATTR_ACTIVE = "active";
const ATTR_STATEFUL = "stateful";
const ATTR_COMPONENT_TAG = "component-tag";
const ATTR_COMPONENT_TAG_ATTRIBUTES = "component-tag-attributes";
const ATTR_CONTEXT = "context";
const ATTR_REFRESH = "refresh";

/***/ }),

/***/ "./src/Route/Events.js":
/*!*****************************!*\
  !*** ./src/Route/Events.js ***!
  \*****************************/
/*! exports provided: EVENT_CLICK, EVENT_ACTIVATE, EVENT_DEACTIVATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_CLICK", function() { return EVENT_CLICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_ACTIVATE", function() { return EVENT_ACTIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_DEACTIVATE", function() { return EVENT_DEACTIVATE; });
/* harmony import */ var _Nodename__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nodename */ "./src/Route/Nodename.js");

const EVENT_CLICK = _Nodename__WEBPACK_IMPORTED_MODULE_0__["default"] + "-click";
const EVENT_ACTIVATE = _Nodename__WEBPACK_IMPORTED_MODULE_0__["default"] + "-activate";
const EVENT_DEACTIVATE = _Nodename__WEBPACK_IMPORTED_MODULE_0__["default"] + "-deactivate";

/***/ }),

/***/ "./src/Route/Nodename.js":
/*!*******************************!*\
  !*** ./src/Route/Nodename.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__["toNodeName"])("route"));

/***/ }),

/***/ "./src/Route/index.js":
/*!****************************!*\
  !*** ./src/Route/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_TemplateHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/TemplateHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/TemplateHelper.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _Nodename__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nodename */ "./src/Route/Nodename.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Events */ "./src/Route/Events.js");
/* harmony import */ var _Attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Attributes */ "./src/Route/Attributes.js");








const ATTRIBUTES = [_Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_NAME"], _default_js_defaultjs_html_components_src_utils_TemplateHelper__WEBPACK_IMPORTED_MODULE_2__["ATTR_TEMPLATE"], _Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_COMPONENT_TAG"], _Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_COMPONENT_TAG_ATTRIBUTES"], _Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_STATEFUL"]];
const EVENTS = [_Events__WEBPACK_IMPORTED_MODULE_5__["EVENT_CLICK"], _Events__WEBPACK_IMPORTED_MODULE_5__["EVENT_ACTIVATE"], _Events__WEBPACK_IMPORTED_MODULE_5__["EVENT_DEACTIVATE"]];
const getTagAttributes = async (route) => {
	const attributes = route.attr(_Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_COMPONENT_TAG_ATTRIBUTES"]) || "{}";
	return _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(attributes, {}, {});
};

const buildComponent = async (route) => {
	if (route.hasAttribute(_default_js_defaultjs_html_components_src_utils_TemplateHelper__WEBPACK_IMPORTED_MODULE_2__["ATTR_TEMPLATE"])) {
		if (!route.__template__) route.__template__ = Object(_default_js_defaultjs_html_components_src_utils_TemplateHelper__WEBPACK_IMPORTED_MODULE_2__["loadTemplate"])(route, null);
		return route.__template__;
	} else {
		const tag = route.attr(_Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_COMPONENT_TAG"]);
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

class Route extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Nodename__WEBPACK_IMPORTED_MODULE_4__["default"];
	}

	static get EVENTS() {
		return EVENTS;
	}

	constructor() {
		super();
		this.on("click", () => {
			if(!this.active)
				this.trigger(_Events__WEBPACK_IMPORTED_MODULE_5__["EVENT_CLICK"]);
		});
	}

	async init() {}

	get name() {
		return this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_NAME"]);
	}

	get active() {
		return this.hasAttribute(_Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_ACTIVE"]);
	}

	set active(active) {
		const current = this.active;
		if (active != current) {
			this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_ACTIVE"], active ? "" : null);
			if (active)
				this.trigger(_Events__WEBPACK_IMPORTED_MODULE_5__["EVENT_ACTIVATE"]);
			else 
				this.trigger(_Events__WEBPACK_IMPORTED_MODULE_5__["EVENT_DEACTIVATE"]);
		}
	}
	
	get stateful() {
		return this.hasAttribute(_Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_STATEFUL"]);
	}

	get context(){
		return this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_6__["ATTR_CONTEXT"]);
	}	
	
	get refresh(){
		return this.hasAttribute(ATTR_REFRESH);
	}

	async component() {		
		return buildComponent(this);
	}
}

Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__["define"])(Route);
/* harmony default export */ __webpack_exports__["default"] = (Route);


/***/ }),

/***/ "./src/RouteLink/Attributes.js":
/*!*************************************!*\
  !*** ./src/RouteLink/Attributes.js ***!
  \*************************************/
/*! exports provided: ATTR_TARGET, ATTR_CONTEXT, ATTR_REFRESH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_TARGET", function() { return ATTR_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_CONTEXT", function() { return ATTR_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_REFRESH", function() { return ATTR_REFRESH; });
const ATTR_TARGET = "target";
const ATTR_CONTEXT = "context";
const ATTR_REFRESH = "refresh";

/***/ }),

/***/ "./src/RouteLink/Events.js":
/*!*********************************!*\
  !*** ./src/RouteLink/Events.js ***!
  \*********************************/
/*! exports provided: EVENT_TO_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TO_ROUTE", function() { return EVENT_TO_ROUTE; });
/* harmony import */ var _Nodename__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nodename */ "./src/RouteLink/Nodename.js");

const EVENT_TO_ROUTE = _Nodename__WEBPACK_IMPORTED_MODULE_0__["default"] + "-to-route";

/***/ }),

/***/ "./src/RouteLink/Nodename.js":
/*!***********************************!*\
  !*** ./src/RouteLink/Nodename.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__["toNodeName"])("route-link"));

/***/ }),

/***/ "./src/RouteLink/index.js":
/*!********************************!*\
  !*** ./src/RouteLink/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");
/* harmony import */ var _Nodename__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nodename */ "./src/RouteLink/Nodename.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Events */ "./src/RouteLink/Events.js");
/* harmony import */ var _Attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Attributes */ "./src/RouteLink/Attributes.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_NodeHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/NodeHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/NodeHelper.js");







const ATTRIBUTES = [_Attributes__WEBPACK_IMPORTED_MODULE_4__["ATTR_TARGET"], _Attributes__WEBPACK_IMPORTED_MODULE_4__["ATTR_CONTEXT"]];

const EVENTS = [_Events__WEBPACK_IMPORTED_MODULE_3__["EVENT_TO_ROUTE"]];

class RouteLink extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Nodename__WEBPACK_IMPORTED_MODULE_2__["default"];
	}

	static get EVENTS() {
		return EVENTS;
	}

	constructor() {
		super();
		this.on("click", (event) => {
			event.preventDefault();
			this.trigger(_Events__WEBPACK_IMPORTED_MODULE_3__["EVENT_TO_ROUTE"]);
		});
	}

	async init() {}

	get target() {
		return this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_4__["ATTR_TARGET"]);
	}
	
	get context(){
		return this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_4__["ATTR_CONTEXT"]);
	}

	get refresh(){
		return this.hasAttribute(_Attributes__WEBPACK_IMPORTED_MODULE_4__["ATTR_REFRESH"]);
	}
}

Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__["define"])(RouteLink);
/* harmony default export */ __webpack_exports__["default"] = (RouteLink);


/***/ }),

/***/ "./src/View/Nodename.js":
/*!******************************!*\
  !*** ./src/View/Nodename.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__["toNodeName"])("view"));

/***/ }),

/***/ "./src/View/index.js":
/*!***************************!*\
  !*** ./src/View/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");
/* harmony import */ var _Nodename__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nodename */ "./src/View/Nodename.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_WeakData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/WeakData */ "./node_modules/@default-js/defaultjs-html-components/src/utils/WeakData.js");






const ROUTEDATA = new _default_js_defaultjs_html_components_src_utils_WeakData__WEBPACK_IMPORTED_MODULE_4__["default"]();

class View extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
	static get NODENAME() {
		return _Nodename__WEBPACK_IMPORTED_MODULE_2__["default"];
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
			if (component instanceof _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__["Template"]) {
				await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__["Renderer"].render({
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
					await component.display({ route, context, view: this });
				}
				root.append(component);
			}

			if (route.stateful) ROUTEDATA.value(route, "component", component);
		} else {
			if (component instanceof View) {
				component.app = app;
				await component.display({ route, context, view: this });
			}
			root.append(component);
		}
	}
}
Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__["define"])(View);
/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlLWJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9Db250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRGVmYXVsdFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Eb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0RvY3VtZW50RnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9FbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRXZlbnRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxJbnB1dEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MU2VsZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IdG1sQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvRGF0YVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9FeHRlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy9SZWFkeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvRGVmaW5lQ29tcG9uZW50SGVscGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9FdmVudEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvTm9kZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvVGVtcGxhdGVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL1dlYWtEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvamF2YXNjcmlwdC9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9EaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9XYWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL0Nob29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9Gb3JlYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvSWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9JbmNsdWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvSW5pdGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9lbGVtZW50cy9SZXBsYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2VsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZS9BdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZS9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlL05vZGVuYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUm91dGVMaW5rL0F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlTGluay9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlTGluay9Ob2RlbmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUm91dGVMaW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9WaWV3L05vZGVuYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9WaWV3L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7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akI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix3Q0FBd0M7QUFDeEQ7O0FBRUEsU0FBUyxZQUFZO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRkFBUTtBQUNwQyxVQUFVLGdGQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLDZCQUE2QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0hBQU07QUFDUyxtRUFBSSxFQUFDIiwiZmlsZSI6Im1vZHVsZS1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21vZHVsZS1idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcIi4vc3JjL0FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgUm91dGUgZnJvbSBcIi4vc3JjL1JvdXRlXCI7XG5pbXBvcnQgUm91dGVMaW5rIGZyb20gXCIuL3NyYy9Sb3V0ZUxpbmtcIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuL3NyYy9WaWV3XCI7XG5cbmV4cG9ydCB7QXBwbGljYXRpb24sIFJvdXRlLCBWaWV3LCBSb3V0ZUxpbmsgfTtcbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2F0aW9uOyIsImNvbnN0IEdMT0JBTCA9ICgoKSA9PiB7XHJcblx0aWYodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbDtcclxuXHRpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gd2luZG93O1x0XHJcblx0aWYodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBzZWxmO1xyXG5cdHJldHVybiB7fTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdMT0JBTDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RQcm9wZXJ0eSB7XG5cdGNvbnN0cnVjdG9yKGtleSwgY29udGV4dCl7XG5cdFx0dGhpcy5rZXkgPSBrZXk7XG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0fVxuXHRcblx0Z2V0IGtleURlZmluZWQoKXtcblx0XHRyZXR1cm4gdGhpcy5rZXkgaW4gdGhpcy5jb250ZXh0OyBcblx0fVxuXHRcblx0Z2V0IGhhc1ZhbHVlKCl7XG5cdFx0cmV0dXJuICEhdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcblx0fVxuXHRcblx0Z2V0IHZhbHVlKCl7XG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dFt0aGlzLmtleV07XG5cdH1cblx0XG5cdHNldCB2YWx1ZShkYXRhKXtcblx0XHR0aGlzLmNvbnRleHRbdGhpcy5rZXldID0gZGF0YTtcblx0fVxuXHRcblx0c2V0IGFwcGVuZChkYXRhKSB7XG5cdFx0aWYoIXRoaXMuaGFzVmFsdWUpXG5cdFx0XHR0aGlzLnZhbHVlID0gZGF0YTtcblx0XHRlbHNlIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRcdGlmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHRcdHZhbHVlLnB1c2goZGF0YSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMudmFsdWUgPSBbdGhpcy52YWx1ZSwgZGF0YV07XG5cdFx0fVxuXHR9XG5cdFxuXHRyZW1vdmUoKXtcblx0XHRkZWxldGUgdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcblx0fVxuXHRcblx0c3RhdGljIGxvYWQoZGF0YSwga2V5LCBjcmVhdGU9dHJ1ZSkge1xuXHRcdGxldCBjb250ZXh0ID0gZGF0YTtcblx0XHRjb25zdCBrZXlzID0ga2V5LnNwbGl0KFwiXFwuXCIpO1xuXHRcdGxldCBuYW1lID0ga2V5cy5zaGlmdCgpLnRyaW0oKTtcblx0XHR3aGlsZShrZXlzLmxlbmd0aCA+IDApe1xuXHRcdFx0aWYoIWNvbnRleHRbbmFtZV0pe1xuXHRcdFx0XHRpZighY3JlYXRlKVxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29udGV4dFtuYW1lXSA9IHt9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnRleHQgPSBjb250ZXh0W25hbWVdO1xuXHRcdFx0bmFtZSA9IGtleXMuc2hpZnQoKS50cmltKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBuZXcgT2JqZWN0UHJvcGVydHkobmFtZSwgY29udGV4dCk7XG5cdH1cbn07IiwiaW1wb3J0IE9iamVjdFByb3BlcnR5IGZyb20gXCIuL09iamVjdFByb3BlcnR5LmpzXCI7XHJcbi8qKlxyXG4gKiBhcHBlbmQgYSBwcm9wZXJ5IHZhbHVlIHRvIGFuIG9iamVjdC4gSWYgcHJvcGVyeSBleGlzdHMgaXRzIHdvdWxkIGJlIGNvbnZlcnRlZCB0byBhbiBhcnJheVxyXG4gKiBcclxuICogIEBwYXJhbSBhS2V5OnN0cmluZyBuYW1lIG9mIHByb3BlcnR5XHJcbiAqICBAcGFyYW0gYURhdGE6YW55IHByb3BlcnR5IHZhbHVlXHJcbiAqICBAcGFyYW0gYU9iamVjdDpvYmplY3QgdGhlIG9iamVjdCB0byBhcHBlbmQgdGhlIHByb3BlcnR5XHJcbiAqICBcclxuICogIEByZXR1cm4gcmV0dXJucyB0aGUgY2hhbmdlZCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBhcHBlbmQgPSBmdW5jdGlvbihhS2V5LCBhRGF0YSwgYU9iamVjdCkge1xyXG5cdGlmICh0eXBlb2YgYURhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0UHJvcGVydHkubG9hZChhT2JqZWN0LCBhS2V5LCB0cnVlKVxyXG5cdFx0cHJvcGVydHkuYXBwZW5kID0gYURhdGE7XHJcblx0fVxyXG5cdHJldHVybiBhT2JqZWN0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNoZWNrZWQgaWYgYW4gb2JqZWN0IGEgc2ltcGxlIG9iamVjdC4gTm8gQXJyYXksIE1hcCBvciBzb21ldGhpbmcgZWxzZS5cclxuICogXHJcbiAqIEBwYXJhbSBhT2JqZWN0Om9iamVjdCB0aGUgb2JqZWN0IHRvIGJlIHRlc3RpbmdcclxuICogXHJcbiAqIEByZXR1cm4gYm9vbGVhblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzUG9qbyA9IGZ1bmN0aW9uKGFPYmplY3QpIHtcclxuXHRyZXR1cm4gdHlwZW9mIGFPYmplY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgYU9iamVjdCAhPSBudWxsICYmIGFPYmplY3QuY29uc3RydWN0b3IubmFtZSA9PT0gXCJPYmplY3RcIlxyXG59XHJcblxyXG4vKipcclxuICogbWVyZ2luZyBvYmplY3QgaW50byBhIHRhcmdldCBvYmplY3QuIEl0cyBvbmx5IG1lcmdlIHNpbXBsZSBvYmplY3QgYW5kIHN1YiBvYmplY3RzLiBFdmVyeSBvdGhlciBcclxuICogdmFsdWUgd291bGQgYmUgcmVwbGFjZWQgYnkgdmFsdWUgZnJvbSB0aGUgc291cmNlIG9iamVjdC5cclxuICogXHJcbiAqIHNhbXBsZTogbWVyZ2UodGFyZ2V0LCBzb3VyY2UtMSwgc291cmNlLTIsIC4uLnNvdXJjZS1uKVxyXG4gKiBcclxuICogQHBhcmFtIGFUYXJnZXQ6b2JqZWN0IHRoZSB0YXJnZXQgb2JqZWN0IHRvIG1lcmdpbmcgaW50b1xyXG4gKiBAcGFyYW0gYVNvdXJjZXM6b2JqZWN0XHJcbiAqIFxyXG4gKiBAcmV0dXJuIG9iamVjdCByZXR1cm5zIHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWVyZ2UgPSBmdW5jdGlvbihhVGFyZ2V0KSB7XHJcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGNvbnN0IHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChhS2V5ID0+IHtcclxuXHRcdFx0aWYgKGlzUG9qbyhhVGFyZ2V0W2FLZXldKSlcclxuXHRcdFx0XHRtZXJnZShhVGFyZ2V0W2FLZXldLCBzb3VyY2VbYUtleV0pO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0YVRhcmdldFthS2V5XSA9IHNvdXJjZVthS2V5XTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGFUYXJnZXQ7XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgYnVpbGRQcm9wZXJ0eUZpbHRlciA9IGZ1bmN0aW9uKHsgbmFtZXMsIGFsbG93ZWQgfSkge1xyXG5cdHJldHVybiAobmFtZSwgdmFsdWUsIGNvbnRleHQpID0+IHtcclxuXHRcdHJldHVybiBuYW1lcy5pbmNsdWRlcyhuYW1lKSA9PT0gYWxsb3dlZDtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IFtkYXRhLCBwcm9wRmlsdGVyLCB7ZGVlcCA9IGZhbHNlLCByZWN1cnNpdmUgPSB0cnVlLCBwYXJlbnRzID0gW119ID0ge31dID0gYXJndW1lbnRzO1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cclxuXHRmb3IgKG5hbWUgaW4gZGF0YSkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBkYXRhW25hbWVdO1xyXG5cdFx0Y29uc3QgYWNjZXB0ID0gcHJvcEZpbHRlcihuYW1lLCB2YWx1ZSwgZGF0YSk7XHJcblx0XHRpZiAoYWNjZXB0ICYmICghZGVlcCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSlcclxuXHRcdFx0cmVzdWx0W25hbWVdID0gdmFsdWU7XHJcblx0XHRlbHNlIGlmIChhY2NlcHQgJiYgZGVlcCkge1xyXG5cdFx0XHRjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG5cdFx0XHRpZiAodHlwZSAhPT0gXCJvYmplY3RcIlxyXG5cdFx0XHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgQXJyYXlcclxuXHRcdFx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIE1hcFxyXG5cdFx0XHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgU2V0XHJcblx0XHRcdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHBcclxuXHRcdFx0XHR8fCBwYXJlbnRzLmluY2x1ZGVzW3ZhbHVlXVxyXG5cdFx0XHRcdHx8IHZhbHVlID09IGRhdGEpXHJcblx0XHRcdFx0cmVzdWx0W25hbWVdID0gdmFsdWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXN1bHRbbmFtZV0gPSBmaWx0ZXIodmFsdWUsIHByb3BGaWx0ZXIsIHtkZWVwLCByZWN1cnNpdmUsIHBhcmVudHM6ICBwYXJlbnRzLmNvbmNhdChkYXRhKX0pO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRpc1Bvam8sXHJcblx0YXBwZW5kLFxyXG5cdG1lcmdlLFxyXG5cdGZpbHRlcixcclxuXHRidWlsZFByb3BlcnR5RmlsdGVyXHJcbn07IiwiY29uc3Qgc2Vla0F0Q2hhaW4gPSAocmVzb2x2ZXIsIHByb3BlcnR5KSA9PiB7XG5cdHdoaWxlKHJlc29sdmVyKXtcblx0XHRjb25zdCBkZWYgPSByZXNvbHZlci5wcm94eS5oYW5kbGUuZ2V0UHJvcGVydHlEZWYocHJvcGVydHksIGZhbHNlKTtcblx0XHRpZihkZWYpXG5cdFx0XHRyZXR1cm4gZGVmO1xuXHRcdFxuXHRcdHJlc29sdmVyID0gcmVzb2x2ZXIucGFyZW50O1xuXHR9XHRcblx0cmV0dXJuIHsgZGF0YTogbnVsbCwgcmVzb2x2ZXI6IG51bGwsIGRlZmluZWQ6IGZhbHNlIH07XG59XG5cbmNsYXNzIEhhbmRsZSB7XG5cdGNvbnN0cnVjdG9yKGRhdGEsIHJlc29sdmVyKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0fVxuXHRcblx0dXBkYXRlRGF0YShkYXRhKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdH1cblx0XG5cdHJlc2V0Q2FjaGUoKXtcblx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHR9XG5cblx0Z2V0UHJvcGVydHlEZWYocHJvcGVydHksIHNlZWsgPSB0cnVlKSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKHByb3BlcnR5KSlcblx0XHRcdHJldHVybiB0aGlzLmNhY2hlLmdldChwcm9wZXJ0eSk7XG5cdFx0XG5cdFx0bGV0IGRlZiA9IG51bGxcblx0XHRpZiAodGhpcy5kYXRhICYmIHByb3BlcnR5IGluIHRoaXMuZGF0YSlcblx0XHRcdGRlZiA9IHsgZGF0YTogdGhpcy5kYXRhLCByZXNvbHZlcjogdGhpcy5yZXNvbHZlciwgZGVmaW5lZDogdHJ1ZSB9O1xuXHRcdGVsc2UgaWYoc2Vlaylcblx0XHRcdGRlZiA9IHNlZWtBdENoYWluKHRoaXMucmVzb2x2ZXIucGFyZW50LCBwcm9wZXJ0eSk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0aWYoZGVmLmRlZmluZWQpXG5cdFx0XHR0aGlzLmNhY2hlLnNldChwcm9wZXJ0eSwgZGVmKTtcblx0XHRyZXR1cm4gZGVmO1xuXHR9XG5cblx0aGFzUHJvcGVydHkocHJvcGVydHkpIHtcblx0XHQvL0BUT0RPIHdyaXRlIHRlc3RzISEhXG5cdFx0Y29uc3QgeyBkZWZpbmVkIH0gPSB0aGlzLmdldFByb3BlcnR5RGVmKHByb3BlcnR5KTtcblx0XHRyZXR1cm4gZGVmaW5lZDtcblx0fVxuXHRnZXRQcm9wZXJ0eShwcm9wZXJ0eSkge1xuXHRcdC8vQFRPRE8gd3JpdGUgdGVzdHMhISFcdFxuXHRcdGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5nZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSk7XG5cdFx0cmV0dXJuIGRhdGEgPyBkYXRhW3Byb3BlcnR5XSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpIHtcblx0XHQvL0BUT0RPIHdvdWxkIHN1cHBvcnQgdGhpcyBhY3Rpb24gb24gYW4gcHJveGllZCByZXNvbHZlciBjb250ZXh0Pz8/IHdyaXRlIHRlc3RzISEhXG5cdFx0Y29uc3QgeyBkYXRhLCBkZWZpbmVkIH0gPSB0aGlzLmdldFByb3BlcnR5RGVmKHByb3BlcnR5KTtcblx0XHRpZiAoZGVmaW5lZClcblx0XHRcdGRhdGFbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5kYXRhKVxuXHRcdFx0XHR0aGlzLmRhdGFbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5kYXRhID0ge31cblx0XHRcdFx0dGhpcy5kYXRhW3Byb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYWNoZS5zZXQocHJvcGVydHksIHsgZGF0YTogdGhpcy5kYXRhLCByZXNvbHZlcjogdGhpcy5yZXNvbHZlciwgZGVmaW5lZDogdHJ1ZSB9KTtcblx0XHR9XG5cdH1cblx0ZGVsZXRlUHJvcGVydHkocHJvcGVydHkpIHtcblx0XHQvL0BUT0RPIHdvdWxkIHN1cHBvcnQgdGhpcyBhY3Rpb24gb24gYW4gcHJveGllZCByZXNvbHZlciBjb250ZXh0Pz8/IHdyaXRlIHRlc3RzISEhXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcihcInVuc3VwcG9ydGVkIGZ1bmN0aW9uIVwiKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCByZXNvbHZlcikge1xuXHRcdHRoaXMuaGFuZGxlID0gbmV3IEhhbmRsZShjb250ZXh0LCByZXNvbHZlcik7XHRcdFxuXHRcdHRoaXMuZGF0YSA9IG5ldyBQcm94eSh0aGlzLmhhbmRsZSwge1xuXHRcdFx0aGFzOiBmdW5jdGlvbihkYXRhLCBwcm9wZXJ0eSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5oYXNQcm9wZXJ0eShwcm9wZXJ0eSk7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0OiBmdW5jdGlvbihkYXRhLCBwcm9wZXJ0eSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5nZXRQcm9wZXJ0eShwcm9wZXJ0eSk7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbihkYXRhLCBwcm9wZXJ0eSwgdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcblx0XHRcdH0sXG5cdFx0XHRkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24oZGF0YSwgcHJvcGVydHkpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEuZGVsZXRlUHJvcGVydHkocHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0Ly9AVE9ETyBuZWVkIHRvIHN1cHBvcnQgdGhlIG90aGVyIHByb3h5IGFjdGlvbnNcdFx0XG5cdFx0fSk7O1xuXHR9XG5cdFxuXHR1cGRhdGVEYXRhKGRhdGEpe1xuXHRcdHRoaXMuaGFuZGxlLnVwZGF0ZURhdGEoZGF0YSlcdFx0XG5cdH1cblx0XG5cdHJlc2V0Q2FjaGUoKXtcblx0XHR0aGlzLmhhbmRsZS5yZXNldENhY2hlKCk7XG5cdH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFZhbHVlIHtcblx0Y29uc3RydWN0b3IodmFsdWUpe1xuXHRcdHRoaXMuaGFzVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDE7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XHRcbn07IiwiaW1wb3J0IEdMT0JBTCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvR2xvYmFsLmpzXCJcclxuaW1wb3J0IE9iamVjdFByb3BlcnR5IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RQcm9wZXJ0eS5qc1wiO1xyXG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzLmpzXCJcclxuaW1wb3J0IERlZmF1bHRWYWx1ZSBmcm9tIFwiLi9EZWZhdWx0VmFsdWUuanNcIjtcclxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dC5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IEVYRUNVVElPTl9XQVJOX1RJTUVPVVQgPSAxMDAwO1xyXG5jb25zdCBFWFBSRVNTSU9OID0gL1xcJFxceygoW2EtekEtWjAtOVxcLV9cXHNdKyk6Oik/KFteXFx7XFx9XSspXFx9LztcclxuY29uc3QgREVGQVVMVF9OT1RfREVGSU5FRCA9IG5ldyBEZWZhdWx0VmFsdWUoKTtcclxuY29uc3QgdG9EZWZhdWx0VmFsdWUgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlKVxyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cclxuXHRyZXR1cm4gbmV3IERlZmF1bHRWYWx1ZSh2YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBleGVjdXRlID0gYXN5bmMgZnVuY3Rpb24oYVN0YXRlbWVudCwgYUNvbnRleHQpIHtcclxuXHRpZiAodHlwZW9mIGFTdGF0ZW1lbnQgIT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gYVN0YXRlbWVudDtcclxuXHRcdFxyXG5cdGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgRnVuY3Rpb24oXCJjb250ZXh0XCIsIFxyXG5gXHJcbnJldHVybiAoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHR0cnl7IFxyXG5cdFx0d2l0aChjb250ZXh0KXtcclxuXHRcdFx0IHJldHVybiAke2FTdGF0ZW1lbnR9XHJcblx0XHR9XHJcblx0fWNhdGNoKGUpe1xyXG5cdFx0dGhyb3cgZTtcclxuXHR9XHJcbn0pKGNvbnRleHQpYFxyXG5cdCk7XHJcblx0XHJcblx0bGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0Y29uc29sZS53YXJuKFwibG9uZyBydW5uaW5nIHN0YXRlbWVudDpcIiwgYVN0YXRlbWVudCwgbmV3IEVycm9yKCkpO1xyXG5cdH0sIEVYRUNVVElPTl9XQVJOX1RJTUVPVVQpXHJcblx0XHJcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZXhwcmVzc2lvbihhQ29udGV4dCk7XHJcblx0XHJcblx0aWYodGltZW91dClcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb25zdCByZXNvbHZlID0gYXN5bmMgZnVuY3Rpb24oYVJlc29sdmVyLCBhRXhwcmVzc2lvbiwgYUZpbHRlciwgYURlZmF1bHQpIHtcclxuXHRpZiAoYUZpbHRlciAmJiBhUmVzb2x2ZXIubmFtZSAhPSBhRmlsdGVyKVxyXG5cdFx0cmV0dXJuIGFSZXNvbHZlci5wYXJlbnQgPyByZXNvbHZlKGFSZXNvbHZlci5wYXJlbnQsIGFFeHByZXNzaW9uLCBhRmlsdGVyLCBhRGVmYXVsdCkgOiBudWxsO1xyXG5cdFxyXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4ZWN1dGUoYUV4cHJlc3Npb24sIGFSZXNvbHZlci5wcm94eS5kYXRhKTtcclxuXHRpZiAocmVzdWx0ICE9PSBudWxsICYmIHR5cGVvZiByZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cclxuXHRlbHNlIGlmIChhRGVmYXVsdCBpbnN0YW5jZW9mIERlZmF1bHRWYWx1ZSAmJiBhRGVmYXVsdC5oYXNWYWx1ZSlcclxuXHRcdHJldHVybiBhRGVmYXVsdC52YWx1ZTtcclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZSA9IHZhbHVlID0+IHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdHZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG5cdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCA9PSAwID8gbnVsbCA6IHZhbHVlO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb25SZXNvbHZlciB7XHJcblx0Y29uc3RydWN0b3IoeyBjb250ZXh0ID0gR0xPQkFMLCBwYXJlbnQgPSBudWxsLCBuYW1lID0gbnVsbCB9KSB7XHJcblx0XHR0aGlzLnBhcmVudCA9IChwYXJlbnQgaW5zdGFuY2VvZiBFeHByZXNzaW9uUmVzb2x2ZXIpID8gcGFyZW50IDogbnVsbDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG5cdFx0dGhpcy5wcm94eSA9IG5ldyBDb250ZXh0KHRoaXMuY29udGV4dCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHRnZXQgY2hhaW4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5jaGFpbiArIFwiL1wiICsgdGhpcy5uYW1lIDogXCIvXCIgKyB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHRnZXQgZWZmZWN0aXZlQ2hhaW4oKSB7XHJcblx0XHRpZiAoIXRoaXMuY29udGV4dClcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZWZmZWN0aXZlQ2hhaW4gOiBcIlwiO1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZWZmZWN0aXZlQ2hhaW4gKyBcIi9cIiArIHRoaXMubmFtZSA6IFwiL1wiICsgdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbnRleHRDaGFpbigpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0bGV0IHJlc29sdmVyID0gdGhpcztcclxuXHRcdHdoaWxlIChyZXNvbHZlcikge1xyXG5cdFx0XHRpZiAocmVzb2x2ZXIuY29udGV4dClcclxuXHRcdFx0XHRyZXN1bHQucHVzaChyZXNvbHZlci5jb250ZXh0KTtcclxuXHJcblx0XHRcdHJlc29sdmVyID0gcmVzb2x2ZXIucGFyZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKGtleSwgZmlsdGVyKSB7XHJcblx0XHRpZiAoIWtleSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0ZWxzZSBpZiAoZmlsdGVyICYmIGZpbHRlciAhPSB0aGlzLm5hbWUpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFyZW50KVxyXG5cdFx0XHRcdHRoaXMucGFyZW50LmdldERhdGEoa2V5LCBmaWx0ZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKHRoaXMuY29udGV4dCwga2V5LCBmYWxzZSk7XHJcblx0XHRcdHJldHVybiBwcm9wZXJ0eSA/IHByb3BlcnR5LnZhbHVlIDogbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZURhdGEoa2V5LCB2YWx1ZSwgZmlsdGVyKSB7XHJcblx0XHRpZiAoIWtleSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0ZWxzZSBpZiAoZmlsdGVyICYmIGZpbHRlciAhPSB0aGlzLm5hbWUpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFyZW50KVxyXG5cdFx0XHRcdHRoaXMucGFyZW50LnVwZGF0ZURhdGEoa2V5LCB2YWx1ZSwgZmlsdGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmKHRoaXMuY29udGV4dCA9PSBudWxsIHx8IHR5cGVvZiB0aGlzLmNvbnRleHQgPT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRcdHRoaXMuY29udGV4dCA9IHt9O1x0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5wcm94eS51cGRhdGVEYXRhKHRoaXMuY29udGV4dCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKHRoaXMuY29udGV4dCwga2V5KTtcclxuXHRcdFx0cHJvcGVydHkudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5wcm94eS5yZXNldENhY2hlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtZXJnZUNvbnRleHQoY29udGV4dCwgZmlsdGVyKSB7XHJcblx0XHRpZiAoZmlsdGVyICYmIGZpbHRlciAhPSB0aGlzLm5hbWUpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFyZW50KVxyXG5cdFx0XHRcdHRoaXMucGFyZW50Lm1lcmdlQ29udGV4dChjb250ZXh0LCBmaWx0ZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jb250ZXh0ID8gT2JqZWN0VXRpbHMubWVyZ2UodGhpcy5jb250ZXh0LCBjb250ZXh0KSA6IGNvbnRleHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyByZXNvbHZlKGFFeHByZXNzaW9uLCBhRGVmYXVsdCkge1xyXG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IG1hdGNoID0gRVhQUkVTU0lPTi5leGVjKGFFeHByZXNzaW9uKTtcclxuXHRcdFx0aWYgKG1hdGNoKVxyXG5cdFx0XHRcdHJldHVybiBhd2FpdCByZXNvbHZlKHRoaXMsIG1hdGNoWzNdLCBub3JtYWxpemUobWF0Y2hbMl0pLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIGF3YWl0IHJlc29sdmUodGhpcywgbm9ybWFsaXplKGFFeHByZXNzaW9uKSwgbnVsbCwgZGVmYXVsdFZhbHVlKTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGV4ZWN1dGluZyBzdGF0bWVudFxcXCJcIiwgYUV4cHJlc3Npb24sIFwiXFxcIjpcIiwgZSk7XHJcblx0XHRcdHJldHVybiBkZWZhdWx0VmFsdWUuaGFzVmFsdWUgPyBkZWZhdWx0VmFsdWUudmFsdWUgOiBhRXhwcmVzc2lvbjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlc29sdmVUZXh0KGFUZXh0LCBhRGVmYXVsdCkge1xyXG5cdFx0bGV0IHRleHQgPSBhVGV4dDtcclxuXHRcdGxldCB0ZW1wID0gYVRleHQ7IC8vIHJlcXVpcmVkIHRvIHByZXZlbnQgaW5maW5pdHkgbG9vcFxyXG5cdFx0bGV0IG1hdGNoID0gRVhQUkVTU0lPTi5leGVjKHRleHQpO1xyXG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRFxyXG5cdFx0d2hpbGUgKG1hdGNoICE9IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXNvbHZlKG1hdGNoWzBdLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0XHR0ZW1wID0gdGVtcC5zcGxpdChtYXRjaFswXSkuam9pbigpOyAvLyByZW1vdmUgY3VycmVudCBtYXRjaCBmb3IgbmV4dCBsb29wXHJcblx0XHRcdHRleHQgPSB0ZXh0LnNwbGl0KG1hdGNoWzBdKS5qb2luKHR5cGVvZiByZXN1bHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKHJlc3VsdCA9PSBudWxsID8gXCJudWxsXCIgOiByZXN1bHQpKTtcclxuXHRcdFx0bWF0Y2ggPSBFWFBSRVNTSU9OLmV4ZWModGVtcCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlKGFFeHByZXNzaW9uLCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KSB7XHJcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBhQ29udGV4dCB9KTtcclxuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcclxuXHRcdGlmICh0eXBlb2YgYVRpbWVvdXQgPT09IFwibnVtYmVyXCIgJiYgYVRpbWVvdXQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHJlc29sdmVyLnJlc29sdmUoYUV4cHJlc3Npb24sIGRlZmF1bHRWYWx1ZSkpO1xyXG5cdFx0XHRcdH0sIGFUaW1lb3V0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc29sdmVyLnJlc29sdmUoYUV4cHJlc3Npb24sIGRlZmF1bHRWYWx1ZSlcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlVGV4dChhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogYUNvbnRleHQgfSk7XHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XHJcblx0XHRpZiAodHlwZW9mIGFUaW1lb3V0ID09PSBcIm51bWJlclwiICYmIGFUaW1lb3V0ID4gMClcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNvbHZlci5yZXNvbHZlVGV4dChhVGV4dCwgZGVmYXVsdFZhbHVlKSk7XHJcblx0XHRcdFx0fSwgYVRpbWVvdXQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZVRleHQoYVRleHQsIGRlZmF1bHRWYWx1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdHN0YXRpYyBidWlsZFNlY3VyZSh7Y29udGV4dCwgcHJvcEZpbHRlciwgb3B0aW9uPXtkZWVwOnRydWV9LCBuYW1lLCBwYXJlbnR9KXtcclxuXHRcdGNvbnRleHQgPSBPYmplY3RVdGlscy5maWx0ZXIoe2RhdGE6IGNvbnRleHQsIHByb3BGaWx0ZXIsIG9wdGlvbn0pO1xyXG5cdFx0cmV0dXJuIG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoe2NvbnRleHQsIG5hbWUsIHBhcmVudH0pO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlscy9VdGlsc1wiO1xyXG5cclxuVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcyA9IFV0aWxzLmdsb2JhbC5kZWZhdWx0anMgfHwge307XHJcblV0aWxzLmdsb2JhbC5kZWZhdWx0anMuZXh0ZG9tID0gVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcy5leHRkb20gfHwge1xyXG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHR1dGlscyA6IHtcclxuXHRcdFV0aWxzOiBVdGlsc1xyXG5cdH1cclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmZpbmQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwucmVhZHkgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQucmVhZHkuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuY3JlYXRlID0gZnVuY3Rpb24oYUNvbnRlbnQsIGFzVGVtcGxhdGUpIHtcclxuXHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHRcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBhQ29udGVudDtcclxuXHRpZihhc1RlbXBsYXRlKVxyXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xyXG5cdFxyXG5cdHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpLmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuc2NyaXB0ID0gZnVuY3Rpb24oYUZpbGUsIGFUYXJnZXQpIHtcclxuXHRpZihhRmlsZSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKGFGaWxlLm1hcChmaWxlID0+IFV0aWxzLmdsb2JhbC5zY3JpcHQoZmlsZSwgYVRhcmdldCkpKTtcclxuXHRcclxuXHRpZih0eXBlb2YgYUZpbGUgPT09IFwic3RyaW5nXCIpXHRcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocixlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpe3IoKX07XHJcblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJsb2FkIGVycm9yIVwiKX07XHJcblx0XHRcdCFhVGFyZ2V0ID8gZG9jdW1lbnQuYm9keS5hcHBlbmQoc2NyaXB0KSA6IGFUYXJnZXQuYXBwZW5kKHNjcmlwdCk7XHJcblx0XHRcdHNjcmlwdC5zcmMgPSBhRmlsZTtcclxuXHRcdH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcIkZpcnN0IHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmchXCIpO1xyXG59OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZG9jdW1lbnQudHJpZ2dlcihcInJlYWR5XCIpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnRGcmFnbWVudCwgUXVlcnlTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBBdHRyaWJ1dGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShFbGVtZW50LFF1ZXJ5U3VwcG9ydCwgQXR0cmlidXRlU3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XG5cbmV4dGVuZFByb3RvdHlwZShFdmVudFRhcmdldCwgRXZlbnRTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEh0bWxDbGFzc1N1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0XCI7XHJcbmltcG9ydCBTaG93SGlkZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTEVsZW1lbnQsIEh0bWxDbGFzc1N1cHBvcnQsIFNob3dIaWRlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTElucHV0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxTZWxlY3RFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFRleHRBcmVhRWxlbWVudCxFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFyZ3VtZW50c1swXVxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSkpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxDb2xsZWN0aW9uLCBMaXN0U3VwcG9ydCk7XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClcclxuXHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZywgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgYXJnIGluc3RhbmNlb2YgQXJyYXkpe1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmcubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoYXJnW2ldICYmIGFyZ1tpXSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcclxuXHRcdFx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmdbaV0sIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRkYXRhLmxlbmd0aCA9IHt2YWx1ZTogY291bnRlcn07XHJcblx0cmV0dXJuICBPYmplY3QuY3JlYXRlKEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZSwgZGF0YSk7XHJcbn07XHJcblxyXG5cclxuRGVsZWdhdGVyQnVpbGRlcihmdW5jdGlvbihhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpIHtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1x0XHJcblx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0aWYobm9kZSAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKVxyXG5cdFx0cmV0dXJuIEhUTUxDb2xsZWN0aW9uLmZyb20uYXBwbHkobnVsbCwgcmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcbn0sSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUsIEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGF0YVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlLERhdGFTdXBwb3J0LE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGVMaXN0LCBMaXN0U3VwcG9ydCk7XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdE5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBhcmcgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBhcmcgaW5zdGFuY2VvZiBBcnJheSl7XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZihhcmdbaV0gJiYgYXJnW2ldIGluc3RhbmNlb2YgTm9kZSl7XHJcblx0XHRcdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnW2ldLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZGF0YS5sZW5ndGggPSB7dmFsdWU6IGNvdW50ZXJ9O1xyXG5cdHJldHVybiAgT2JqZWN0LmNyZWF0ZShOb2RlTGlzdC5wcm90b3R5cGUsIGRhdGEpO1xyXG59O1xyXG5cclxuXHJcbkRlbGVnYXRlckJ1aWxkZXIoZnVuY3Rpb24oYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKSB7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcdFxyXG5cdHRoaXMuZm9yRWFjaChub2RlID0+IHtcclxuXHRcdGlmKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZSB8fCByZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcclxufSxOb2RlTGlzdC5wcm90b3R5cGUsIE5vZGUucHJvdG90eXBlLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSwgRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiQXR0cmlidXRlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGVzKCkgPyAoKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0cmlidXRlTmFtZXMoKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSkoKSA6IHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRGF0YVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRhdGFzZXQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGZvciAobmFtZSBpbiB0aGlzLmRhdGFzZXQpXHJcblx0XHRcdFx0ZGF0YVtuYW1lXSA9IHRoaXMuZGF0YXNldFtuYW1lXTtcclxuXHJcblx0XHR0aGlzLmRhdGEgPSAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0XHRyZXR1cm4gZGF0YVthcmd1bWVudHNbMF1dO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2FyZ3VtZW50c1swXV07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkYXRhW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0pLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRXZlbnRTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHRjb25zdCBFVkVOVFNQTElURVIgPSAvKFxccyspfChcXHMqLFxccyopLztcclxuXHRjb25zdCBnZXRXcmFwcGVySGFuZGxlTWFwID0gKGVsZW1lbnQpID0+IHtcclxuXHRcdGlmICghZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXylcclxuXHRcdFx0ZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXyA9IG5ldyBNYXAoKTtcclxuXHJcblx0XHRyZXR1cm4gZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXztcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdldFRyaWdnZXJUaW1lb3V0cyA9IChlbGVtZW50KSA9PiB7XHJcblx0XHRpZiAoIWVsZW1lbnQuX19fRVZFTlRUUklHR0VSVElNRU9VVFNfX18pIGVsZW1lbnQuX19fRVZFTlRUUklHR0VSVElNRU9VVFNfX18gPSB7fTtcclxuXHJcblx0XHRyZXR1cm4gZWxlbWVudC5fX19FVkVOVFRSSUdHRVJUSU1FT1VUU19fXztcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW1vdmVXcmFwcGVyID0gKGVsZW1lbnQsIGRhdGEsIGV2ZW50VHlwZXMpID0+IHtcclxuXHRcdGNvbnN0IHsgd3JhcHBlciwgb3B0aW9uLCBldmVudHMsIGhhbmRsZSB9ID0gZGF0YTtcclxuXHRcdGNvbnN0IGNhcHR1cmUgPSBvcHRpb24uY2FwdHVyZTtcclxuXHRcdGlmKGV2ZW50VHlwZXMpe1xyXG5cdFx0XHRldmVudFR5cGVzID0gdHlwZW9mIGV2ZW50VHlwZXMgPT09IFwic3RyaW5nXCIgPyBldmVudFR5cGVzLnNwbGl0KEVWRU5UU1BMSVRFUikgOiBldmVudFR5cGVzO1xyXG5cdFx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudFR5cGVzKSB7XHJcblx0XHRcdFx0Y29uc3QgaW5kZXggPSBldmVudHMuaW5kZXhPZihldmVudCk7XHJcblx0XHRcdFx0aWYoaW5kZXggPj0gMCkge1xyXG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB3cmFwcGVyLCBjYXB0dXJlKTtcclxuXHRcdFx0XHRcdGV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihldmVudHMubGVuZ3RoID09IDApXHRcdFx0XHRcclxuXHRcdFx0XHRcdGdldFdyYXBwZXJIYW5kbGVNYXAoZWxlbWVudCkuZGVsZXRlKGhhbmRsZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB3cmFwcGVyLCBjYXB0dXJlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRnZXRXcmFwcGVySGFuZGxlTWFwKGVsZW1lbnQpLmRlbGV0ZShoYW5kbGUpO1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcblxyXG5cdFByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cclxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgZXZlbnRzID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzLnNoaWZ0KCkuc3BsaXQoRVZFTlRTUExJVEVSKSA6IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGNvbnN0IGZpbHRlciA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpIDogbnVsbDtcclxuXHRcdGNvbnN0IGhhbmRsZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGNvbnN0IG9wdGlvbiA9IHR5cGVvZiBhcmdzWzBdID09PSBcInVuZGVmaW5lZFwiID8geyBjYXB0dXJlOiBmYWxzZSwgb25jZTogZmFsc2UsIHBhc3NpdmU6IGZhbHNlIH0gOiAodHlwZW9mIGFyZ3NbMF0gPT09IFwiYm9vbGVhblwiID8geyBjYXB0dXJlOiBhcmdzLnNoaWZ0KCksIG9uY2U6IGZhbHNlLCBwYXNzaXZlOiBmYWxzZSB9IDogYXJncy5zaGlmdCgpKTtcclxuXHRcdGNvbnN0IHdyYXBwZXIgPSBmdW5jdGlvbihhRXZlbnQpIHtcclxuXHRcdFx0aWYgKGZpbHRlcikge1xyXG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHRhcmdldC5pcyA9PT0gXCJmdW5jdGlvblwiICYmICFhRXZlbnQudGFyZ2V0LmlzKGZpbHRlcikpIHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGhhbmRsZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRpZiAob3B0aW9uLm9uY2UpIHJlbW92ZVdyYXBwZXIodGhpcywgd3JhcHBlcik7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdGdldFdyYXBwZXJIYW5kbGVNYXAodGhpcykuc2V0KGhhbmRsZSwgeyBoYW5kbGUsIHdyYXBwZXI6IHdyYXBwZXIsIGV2ZW50cywgb3B0aW9uIH0pO1xyXG5cclxuXHRcdGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xyXG5cdFx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHdyYXBwZXIsIG9wdGlvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblxyXG5cdFByb3RvdHlwZS5yZW1vdmVPbiA9IGZ1bmN0aW9uKGhhbmRsZSwgZXZlbnQsIGNhcHR1cmUpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSBnZXRXcmFwcGVySGFuZGxlTWFwKHRoaXMpLmdldChoYW5kbGUpO1xyXG5cdFx0aWYgKGRhdGEpIFxyXG5cdFx0XHRyZW1vdmVXcmFwcGVyKHRoaXMsIGRhdGEsIGV2ZW50KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZSwgZXZlbnQsIGNhcHR1cmUpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0Y29uc3QgdGltZW91dCA9IHR5cGVvZiBhcmdzWzBdID09PSBcIm51bWJlclwiID8gYXJncy5zaGlmdCgpIDogLTE7XHJcblx0XHRpZiAodGltZW91dCA+PSAwKSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSBhcmdzWzBdO1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0cyA9IGdldFRyaWdnZXJUaW1lb3V0cyh0aGlzKTtcclxuXHRcdFx0Y29uc3QgdGltZW91dGlkID0gdGltZW91dHNbdHlwZV07XHJcblx0XHRcdGlmICh0aW1lb3V0aWQpIGNsZWFyVGltZW91dCh0aW1lb3V0aWQpO1xyXG5cclxuXHRcdFx0dGltZW91dHNbdHlwZV0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRkZWxldGUgdGltZW91dHNbdHlwZV07XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cdFx0XHR9LCB0aW1lb3V0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdGNvbnN0IGRlbGVnYXRlID0gYXJnc1swXSBpbnN0YW5jZW9mIEV2ZW50ID8gYXJncy5zaGlmdCgpIDogbnVsbDtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGFyZ3MubGVuZ3RoID49IDEgPyAoYXJncy5sZW5ndGggPT0gMCA/IGFyZ3Muc2hpZnQoKSA6IGFyZ3MpIDogZGVsZWdhdGU7XHJcblx0XHRcdGNvbnN0IGV2ZW50ID0gZGF0YSA/IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogZGF0YSB9KSA6IG5ldyBFdmVudCh0eXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSk7XHJcblxyXG5cdFx0XHRpZiAoZGVsZWdhdGUpIGV2ZW50LmRlbGVnYXRlZEV2ZW50ID0gZGVsZWdhdGU7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiSHRtbENsYXNzU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goY2xhenogPT4gdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXp6KSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cyxjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhenopKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaChjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhenopKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhenopKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goY2xhenogPT4gdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGNsYXp6KSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgY2xhenogPT4gdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGNsYXp6KSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkxpc3RTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcdFxyXG5cdFByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0aWYodGhpc1tpXSA9PSBhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0cmV0dXJuIGk7XHJcblx0XHRcclxuXHRcdHJldHVybiAtMTtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZvckVhY2guYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1swXTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTWFuaXB1bGF0aW9uU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBub2RlcyA9IHRoaXMuY2hpbGROb2Rlc1xyXG5cdFx0d2hpbGUobm9kZXMubGVuZ3RoICE9IDApXHRcdFx0XHJcblx0XHRcdG5vZGVzWzBdLnJlbW92ZSh0cnVlKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuY29udGVudCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHRcdFx0XHJcblx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRpZihhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMub3V0ZXJIVE1MO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBcclxuXHRcdFx0QXJyYXkuZnJvbShhcmd1bWVudHMpLmZvckVhY2goY29udGVudCA9PiB7XHJcblx0XHRcdFx0dGhpcy5lbXB0eSgpO1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoY29udGVudCk7XHJcblx0XHRcdFx0ZWxzZSBpZihjb250ZW50IGluc3RhbmNlb2YgTm9kZSB8fCBjb250ZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgY29udGVudCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKXtcclxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGNvbnRlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcdFxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0Y29uc3QgYXBwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGNvbnN0IGFwcGVuZCA9IFByb3RvdHlwZS5hcHBlbmRDaGlsZC5iaW5kKHRoaXMpO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGxldCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZChhcmcpO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0Y3JlYXRlKGFyZykuZm9yRWFjaChhcHBlbmQpO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGFwcGVuZCk7XHJcblx0XHR9XHJcblx0fTtcdFxyXG5cdFByb3RvdHlwZS5hcHBlbmQgPSBhcHBlbmQ7XHJcblx0XHJcblx0Y29uc3QgcHJlcGVuZCA9IGZ1bmN0aW9uKGFGaXJzdEVsZW1lbnQsIGFFbGVtZW50KXtcclxuXHRcdHRoaXMuaW5zZXJ0QmVmb3JlKGFFbGVtZW50LCBhRmlyc3RFbGVtZW50KTtcclxuXHR9O1xyXG5cdFByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT0gMClcclxuXHRcdFx0YXBwZW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y29uc3QgZmlyc3QgPSB0aGlzLmNoaWxkTm9kZXMuZmlyc3QoKTtcclxuXHRcdFx0Y29uc3QgaW5zZXJ0ID0gcHJlcGVuZC5iaW5kKHRoaXMsIGZpcnN0KTtcclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0Y29uc3QgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0XHRpbnNlcnQoYXJnKTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnQpO1xyXG5cdFx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoIDwgMSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdWZmaWNpZW50IGFyZ3VtZW50cyEgT25lIG9yIHR3byBub2RlcyByZXF1aXJlZCFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMucGFyZW50Tm9kZSA6IHRoaXM7XHJcblx0XHRjb25zdCBvbGROb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gdGhpcyA6IGFyZ3VtZW50c1swXTtcclxuXHRcdGNvbnN0IG5ld05vZGUgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHNbMV07XHJcblx0XHRcclxuXHRcdGlmKG5ld05vZGUgaW5zdGFuY2VvZiBBcnJheSB8fCBuZXdOb2RlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbmV3Tm9kZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKXtcclxuXHRcdFx0bmV3Tm9kZS5mb3JFYWNoKGFJdGVtID0+IHBhcmVudC5pbnNlcnRCZWZvcmUoYUl0ZW0sIG9sZE5vZGUpKTtcclxuXHRcdFx0b2xkTm9kZS5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cGFyZW50LnJlcGxhY2VDaGlsZChuZXdOb2RlLG9sZE5vZGUpO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBpbnNlcnQgbm9kZXMgYWZ0ZXIgdGhpcyBub2RlISBQYXJlbnQgbm9kZSBub3QgYXZhaWxhYmxlIVwiKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0Y29uc3QgbmV4dCA9IHRoaXMubmV4dFNpYmxpbmc7XHJcblx0XHRpZihuZXh0KVxyXG5cdFx0XHRQcm90b3R5cGUuYmVmb3JlLmFwcGx5KG5leHQsIGFyZ3VtZW50cyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdFByb3RvdHlwZS5hcHBlbmQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBpbnNlcnQgbm9kZXMgYWZ0ZXIgdGhpcyBub2RlISBQYXJlbnQgbm9kZSBub3QgYXZhaWxhYmxlIVwiKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0Y29uc3QgaW5zZXJ0ZXIgPSAobm9kZSkgPT4ge3BhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcyk7fVxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGNvbnN0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0aWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHRpbnNlcnRlcihhcmcpO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0ZXIpO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydGVyKTtcclxuXHRcdH1cclxuXHR9O1x0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHBhcmVudFNlbGVjdG9yID0gLzpwYXJlbnQoXFwoXFxcIihbXlxcKV0qKVxcXCJcXCkpPy9pO1xyXG5jb25zdCBxdWVyeUV4ZWN1dGVyID0gZnVuY3Rpb24oYUVsZW1lbnQsIGFTZWxlY3Rvcil7XHJcblx0bGV0IG1hdGNoID0gcGFyZW50U2VsZWN0b3IuZXhlYyhhU2VsZWN0b3IpO1xyXG5cdGlmKG1hdGNoKXtcclxuXHRcdGxldCByZXN1bHQgPSBhRWxlbWVudDtcclxuXHRcdGlmKG1hdGNoLmluZGV4ID4gMCl7XHJcblx0XHRcdHJlc3VsdCA9IGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yLnN1YnN0cigwLCBtYXRjaC5pbmRleCkpO1xyXG5cdFx0XHRpZihyZXN1bHQubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVx0XHJcblx0XHRyZXN1bHQgPSByZXN1bHQucGFyZW50KG1hdGNoWzJdKTtcdFx0XHRcclxuXHRcdGlmKHJlc3VsdCl7XHJcblx0XHRcdGxldCBuZXh0U2VsZWN0b3IgPSBhU2VsZWN0b3Iuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XHJcblx0XHRcdGlmKG5leHRTZWxlY3Rvci5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5maW5kKG5leHRTZWxlY3Rvcik7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJRdWVyeVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgbm9kZXMgPSBbXTtcclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpe1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBxdWVyeUV4ZWN1dGVyKHRoaXMsIGFyZyk7XHJcblx0XHRcdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRcdFx0bm9kZXMucHVzaChyZXN1bHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCByZXN1bHQgPSBOb2RlTGlzdC5mcm9tLmFwcGx5KG51bGwsIG5vZGVzKTtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuaXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCB0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1x0XHRcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKXtcclxuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYXRjaGVzKGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXS5sZW5ndGggPT09IFwibnVtYmVyXCIpe1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbHRlci5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdGlmKHRoaXMubWF0Y2hlcyhmaWx0ZXJbaV0pKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKCF0aGlzLnBhcmVudE5vZGUpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHRcdFxyXG5cdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdFx0dHJ5e1xyXG5cdFx0XHRcdHdoaWxlKHBhcmVudCAmJiAhcGFyZW50LmlzKGFyZ3VtZW50c1swXSkpXHJcblx0XHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50KGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdH1jYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJ0aGlzOlwiLCB0aGlzLCBcInBhcmVudDpcIiwgcGFyZW50LCBcImVycm9yOlwiLCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlKHBhcmVudCl7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHQpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLnNlbGVjdG9yID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCB0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYodGhpcy5pZClcclxuXHRcdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHRcdGVsc2V7XHRcdFx0XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYocGFyZW50KXtcclxuXHRcdFx0XHRsZXQgc2FtZVRhZ1NpYmxpbmdzID0gcGFyZW50LmZpbmQoXCI6c2NvcGU+XCIgKyBzZWxlY3Rvcik7XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNhbWVUYWdTaWJsaW5ncyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBzYW1lVGFnU2libGluZ3MuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApXHJcblx0XHRcdFx0XHRcdHNlbGVjdG9yICs9ICc6bnRoLWNoaWxkKCcgKyAoaW5kZXggKyAxKSArICcpJztcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHBhcmVudC5zZWxlY3RvcigpO1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRTZWxlY3RvciA/IHBhcmVudFNlbGVjdG9yICsgXCI+XCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xyXG5cdFx0XHR9IFxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3I7XHJcblx0XHR9XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGFRdWVyeSkge1x0XHRcdFxyXG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xyXG5cdFx0d2hpbGUobm9kZSl7XHJcblx0XHRcdGxldCBjbG9zZXN0cyA9IG5vZGUuZmluZChhUXVlcnkpO1xyXG5cdFx0XHRpZihjbG9zZXN0cyAmJiBjbG9zZXN0cy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiBjbG9zZXN0cztcclxuXHRcdFx0ZWxzZSBpZihub2RlLmlzKGFRdWVyeSkpXHJcblx0XHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20obm9kZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQoKTtcdFx0XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUubmVzdGVkID0gZnVuY3Rpb24oYVF1ZXJ5KXtcclxuXHRcdGlmKHRoaXMuaXMoYVF1ZXJ5KSlcclxuXHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20odGhpcyk7XHRcclxuXHRcdFxyXG5cdFx0bGV0IG5lc3RlZCA9IHRoaXMuZmluZChhUXVlcnkpO1xyXG5cdFx0aWYobmVzdGVkICYmIG5lc3RlZC5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmVzdGVkO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzLnBhcmVudChhUXVlcnkpKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuXHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlJlYWR5RXZlbnRTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0UHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24oYUZ1bmN0aW9uLCBvbmNlKXtcdFxyXG5cdFx0dGhpcy5vbihcInJlYWR5XCIsIGFGdW5jdGlvbiwgb25jZSk7XHJcblx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIilcdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwicmVhZHlcIik7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IEhJREVWQUxVRSA9IFwibm9uZVwiO1xyXG5cclxuY29uc3QgaXNIaWRkZW4gPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IEhJREVWQUxVRVxyXG59O1xyXG5cclxuY29uc3QgaW5pdCA9IChlbGVtZW50KSA9PiB7XHRcclxuXHRsZXQgZGlzcGxheSA9ICFpc0hpZGRlbihlbGVtZW50KSA/IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA6IFwiXCI7XHJcblx0XHJcblx0ZWxlbWVudC5zaG93ID0gKGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH0pLmJpbmQoZWxlbWVudCk7XHJcblx0XHJcblx0ZWxlbWVudC5oaWRlID0gKGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBISURFVkFMVUU7XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fSkuYmluZChlbGVtZW50KTtcclxuXHRcclxuXHRyZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJTaG93SGlkZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGluaXQodGhpcykuc2hvdy5hcHBseShudWxsLCBhcmd1bWVudHMpXHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpbml0KHRoaXMpLmhpZGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS50b2dnbGVTaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaXNIaWRkZW4odGhpcykgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG5cdH07XHJcblxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBJbnB1dFR5cGVzID0gW1xyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJzZWxlY3RcIixcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG5cdFx0XHRcdGlmKG9wdGlvbi5zZWxlY3RlZClcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKCl7XHRcdFx0XHRcclxuXHRcdFx0bGV0IHZhbHVlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR3aGlsZShhcmcpe1xyXG5cdFx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSlcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoYXJnKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChhcmcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWVzO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+PSAwKTtcdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cdFx0XHRcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdXCIsXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZih0aGlzLnZhbHVlID09IFwib25cIiB8fCB0aGlzLnZhbHVlID09IFwib2ZmXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tlZDtcclxuXHRcdFx0ZWxzZSBpZih0aGlzLmNoZWNrZWQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHRcdFx0XHRcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRpZih0eXBlb2YgYVZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWU7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLnZhbHVlID09IGFWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZihBcnJheS5pc0FycmF5KGFWYWx1ZSkpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlLmluZGV4T2YodGhpcy52YWx1ZSkgPj0gMDtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHR9XHJcblx0fVxyXG5dO1xyXG5cclxuY29uc3QgRGVmYXVsdElucHV0VHlwZSA9IHtcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImlucHV0XCIpO1xyXG5cdFx0fVx0XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnB1dFR5cGUgPSBmdW5jdGlvbihhRWxlbWVudCl7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IElucHV0VHlwZXMubGVuZ3RoOyBpKyspXHJcblx0XHRpZihhRWxlbWVudC5pcyhJbnB1dFR5cGVzW2ldLnNlbGVjdG9yKSlcclxuXHRcdFx0cmV0dXJuIElucHV0VHlwZXNbaV07XHRcdFxyXG5cdHJldHVybiBEZWZhdWx0SW5wdXRUeXBlO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHR5cGUgPSBnZXRJbnB1dFR5cGUodGhpcyk7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0eXBlLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0eXBlLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi9kb20vRXZlbnRUYXJnZXRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZVwiO1xyXG5pbXBvcnQgXCIuL2RvbS9FbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50RnJhZ21lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTElucHV0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxTZWxlY3RFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVMaXN0XCI7XHJcbmltcG9ydCBcIi4vZG9tL0h0bWxDb2xsZWN0aW9uXCI7XHJcbmltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbiIsImNvbnN0IERlbGVnYXRlckJ1aWxkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRhcmdzLmZvckVhY2goIHRhcmdldCA9PntcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcclxuXHRcdC5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIG5hbWUpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHNvdXJjZVtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcHJvcC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdHNvdXJjZVtuYW1lXSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBuYW1lLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcdH07XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZWxlZ2F0ZXJCdWlsZGVyOyIsImNvbnN0IGV4dGVuZFByb3RvdHlwZSA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCB0eXBlID0gYXJncy5zaGlmdCgpO1x0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGV4dGVuZGVyID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0ZXh0ZW5kZXIodHlwZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kUHJvdG90eXBlOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuY29uc3QgRVhURU5TSU9OU19NQVAgPSBVdGlscy5nbG9iYWxWYXIoXCJfX19ET01fQVBJX0VYVEVOU0lPTl9NQVBfX19cIiwge30pO1xyXG5jb25zdCBFeHRlbmRlciA9IGZ1bmN0aW9uKGFOYW1lLCBhRXh0ZW50aW9uKXtcclxuXHRyZXR1cm4gZnVuY3Rpb24oYVR5cGUpe1x0XHJcblx0XHRsZXQgZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW2FUeXBlLm5hbWVdO1xyXG5cdFx0aWYoIWV4dGVuc2lvbnMpXHJcblx0XHRcdGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFthVHlwZS5uYW1lXSA9IHt9O1x0XHRcclxuXHRcdFxyXG5cdFx0aWYoIWV4dGVuc2lvbnNbYU5hbWVdKXtcclxuXHRcdFx0ZXh0ZW5zaW9uc1thTmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRhRXh0ZW50aW9uKGFUeXBlLnByb3RvdHlwZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUud2FybihcImR1cGxpY2F0ZWQgbG9hZCBvZiBleHRlbnNpb24gXFxcIlwiICsgYU5hbWUgKyBcIlxcXCIhXCIpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dGVuZGVyOyIsImNvbnN0IFV0aWxzID0ge1xyXG5cdGdsb2JhbCA6ICgoKSA9PiB7XHJcblx0XHRpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gd2luZG93O1xyXG5cdFx0aWYodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbDtcclxuXHRcdGlmKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gc2VsZjtcclxuXHRcdHJldHVybiB7fTtcdFx0XHJcblx0fSkoKSxcclxuXHRnbG9iYWxWYXIgOiBmdW5jdGlvbihhTmFtZSwgYUluaXRWYWx1ZSl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBVdGlscy5nbG9iYWxbYU5hbWVdID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRVdGlscy5nbG9iYWxbYU5hbWVdID0gYUluaXRWYWx1ZTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFV0aWxzLmdsb2JhbFthTmFtZV07XHRcdFxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyIsImltcG9ydCB7IGluaXRUaW1lb3V0LCB0cmlnZ2VyVGltZW91dCB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbVwiO1xuaW1wb3J0IHsgYXR0cmlidXRlQ2hhbmdlRXZlbnRuYW1lLCBjb21wb25lbnRFdmVudG5hbWUgfSBmcm9tIFwiLi91dGlscy9FdmVudEhlbHBlclwiO1xuaW1wb3J0IFdlYWtEYXRhIGZyb20gXCIuL3V0aWxzL1dlYWtEYXRhXCI7XG5pbXBvcnQgUmVhZHkgZnJvbSBcIi4vUmVhZHlcIjtcblxuY29uc3QgVElNRU9VVFMgPSBuZXcgV2Vha0RhdGEoKTtcbmNvbnN0IGluaXQgPSAoY29tcG9uZW50KSA9PiB7XG5cdGNvbnN0IGRhdGEgPSBUSU1FT1VUUy5kYXRhKGNvbXBvbmVudCk7XG5cdGlmIChkYXRhLmluaXRpYWxpemUpIGNsZWFyVGltZW91dChkYXRhLmluaXRpYWxpemUpO1xuXG5cdGRhdGEuaW5pdGlhbGl6ZSA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuXHRcdGRlbGV0ZSBkYXRhLmluaXRpYWxpemU7XG5cblx0XHRQcm9taXNlLnJlc29sdmUoY29tcG9uZW50LmluaXQoKSkudGhlbigoKSA9PiB7XG5cdFx0XHRjb21wb25lbnQucmVhZHkucmVzb2x2ZSgpO1xuXHRcdFx0Y29tcG9uZW50LnRyaWdnZXIoY29tcG9uZW50RXZlbnRuYW1lKFwiaW5pdGlhbHplZFwiLCBjb21wb25lbnQpKTtcblx0XHR9KTtcblx0fSwgaW5pdFRpbWVvdXQpO1xufTtcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucmVhZHkgPSBSZWFkeSgpO1xuXHR9XG5cblx0YXN5bmMgaW5pdCgpIHt9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0aWYodGhpcy5vd25lckRvY3VtZW50ID09IGRvY3VtZW50KVxuXHRcdFx0aW5pdCh0aGlzKTtcblx0fVxuXG5cdGFkb3B0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG9sZFZhbHVlICE9IG5ld1ZhbHVlICYmIHRoaXMuaXNDb25uZWN0ZWQpIHtcblx0XHRcdHRoaXMudHJpZ2dlcih0cmlnZ2VyVGltZW91dCwgYXR0cmlidXRlQ2hhbmdlRXZlbnRuYW1lKG5hbWUsIHRoaXMpKTtcblx0XHRcdHRoaXMudHJpZ2dlcih0cmlnZ2VyVGltZW91dCwgY29tcG9uZW50RXZlbnRuYW1lKFwiY2hhbmdlXCIsIHRoaXMpKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBvbmVudFByZWZpeCA9IFwiZC1cIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVDaGFuZ2VFdmVudFByZWZpeCA9IFwiYXR0cmlidXRlLVwiO1xuZXhwb3J0IGNvbnN0IGluaXRUaW1lb3V0ID0gMTAwO1xuZXhwb3J0IGNvbnN0IHRyaWdnZXJUaW1lb3V0ID0gMTAwO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRsZXQgcmVzb2x2ZSAsIHJlamVjdCA9IG51bGw7XG5cdGNvbnN0IHJlc3VsdCA9IG5ldyBQcm9taXNlKChyLCBlKSA9PiB7XG5cdFx0cmVzb2x2ZSA9IHI7XG5cdFx0cmVqZWN0ID0gZTtcblx0fSk7XG5cblx0cmVzdWx0LnJlc29sdmUgPSByZXNvbHZlO1xuXHRyZXN1bHQucmVqZWN0ID0gcmVqZWN0O1xuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgY29tcG9uZW50UHJlZml4IH0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgdG9Ob2RlTmFtZSA9IChuYW1lLCBwcmVmaXgpID0+IHtcblx0aWYodHlwZW9mIHByZWZpeCA9PT0gXCJzdHJpbmdcIilcblx0XHRyZXR1cm4gcHJlZml4ICsgbmFtZTtcblx0XHRcblx0cmV0dXJuIGNvbXBvbmVudFByZWZpeCArIG5hbWU7XG59O1xuXG5leHBvcnQgY29uc3QgZGVmaW5lID0gZnVuY3Rpb24oY2xhenosIG9wdGlvbnMpIHtcblx0Y29uc3Qgbm9kZW5hbWUgPSBjbGF6ei5OT0RFTkFNRTtcblx0aWYgKCFjdXN0b21FbGVtZW50cy5nZXQobm9kZW5hbWUpKSB7XG5cdFx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKG5vZGVuYW1lLCBjbGF6eiwgb3B0aW9ucyk7XG5cdH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lOyBcbiIsImltcG9ydCB7YXR0cmlidXRlQ2hhbmdlRXZlbnRQcmVmaXh9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudEV2ZW50bmFtZSA9IChldmVudFR5cGUsIG5vZGUgKSA9PiB7XHRcblx0bGV0IG5vZGVuYW1lID0gXCJ1bnN1cHBvcnRlZFwiO1xuXHRpZih0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIilcblx0XHRub2RlbmFtZSA9IG5vZGU7XG5cdGVsc2UgaWYobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KVxuXHRcdG5vZGVuYW1lID0gbm9kZS5ub2RlTmFtZTtcblx0ZWxzZSBpZih0eXBlb2Ygbm9kZS5OT0RFTkFNRSA9PT0gXCJzdHJpbmdcIilcblx0XHRub2RlbmFtZSA9IG5vZGUuTk9ERU5BTUU7XG5cdGVsc2UgdGhyb3cgbmV3IEVycm9yKHR5cGVvZiBub2RlICsgXCIgaXMgbm90IHN1cHBvcnRlZCBhcyBwcmFtIG5vZGUhXCIpO1xuXHRcbiAgIHJldHVybiBub2RlbmFtZS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBldmVudFR5cGU7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVDaGFuZ2VFdmVudG5hbWUgPSAoYXR0cmlidXRlLCBub2RlICkgPT4ge1xuICAgIHJldHVybiBjb21wb25lbnRFdmVudG5hbWUoYXR0cmlidXRlQ2hhbmdlRXZlbnRQcmVmaXggKyBcIi1cIiArIGF0dHJpYnV0ZSwgbm9kZSk7XG59OyIsImV4cG9ydCBjb25zdCBmaW5kUGFyZW50ID0gKG5vZGUsIGNoZWNrKSA9PiB7XG5cdHdoaWxlKG5vZGUgIT0gbnVsbCkge1x0XHRcbiAgICAgICAgaWYoY2hlY2sobm9kZSkpXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQoKTtcdFx0XHRcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBmaW5kQ2xvc2VzdCA9IChub2RlLCBkZXB0aCwgY2hlY2spID0+IHtcbiAgICBpZihjaGVjayhub2RlKSlcbiAgICAgICAgcmV0dXJuIHtub2RlLCBkZXB0aH1cblxuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGZvcihsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZE5vZGVzKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGZpbmRDbG9zZXN0KGNoaWxkLCBkZXB0aCArIDEsIGNoZWNrKTtcblxuICAgICAgICBpZihpdGVtICE9IG51bGwgJiYgKHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdC5kZXB0aCA+IGl0ZW0uZGVwdGgpKSAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3QgZmluZENsb3Nlc3RJbkRlcHRoID0gKG5vZGUsIGNoZWNrKSA9PiB7XG4gICAgY29uc3QgY2xvc2VzdCA9IGZpbmRDbG9zZXN0KG5vZGUsIDAsIGNoZWNrKTtcbiAgICByZXR1cm4gY2xvc2VzdCAhPSBudWxsID8gY2xvc2VzdC5ub2RlIDogbnVsbDtcbn0iLCJpbXBvcnQge1RlbXBsYXRlfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlXCI7XG5leHBvcnQgY29uc3QgQVRUUl9URU1QTEFURSA9IFwidGVtcGxhdGVcIjtcblxuY29uc3QgZ2V0VGVtcGxhdGUgPSAobm9kZSkgPT4ge1xuXHRsZXQgdGVtcGxhdGUgPSBub2RlLmZpbmQoXCI6c2NvcGUgPiB0ZW1wbGF0ZVwiKS5maXJzdCgpO1xuXHRpZiAoISF0ZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlO1xuXHRjb25zdCB2YWx1ZSA9IG5vZGUuYXR0cihBVFRSX1RFTVBMQVRFKTtcblx0aWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG5cdHRyeSB7XG5cdFx0dGVtcGxhdGUgPSBmaW5kKHZhbHVlKS5maXJzdCgpO1xuXHRcdGlmICghIXRlbXBsYXRlKSByZXR1cm4gdGVtcGxhdGU7XG5cdH0gY2F0Y2ggKGUpIHt9XG5cdHJldHVybiBuZXcgVVJMKHZhbHVlLCBsb2NhdGlvbi5ocmVmKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkVGVtcGxhdGUgPSBhc3luYyAobm9kZSwgZGVmYXVsdFRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpID0+IHtcblx0Y29uc3QgdGVtcGxhdGUgPSBnZXRUZW1wbGF0ZShub2RlKTtcblx0aWYodGVtcGxhdGUpXG5cdFx0cmV0dXJuIFRlbXBsYXRlLmxvYWQodGVtcGxhdGUsIGNhY2hlLCBhbGlhcyk7XG5cblx0cmV0dXJuIGRlZmF1bHRUZW1wbGF0ZTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2Vha0RhdGEge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLndlYWttYXAgPSBuZXcgV2Vha01hcCgpO1xuXHR9XG5cblx0ZGF0YShyZWZlcmVuY2UpIHtcblx0XHRsZXQgZGF0YSA9IHRoaXMud2Vha21hcC5nZXQocmVmZXJlbmNlKTtcblx0XHRpZiAoIWRhdGEpIHtcblx0XHRcdGRhdGEgPSB7fTtcblx0XHRcdHRoaXMud2Vha21hcC5zZXQocmVmZXJlbmNlLCBkYXRhKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxuXHR2YWx1ZShyZWZlcmVuY2UsIGtleSwgdmFsdWUpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSByZXR1cm4gdGhpcy5kYXRhKHJlZmVyZW5jZSlba2V5XTtcblx0XHRlbHNlIHRoaXMuZGF0YShyZWZlcmVuY2UpW2tleV0gPSB2YWx1ZTtcblx0fVxufTtcblxuIiwiaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL3NyYy9UZW1wbGF0ZS5qc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3NyYy9SZW5kZXJlci5qc1wiO1xuXG5leHBvcnQge1RlbXBsYXRlLCBSZW5kZXJlcn07IiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmhhc2hjb2RlKVxyXG5cdFN0cmluZy5wcm90b3R5cGUuaGFzaGNvZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcclxuXHRcdGxldCBoYXNoID0gMDtcclxuXHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjO1xyXG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGhhc2g7XHJcblx0fTsiLCJpbXBvcnQgV2FpdCBmcm9tIFwiLi9XYWl0LmpzXCI7XG5cbmNvbnN0IENMT1NFX1RJTUVPVVQgPSAyMDAwO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG5cdGNvbnN0cnVjdG9yKHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290LCBtb2RlID0gXCJyZXBsYWNlXCIsIHRhcmdldCA9IG51bGwsIHBhcmVudCA9IG51bGwgfSkge1xuXHRcdGlmICghcmVzb2x2ZXIpIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwicmVzb2x2ZXJcXFwiIGlzIHJlcXVpcmVkIVwiKTtcblx0XHRpZiAoIXJlbmRlcmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcInJlbmRlcmVyXFxcIiBpcyByZXF1aXJlZCFcIik7XG5cdFx0aWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVyIFxcXCJ0ZW1wbGF0ZVxcXCIgaXMgcmVxdWlyZWQhXCIpO1xuXHRcdGlmICghY29udGFpbmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcImNvbnRhaW5lclxcXCIgaXMgcmVxdWlyZWQhXCIpO1xuXHRcdGlmICghcm9vdCkgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVyIFxcXCJyb290XFxcIiBpcyByZXF1aXJlZCFcIik7XG5cblx0XHR0aGlzLnJlYWR5SGFuZGxlcyA9IFtdO1xuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMucmVzb2x2ZXIgPSByZXNvbHZlcjtcblx0XHR0aGlzLm1vZGUgPSBtb2RlO1xuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcblx0XHR0aGlzLnJvb3QgPSByb290O1xuXHRcdHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuY2xvc2VkID0gZmFsc2U7XG5cdFx0dGhpcy53YWl0ID0gV2FpdCh0aGlzKTtcblxuXG5cdFx0LyogZXhlY3V0aW9uIGZsYWdzICovXG5cdFx0dGhpcy5zdG9wID0gZmFsc2U7XG5cdFx0dGhpcy5pZ25vcmUgPSBmYWxzZTtcblx0fVxuXG5cdGFzeW5jIGZpbmlzaChjYWxsYmFjaykge1xuXHRcdGlmICh0aGlzLmNsb3NlZClcblx0XHRcdHJldHVybjsgLy9jb250ZXh0IGlzIHJlYWR5IGFuZCBjbG9zZWRcblxuXHRcdGlmICh0aGlzLnBhcmVudClcblx0XHRcdHRoaXMucGFyZW50LmZpbmlzaChjYWxsYmFjayk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5yZWFkeShjYWxsYmFjayk7XG5cdH07XG5cblx0YXN5bmMgcmVhZHkoY2FsbGJhY2spIHtcblx0XHRpZiAodGhpcy5jbG9zZWQpXG5cdFx0XHRyZXR1cm47IC8vY29udGV4dCBpcyByZWFkeSBhbmQgY2xvc2VkXG5cblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0XHRjYWxsYmFjay5mb3JFYWNoKChjYWxsYmFjaykgPT4geyB0aGlzLnJlYWR5ID0gY2FsbGJhY2s7IH0pO1xuXHRcdFx0ZWxzZSBpZiAoY2FsbGJhY2sgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKVxuXHRcdFx0XHR0aGlzLnJlYWR5SGFuZGxlcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZWQgPSB0cnVlO1xuXHRcdFx0Ly93YWl0IG9mIGFsbCBzdWIgY29udGV4dCB0byBiZSBjbG9zZWQgd2l0aCBhbiBtYXhpbXVtIGFtb3VudCBvZiB0aW1lXG5cblx0XHRcdGlmICh0aGlzLnJlYWR5SGFuZGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdFx0XHRcdFByb21pc2UuYWxsKHRoaXMucmVhZHlIYW5kbGVzLm1hcChoYW5kbGUgPT4gaGFuZGxlIGluc3RhbmNlb2YgUHJvbWlzZSA/IGhhbmRsZSA6IGhhbmRsZSh0aGlzKSkpLFxuXHRcdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlamVjdCwgZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IobmV3IEVycm9yKFwidGltZW91dFwiKSk7XG5cdFx0XHRcdFx0XHRcdH0sIDIwMDApXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcdFx0XHRcblx0XHRcdFx0XHR0aHJvdyBlXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy53YWl0LmZpbmlzaGVkKCk7XG5cdFx0fVxuXHR9XG5cblx0c3ViQ29udGV4dCh7IHJlc29sdmVyID0gdGhpcy5yZXNvbHZlciwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCB9ID0ge30pIHtcblx0XHRjb25zdCBzdWIgPSBuZXcgQ29udGV4dCh7IHJlc29sdmVyLCByZW5kZXJlciwgdGVtcGxhdGUsIGNvbnRhaW5lciwgbW9kZSwgcm9vdCwgdGFyZ2V0LCBwYXJlbnQ6IHRoaXMgfSk7XG5cdFx0Ly90aGlzLnJlYWR5KHN1Yi53YWl0KTtcblx0XHRyZXR1cm4gc3ViO1xuXHR9XG5cblx0Y2xvbmUoeyByZXNvbHZlciA9IHRoaXMucmVzb2x2ZXIsIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlciwgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlLCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcm9vdCA9IHRoaXMucm9vdCwgbW9kZSA9IHRoaXMubW9kZSwgdGFyZ2V0ID0gdGhpcy50YXJnZXQgfSA9IHt9KSB7XG5cdFx0cmV0dXJuIG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCByb290LCB0YXJnZXQsIHBhcmVudDogdGhpcyB9KTtcblx0fVxufTsiLCJjb25zdCBERUZJTkVEX0RJUkVDVElWRVMgPSBbXTtcblxuY29uc3QgZGVmaW5lRGlyZWN0aXZlID0gKHsgZGlyZWN0aXZlIH0pID0+IHtcblx0aWYgKCEoZGlyZWN0aXZlIGluc3RhbmNlb2YgRGlyZWN0aXZlKSlcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbXBsZW1lbnRhdGlvbiBkb3NuJ3QgZXh0ZW5kIERpcmVjdGl2ZSBjbGFzcyFcIik7XG5cblx0aWYgKGRpcmVjdGl2ZS5yYW5rIDwgRGlyZWN0aXZlLk1JTl9SQU5LKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSByYW5rIG9mIGEgZGlyZWN0aXZlIGNhbid0IGJlIGxvd2VyIGFzIFwiICsgRGlyZWN0aXZlLk1JTl9SQU5LICsgXCIhXCIpO1xuXG5cdGlmIChkaXJlY3RpdmUucmFuayA+IERpcmVjdGl2ZS5NQVhfUkFOSylcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcmFuayBvZiBhIGRpcmVjdGl2ZSBjYW4ndCBiZSBncmF0ZXIgYXMgXCIgKyBEaXJlY3RpdmUuTUFYX1JBTksgKyBcIiFcIik7XG5cblx0REVGSU5FRF9ESVJFQ1RJVkVTLnB1c2goZGlyZWN0aXZlKTtcblx0REVGSU5FRF9ESVJFQ1RJVkVTLnNvcnQoKGEsIGIpID0+IHtcblx0XHRjb25zdCBwaGFzZSA9IGEucGhhc2UgLSBiLnBoYXNlO1xuXHRcdGlmKHBoYXNlID09IDApXG5cdFx0XHRyZXR1cm4gYS5yYW5rIC0gYi5yYW5rO1xuXHRcdFx0XG5cdFx0cmV0dXJuIHBoYXNlO1xuXHR9KTtcbn07XG5cbmNvbnN0IFBIQVNFID0ge1xuXHRpbml0OiAwLFxuXHRkYXRhOiAxLFxuXHR0ZW1wbGF0ZTogMixcblx0Y29udGVudDogMyxcblx0ZmluaXNoOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmUge1xuXG5cdHN0YXRpYyBnZXQgUEhBU0UoKSB7IHJldHVybiBQSEFTRSB9O1xuXHRzdGF0aWMgZ2V0IE1JTl9SQU5LKCkgeyByZXR1cm4gMCB9O1xuXHRzdGF0aWMgZ2V0IE1BWF9SQU5LKCkgeyByZXR1cm4gMTAwMDAwIH07XG5cblx0Y29uc3RydWN0b3IoKSB7IH07XG5cblx0Z2V0IG5hbWUoKSB7IH1cblx0Z2V0IHJhbmsoKSB7IH1cblx0Z2V0IHBoYXNlKCkge3JldHVybiBQSEFTRS5maW5pc2h9XG5cblx0LyoqXG5cdCAqIG5lZWQgdG8gYmUgaW1wbGVtZW50ZWRcblx0ICogXG5cdCAqIHJldHVybiBEaXJlY3RpdmVSZXN1bHRcblx0ICovXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG5cblxuXHRzdGF0aWMgZGVmaW5lKG9wdGlvbikge1xuXHRcdGRlZmluZURpcmVjdGl2ZShvcHRpb24pO1xuXHR9XG5cblx0c3RhdGljIGdldCBkaXJlY3RpdmVzKCkge1xuXHRcdHJldHVybiBERUZJTkVEX0RJUkVDVElWRVM7XG5cdH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0aXZlRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50e1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5oaWRkZW4gPSB0cnVlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogbmVlZCB0byBiZSBpbXBsZW1lbnRlZFxuXHQgKiBcblx0ICovXG5cdGFzeW5jIGV4ZWN1dGUoe3RlbXBsYXRlLCBjb250ZXh0fSl7XG5cdFx0Y29udGV4dC5jb250ZW50ID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9O1x0XG59IiwiaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbVwiO1xuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlLmpzXCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0LmpzXCI7XG5pbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vRWxlbWVudC5qc1wiO1xuaW1wb3J0IFwiLi9kaXJlY3RpdmVzXCI7XG5pbXBvcnQgXCIuL2VsZW1lbnRzXCI7XG5cblxuZXhwb3J0IGNvbnN0IFNDT1BFUyA9IHtcblx0YXBwbGljYXRpb246IFwiYXBwbGljYXRpb25cIixcblx0ZGF0YTogXCJkYXRhXCIsXG5cdHJlbmRlcjogXCJyZW5kZXJcIixcblx0Y29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuXHRub2RlOiBcIm5vZGVcIixcblx0ZGlyZWN0aXZlOiBcImRpcmVjdGl2ZVwiXG59O1xuXG5jb25zdCBBUFBMSUNBVElPTl9TQ09QRV9SRVNPTFZFUiA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMuYXBwbGljYXRpb24gfSk7XG5cbmNvbnN0IE1PREVXT1JLRVIgPSB7XG5cdFwicmVwbGFjZVwiOiBhc3luYyAoeyBjb250YWluZXIsIHRhcmdldCA9IG51bGwsIGNvbnRlbnQgfSkgPT4ge1xuXHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdHRhcmdldC5yZXBsYWNlKGNvbnRlbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250YWluZXIuZW1wdHkoKTtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmQoY29udGVudCk7XG5cdFx0fVxuXHR9LFxuXHRcImFwcGVuZFwiOiBhc3luYyAoeyBjb250YWluZXIsIHRhcmdldCA9IG51bGwsIGNvbnRlbnQgfSkgPT4ge1xuXHRcdGlmICh0YXJnZXQpXG5cdFx0XHR0YXJnZXQuYWZ0ZXIoY29udGVudCk7XG5cdFx0ZWxzZVxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcblx0fSxcblx0XCJwcmVwZW5kXCI6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldClcblx0XHRcdHRhcmdldC5iZWZvcmUoY29udGVudCk7XG5cdFx0ZWxzZVxuXHRcdFx0Y29udGFpbmVyLnByZXBlbmQoY29udGVudCk7XG5cdH1cbn07XG5cbmNvbnN0IGxvYWRUZW1wbGF0ZUNvbnRlbnQgPSBhc3luYyAodGVtcGxhdGUsIGNvbnRleHQsIHJlbmRlcmVyKSA9PiB7XG5cdGlmICh0ZW1wbGF0ZSkge1xuXHRcdHRlbXBsYXRlID0gYXdhaXQgVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSlcblx0XHRyZXR1cm4gdGVtcGxhdGUuaW1wb3J0Q29udGVudCgpO1xuXHR9IGVsc2UgaWYgKGNvbnRleHQpXG5cdFx0cmV0dXJuIGNvbnRleHQudGVtcGxhdGU7XG5cdGVsc2UgaWYgKHJlbmRlcmVyLnRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuIGF3YWl0IHJlbmRlcmVyLnRlbXBsYXRlLmltcG9ydENvbnRlbnQoKTtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcihcIk5vIGNvbnRlbnQgdGVtcGxhdGUgc3BlY2lmaWVkIVwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSwgZGF0YSB9ID0ge30pIHtcblx0XHRpZiAodGVtcGxhdGUgJiYgISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlKSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInRlbXBsYXRlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgVGVtcGxhdGUhXCIpO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdHRoaXMucmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLmRhdGEsIGNvbnRleHQ6IGRhdGEgPyBkYXRhIDoge30sIHBhcmVudDogQVBQTElDQVRJT05fU0NPUEVfUkVTT0xWRVIgfSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIFxuXHQgKiBcdFx0Y29udGFpbmVyIEhUTUxFbGVtZW50IC0+IHRhcmdldCB0byByZW5kZXIgaW5cblx0ICogQHBhcmFtXG5cdCAqIFx0XHRkYXRhIE9iamVjdHwuLi4gLT4gZGF0YSB0byB1c2VkIGF0IHJlbmRlcmluZ1xuXHQgKiBAcGFyYW1cblx0ICogXHRcdHRlbXBsYXRlIFRlbXBsYXRlfE5vZGV8Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb258U3RyaW5nIC0+IHRlbXBsYXRlIHRvIHJlbmRlclxuXHQgKiBAcGFyYW1cblx0ICogXHRcdG1vZGUgXCJhcHBlbmRcInxcImluc2VydFwifFwicmVwbGFjZVwiXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0dGFyZ2V0XG5cdCAqL1xuXHRhc3luYyByZW5kZXIoeyB0ZW1wbGF0ZSA9IG51bGwsIGRhdGEgPSBudWxsLCBjb250YWluZXIsIHJvb3QsIG1vZGUsIHRhcmdldCwgY29udGV4dCA9IG51bGwgfSkge1xuXHRcdHRlbXBsYXRlID0gYXdhaXQgbG9hZFRlbXBsYXRlQ29udGVudCh0ZW1wbGF0ZSwgY29udGV4dCwgdGhpcyk7XG5cdFx0bGV0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5yZW5kZXIsIGNvbnRleHQ6IGRhdGEsIHBhcmVudDogY29udGV4dCA/IGNvbnRleHQucmVzb2x2ZXIgOiB0aGlzLnJlc29sdmVyIH0pO1xuXG5cdFx0bGV0IHJlbmRlckNvbnRleHQgPSBjb250ZXh0O1xuXHRcdGlmICghcmVuZGVyQ29udGV4dClcblx0XHRcdHJlbmRlckNvbnRleHQgPSBuZXcgQ29udGV4dCh7IHJlc29sdmVyLCByZW5kZXJlcjogdGhpcywgdGVtcGxhdGUsIGNvbnRhaW5lciwgcm9vdDogcm9vdCA/IHJvb3QgOiBjb250YWluZXIsIG1vZGU6IG1vZGUgPyBtb2RlIDogXCJyZXBsYWNlXCIsIHRhcmdldCB9KTtcblx0XHRlbHNlXG5cdFx0XHRyZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dC5jbG9uZSh7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290LCBtb2RlLCB0YXJnZXQgfSk7XG5cblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlKVxuXHRcdFx0cmVzdWx0ID0gYXdhaXQgdGhpcy5yZW5kZXJOb2RlKHJlbmRlckNvbnRleHQpO1xuXHRcdGVsc2Vcblx0XHRcdHJlc3VsdCA9IGF3YWl0IHRoaXMucmVuZGVyQ29udGFpbmVyKHJlbmRlckNvbnRleHQpXG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgQ29udGV4dClcblx0XHRcdHJlbmRlckNvbnRleHQgPSByZXN1bHQ7XG5cblxuXHRcdGlmIChyZW5kZXJDb250ZXh0LmNvbnRlbnQgJiYgcmVuZGVyQ29udGV4dC5tb2RlKSB7XG5cdFx0XHRjb25zdCBtb2Rld29ya2VyID0gTU9ERVdPUktFUltyZW5kZXJDb250ZXh0Lm1vZGVdO1xuXHRcdFx0aWYgKCFtb2Rld29ya2VyKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgXFxcIlwiICsgcmVuZGVyQ29udGV4dC5tb2RlICsgXCJcXFwiIGlzIG5vdCBzdXBwb3J0ZWQhXCIpXG5cblx0XHRcdGF3YWl0IG1vZGV3b3JrZXIocmVuZGVyQ29udGV4dCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFjb250ZXh0KVxuXHRcdFx0YXdhaXQgcmVuZGVyQ29udGV4dC5yZWFkeSgpO1xuXHRcdGVsc2Vcblx0XHRcdHJlbmRlckNvbnRleHQucmVhZHkoKTtcblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG5cblxuXHRhc3luYyByZW5kZXJDb250YWluZXIoY29udGV4dCkge1xuXHRcdGlmIChjb250ZXh0LnRlbXBsYXRlICYmIGNvbnRleHQudGVtcGxhdGUubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgcmVuZGVyaW5ncyA9IGNvbnRleHQudGVtcGxhdGUubWFwKG5vZGUgPT4ge1xuXHRcdFx0XHQvL3NlcGFyYXRlIG5vZGUgY29udGV4dCBmcm9tIHRoZSBjdXJyZW50IGNvbnRleHRcblx0XHRcdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLm5vZGUsIGNvbnRleHQ6IG51bGwsIHBhcmVudDogY29udGV4dC5yZXNvbHZlciB9KTtcblx0XHRcdFx0cmV0dXJuIHRoaXMucmVuZGVyTm9kZShjb250ZXh0LmNsb25lKHsgdGVtcGxhdGU6IG5vZGUsIHJlc29sdmVyIH0pKVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChyZW5kZXJpbmdzKTtcblx0XHRcdGlmICghcmVzdWx0KVxuXHRcdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gcmVzdWx0XG5cdFx0XHRcdC5maWx0ZXIocmVzdWx0ID0+ICEhcmVzdWx0KVxuXHRcdFx0XHQucmVkdWNlKChjb250ZW50LCByZXN1bHQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBub2RlID0gcmVzdWx0LmNvbnRlbnQ7XG5cdFx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmNvbmNhdChub2RlKTtcblx0XHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbilcblx0XHRcdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmNvbmNhdChBcnJheS5mcm9tKG5vZGUpKTtcblx0XHRcdFx0XHRlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTm9kZSlcblx0XHRcdFx0XHRcdGNvbnRlbnQucHVzaChub2RlKTtcblxuXHRcdFx0XHRcdHJlc3VsdC5yZWFkeSgpO1xuXHRcdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0XHR9LCBbXSk7XG5cblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXHRhc3luYyByZW5kZXJOb2RlKGNvbnRleHQpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29udGV4dC50ZW1wbGF0ZS5ub3JtYWxpemUoKTtcblx0XHRcdGlmIChjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgRWxlbWVudClcblx0XHRcdFx0YXdhaXQgY29udGV4dC50ZW1wbGF0ZS5leGVjdXRlKGNvbnRleHQpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRhd2FpdCB0aGlzLmV4ZWN1dGVEaXJlY3RpdmVzKGNvbnRleHQpO1xuXG5cdFx0XHRpZiAoIWNvbnRleHQuaWdub3JlICYmIGNvbnRleHQuY29udGVudCkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50ID0gY29udGV4dC50ZW1wbGF0ZS5jaGlsZE5vZGVzO1xuXHRcdFx0XHRpZiAoY29udGVudCAmJiBjb250ZW50Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHQvLyBAVE9ETyBhd2FpdCBvciBmaXJlIGFuZCBmb3JnZXQ/Pz9cblx0XHRcdFx0XHRhd2FpdCBjb250ZXh0LnJlbmRlcmVyLnJlbmRlcih7IGNvbnRleHQ6IGNvbnRleHQuY2xvbmUoeyB0ZW1wbGF0ZTogY29udGVudCwgY29udGFpbmVyOiBjb250ZXh0LmNvbnRlbnQgfSkgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbnRleHQuY29udGVudCAmJiBjb250ZXh0LmNvbnRlbnQudGFnTmFtZSAmJiBjb250ZXh0LmNvbnRlbnQudGFnTmFtZSA9PSBcIkpTVExcIilcblx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gY29udGV4dC5jb250ZW50LmNoaWxkTm9kZXM7IC8vc3BlY2lhbCBjYXNlIHRvIHN1cHBvcnQgdGhlIG9sZCBcIjxqc3RsPlwiIHRhZy5cblx0XHRcdFx0XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IHJlbmRlciBub2RlOlwiLCBlLCBjb250ZXh0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlRGlyZWN0aXZlcyhjb250ZXh0KSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInNjb3BlIGNoYWluOlwiLCBjb250ZXh0LnJlbmRlcmVyLmNoYWluLCBcInJlc29sdmVyIGNoYWluXCIsIGNvbnRleHQucmVuZGVyZXIucmVzb2x2ZXIuZnVsbG5hbWUpO1xuXHRcdGNvbnN0IGRpcmVjdGl2ZXMgPSBEaXJlY3RpdmUuZGlyZWN0aXZlcztcblx0XHRjb25zdCBsZW5ndGggPSBkaXJlY3RpdmVzLmxlbmd0aDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAmJiAhY29udGV4dC5zdG9wOyBpKyspIHtcblx0XHRcdGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbaV07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBkaXJlY3RpdmUuZXhlY3V0ZShjb250ZXh0KTtcblx0XHRcdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIENvbnRleHQpXG5cdFx0XHRcdFx0Y29udGV4dCA9IHJlc3VsdDtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGRpcmVjdGl2ZTpcIiwgZSwgZGlyZWN0aXZlLCBjb250ZXh0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgYnVpbGQoeyB0ZW1wbGF0ZSwgZGF0YSB9ID0ge30pIHtcblx0XHRpZiAodGVtcGxhdGUgJiYgdGVtcGxhdGUgaW5zdGFuY2VvZiBQcm9taXNlKVxuXHRcdFx0dGVtcGxhdGUgPSBhd2FpdCB0ZW1wbGF0ZTtcblxuXHRcdHRlbXBsYXRlID0gdGVtcGxhdGUgPyBhd2FpdCBUZW1wbGF0ZS5sb2FkKHRlbXBsYXRlKSA6IG51bGw7XG5cdFx0cmV0dXJuIG5ldyBSZW5kZXJlcih7IHRlbXBsYXRlLCBkYXRhIH0pO1xuXHR9O1xuXG5cdHN0YXRpYyBhc3luYyByZW5kZXIoeyBjb250YWluZXIsIGRhdGEsIHRlbXBsYXRlLCBtb2RlLCB0YXJnZXQgfSkge1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUsIGRhdGEgfSk7XG5cdFx0cmV0dXJuIHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciwgbW9kZSwgdGFyZ2V0IH0pO1xuXHR9XG59IiwiaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvamF2YXNjcmlwdC9TdHJpbmcuanNcIjtcblxuY29uc3QgQ0FDSEUgPSB7fTtcbmNvbnN0IGdldEtleSA9ICh0ZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKSA9PiB7XG5cdGlmKCFjYWNoZSlcblx0XHRyZXR1cm4gbnVsbDtcblx0XG5cdGxldCBrZXkgPSBudWxsO1xuXHRpZihhbGlhcylcblx0XHRrZXkgPSBhbGlhcztcdFxuXHRlbHNlIGlmKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gXCJzdHJpbmdcIilcblx0XHRrZXkgPSB0ZW1wbGF0ZTtcblx0ZWxzZSBpZih0ZW1wbGF0ZSBpbnN0YW5jZW9mIFVSTClcblx0XHRrZXkgPSB0ZW1wbGF0ZS50b1N0cmluZygpO1xuXHRlbHNlIGlmKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXG5cdFx0a2V5ID0gdGVtcGxhdGUuc2VsZWN0b3IoKTtcblx0XG5cdGlmKGtleSlcblx0XHRyZXR1cm4ga2V5Lmhhc2hjb2RlKCk7XG5cdFxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGZyb21VUkwgPSBhc3luYyAodXJsLCBjYWNoZSwga2V5KSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLnRvU3RyaW5nKCkpO1xuXHRjb25zdCBzb3VyY2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG5cdHJldHVybiBmcm9tU291cmNlKHNvdXJjZSwgY2FjaGUsIGtleSk7XG59O1xuXG5jb25zdCBmcm9tU291cmNlID0gYXN5bmMgKHNvdXJjZSwgY2FjaGUsIGtleSkgPT4ge1xuXHRyZXR1cm4gZnJvbUVsZW1lbnQoY3JlYXRlKHNvdXJjZSwgdHJ1ZSksIGNhY2hlLCBrZXkpO1xufTtcblxuY29uc3QgZnJvbUVsZW1lbnQgPSBhc3luYyAoZWxlbWVudCwgY2FjaGUsIGtleSkgPT4ge1x0XG5cdGxldCB0ZW1wbGF0ZSA9IG51bGxcblx0aWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpXHRcdFx0XG5cdFx0dGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUoZWxlbWVudCk7XG5cdGVsc2Uge1xuXHRcdHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRcdGlmKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgZWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0dGVtcGxhdGUuYXBwZW5kKGVsZW1lbnQpO1xuXHRcdGVsc2Vcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIHR5cGUgaXMgbm90IHN1cHBvcnRlZCFcIik7XHRcdFx0XG5cdFx0XG5cdFx0dGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUodGVtcGxhdGUsIGtleSk7XG5cdH1cblx0XG5cdGlmKCF0ZW1wbGF0ZSlcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUZW1wbGF0ZSBjYW4ndCBsb2FkZWQhXCIpO1xuXHRcblx0aWYoY2FjaGUgJiYga2V5KVxuXHRcdENBQ0hFW2tleV0gPSB0ZW1wbGF0ZTtcblx0XG5cdHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlIHtcdFxuXHRjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwga2V5KXtcdFx0XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdHRoaXMua2V5ID0ga2V5O1x0XG5cdH1cblx0XG5cdGltcG9ydENvbnRlbnQoZG9jPWRvY3VtZW50KXtcblx0XHRsZXQgaW1wb3J0ZWQgPSBkb2MuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLCB0cnVlKTtcblx0XHRyZXR1cm4gaW1wb3J0ZWQuY29udGVudC5jaGlsZE5vZGVzO1xuXHR9XG5cdFxuXHRyZW1vdmUoKSB7XG5cdFx0aWYodGhpcy5rZXkgJiYgQ0FDSEVbdGhpcy5rZXldKVxuXHRcdFx0ZGVsZXRlIENBQ0hFW3RoaXMua2V5XTtcdFx0XG5cdH07XG5cdFxuXHRzdGF0aWMgYXN5bmMgbG9hZCh0ZW1wbGF0ZSwgY2FjaGUgPSB0cnVlLCBhbGlhcyA9IG51bGwpe1xuXHRcdGlmKHRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGUpXG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0XG5cdFx0Y29uc3Qga2V5ID0gZ2V0S2V5KHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpO1xuXHRcdGlmKGtleSAmJiBDQUNIRVtrZXldKVxuXHRcdFx0cmV0dXJuIENBQ0hFW2tleV07XG5cdFx0ZWxzZSBpZih0eXBlb2YgdGVtcGxhdGUgPT09IFwic3RyaW5nXCIpe1xuXHRcdFx0cmV0dXJuIGZyb21Tb3VyY2UodGVtcGxhdGUsIGNhY2hlLCBrZXkpO1xuXHRcdH1lbHNlIGlmKHRlbXBsYXRlIGluc3RhbmNlb2YgVVJMKVxuXHRcdFx0cmV0dXJuIGF3YWl0IGZyb21VUkwodGVtcGxhdGUsIGNhY2hlLCBrZXkpO1xuXHRcdGVsc2UgaWYodGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlIHx8IHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgdGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCB0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpXG5cdFx0XHRyZXR1cm4gZnJvbUVsZW1lbnQodGVtcGxhdGUsIGNhY2hlLCBrZXkpO1xuXHRcdFxuXHRcdG5ldyBFcnJvcihcIlRoZSB0ZW1wbGF0ZSBpc24ndCBhIGFsbG93ZWQgdHlwZSEgLT4gW1N0cmluZ3xVUkx8Tm9kZXxOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbnxUZW1wbGF0ZV0gcmVxdWlyZWQhXCIpO1xuXHR9XHRcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAob2JqZWN0KSA9PiB7XG5cdGxldCBmaW5pc2hlZCA9IG51bGw7XG5cdGNvbnN0IHdhaXQgPSAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRmaW5pc2hlZCA9IHJlc29sdmU7XG5cdH0pO1xuXHR3YWl0Lm9iamVjdCA9IG9iamVjdDtcblx0XG5cdHdhaXQuZmluaXNoZWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgZmluaXNoZWQoKTtcblx0fTtcblx0XG5cdHJldHVybiB3YWl0O1xufTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY29uc3QgQVRUUklCVVRFX05BTUUgPSAvKGpzdGwpPyhcXD8pPyhAKT8oW15cXD9AXSspL2k7XG5cbmNvbnN0IGJpbmRBdHRyaWJ1dGUgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgY29udGVudCwgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cdFx0XG5cdGxldCBhdHRyaWJ1dGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKG5hbWUpO1xuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/XCIgKyBuYW1lKTtcblx0Y29uc3QgaGFzVmFsdWUgPSBpc1ZhbHVlKGF0dHJpYnV0ZSk7XG5cdFxuXHRpZiAoY29uZGl0aW9uICYmIGhhc1ZhbHVlKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKVxuXHRcdFx0Y29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH0gZWxzZSBpZiAoY29uZGl0aW9uKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKVxuXHRcdFx0Y29udGVudC5hdHRyKG5hbWUsIHRydWUpO1xuXHR9IGVsc2UgaWYgKGhhc1ZhbHVlKSB7XG5cdFx0Y29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH1cbn07XG5cbmNvbnN0IGlzVmFsdWUgPSAodmFsdWUpID0+IHtcblx0cmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiO1x0XG59O1xuXG5jb25zdCBiaW5kRXZlbnQgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cdFxuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/QFwiICsgbmFtZSk7XG5cdGxldCBoYW5kbGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKFwiQFwiKyBuYW1lKTtcblx0bGV0IHNwbGl0ID0gbmFtZS5zcGxpdChcIjpcIik7XG5cdGNvbnN0IGV2ZW50ID0gc3BsaXQuc2hpZnQoKTtcblx0Y29uc3QgdHlwZSA9IHNwbGl0LnNoaWZ0KCkgfHwgXCJkZWZhdWx0XCI7XG5cdFxuXG5cdGlmIChjb25kaXRpb24gJiYgaGFuZGxlKXtcblx0XHRpZihhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZmFsc2UpID09IHRydWUpXG5cdFx0XHRhd2FpdCBiaW5kaW5nKHtldmVudCwgdHlwZSwgaGFuZGxlLCBjb250ZXh0IH0pO1xuXHR9XG5cdGVsc2UgaWYgKGhhbmRsZSlcblx0XHRhd2FpdCBiaW5kaW5nKHtldmVudCwgdHlwZSwgaGFuZGxlLCBjb250ZXh0IH0pO1xufTtcblxuY29uc3QgYmluZGluZyA9IGFzeW5jICh7ZXZlbnQsIHR5cGUsIGhhbmRsZSwgY29udGV4dCB9KSA9PiB7XG5cdGNvbnN0IHsgcmVzb2x2ZXIsIGNvbnRlbnR9ID0gY29udGV4dDtcblx0XHRcblx0aWYodHlwZSA9PSBcImRlbGVnYXRlXCIpe1xuXHRcdGNvbnN0IGV2ZW50aGFuZGxlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpO1xuXHRcdGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSkpO1xuXHR9IGVsc2Uge1x0XHRcblx0XHRjb25zdCBldmVudGhhbmRsZSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoaGFuZGxlLCBoYW5kbGUpO1xuXHRcblx0XHRpZighZXZlbnRoYW5kbGUpXG5cdFx0XHRjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIkNhbid0IHJlc29sdmUgXFxcIlwiICsgaGFuZGxlICsgXCJcXFwiIHRvIGV2ZW50IGhhbmRsZSFcIikpXG5cdFx0ZWxzZSBpZih0eXBlb2YgZXZlbnRoYW5kbGUgPT09IFwiZnVuY3Rpb25cIilcblx0XHRcdGNvbnRlbnQub24oZXZlbnQsIGV2ZW50aGFuZGxlKTtcblx0XHRlbHNlIGlmKHR5cGVvZiBldmVudGhhbmRsZSA9PT0gXCJzdHJpbmdcIilcblx0XHRcdGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSkpO1xuXHRcdGVsc2UgaWYodHlwZW9mIGV2ZW50aGFuZGxlID09PSBcIm9iamVjdFwiKXtcdFxuXHRcdFx0Y29uc3Qge2NhcHR1cmU9ZmFsc2UsIHBhc3NpdmU9ZmFsc2UsIG9uY2U9ZmFsc2V9ID0gaGFuZGxlO1x0XHRcblx0XHRcdGNvbnRlbnQub24oZXZlbnQsIGV2ZW50aGFuZGxlLmV2ZW50SGFuZGxlLCB7Y2FwdHVyZSwgcGFzc2l2ZSwgb25jZX0pO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgZGVsZWdhdGVyID0gZnVuY3Rpb24oZGVsZWdhdGUpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZihldmVudC5jdXJyZW50VGFyZ2V0KVx0XG5cdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0LnRyaWdnZXIoZGVsZWdhdGUsIGV2ZW50KTtcblx0XHRlbHNlXG5cdFx0XHRldmVudC50YXJnZXQudHJpZ2dlcihkZWxlZ2F0ZSwgZXZlbnQpO1xuXHR9O1xufTtcblxuXG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImF0dHJpYnV0ZVwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuY29udGVudCB9XG5cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwcm9jZXNzZWQgPSBuZXcgU2V0KCk7XG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgdGVtcGxhdGUuYXR0cmlidXRlcykge1xuXHRcdFx0Y29uc3QgWywganN0bCwgY29uZGl0aW9uLCBldmVudCwgbmFtZV0gPSBBVFRSSUJVVEVfTkFNRS5leGVjKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdGlmICghanN0bCAmJiAhcHJvY2Vzc2VkLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0aWYgKGV2ZW50KVxuXHRcdFx0XHRcdGF3YWl0IGJpbmRFdmVudCh7IGNvbmRpdGlvbiwgZXZlbnQsIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRhd2FpdCBiaW5kQXR0cmlidXRlKHsgY29uZGl0aW9uLCBuYW1lLCB2YWx1ZSwgY29udGV4dCB9KVxuXHRcdFx0fVxuXHRcdFx0cHJvY2Vzc2VkLmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQXR0cmlidXRlKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNsYXNzIENob29zZSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiY2hvb3NlXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UudGVtcGxhdGUgfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuaGFzQXR0cmlidXRlKFwianN0bC1jaG9vc2VcIikgfHwgY29udGV4dC50ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT0gMClcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdFx0Y29uc3Qgd2hlbnMgPSB0ZW1wbGF0ZS5maW5kKFwiOnNjb3BlID4gW2pzdGwtd2hlbl1cIik7XG5cdFx0Y29uc3QgbGVuZ3RoID0gd2hlbnMubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSB3aGVuc1tpXTtcblx0XHRcdGlmICghcmVzb2x2ZWQgJiYgKGF3YWl0IHJlc29sdmVyLnJlc29sdmUobm9kZS5hdHRyKFwianN0bC13aGVuXCIpLCBmYWxzZSkpKVxuXHRcdFx0XHRyZXNvbHZlZCA9IHRydWU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5vZGUucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHJlc29sdmVkKVxuXHRcdFx0dGVtcGxhdGUuZmluZChcIjpzY29wZSA+IFtqc3RsLW90aGVyd2lzZV1cIikucmVtb3ZlKCk7XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQ2hvb3NlKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5cbmNvbnN0IE1PREVTID0ge1xuXHRcInJlbW90ZVwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcdFx0XG5cdFx0Y29uc3Qge3Jlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRkYXRhID0gbmV3IFVSTChkYXRhLCBsb2NhdGlvbi5vcmlnaW4pO1xuXHRcdGxldCBvcHRpb24gPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhLW9wdGlvblwiKSB8fCBcInt9XCIpO1xuXHRcdG9wdGlvbiA9IEpTT04ucGFyc2Uob3B0aW9uKTtcblxuXHRcdGRhdGEgPSBhd2FpdCBmZXRjaChkYXRhLnRvU3RyaW5nKCksIG9wdGlvbik7XG5cdFx0cmV0dXJuIGRhdGEuanNvbigpO1xuXHR9LFxuXHRcImRpcmVjdFwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcblx0XHRjb25zdCB7cmVzb2x2ZXJ9ID0gY29udGV4dDtcblx0XHRcblx0XHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoZGF0YSk7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cbn07XG5cbmNvbnN0IHVwZGF0ZUNvbnRleHQgPSAoeyB2YXJuYW1lLCBkYXRhLCBzY29wZSwgY29udGV4dCB9KSA9PiB7XG5cdGlmICh2YXJuYW1lKVxuXHRcdGNvbnRleHQucmVzb2x2ZXIudXBkYXRlRGF0YSh2YXJuYW1lLCBkYXRhLCBzY29wZSk7XG5cdGVsc2UgaWYgKHNjb3BlKVxuXHRcdGNvbnRleHQucmVzb2x2ZXIubWVyZ2VDb250ZXh0KGRhdGEsIHNjb3BlKTtcblx0ZWxzZVxuXHRcdGNvbnRleHQucmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogZGF0YSwgbmFtZTogXCJqc3RsLWRhdGFcIiwgcGFyZW50OiBjb250ZXh0LnJlc29sdmVyIH0pO1xuXHRcblx0XHRcblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5cblxuY2xhc3MgRGF0YSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiZGF0YVwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiAxMDAwIH1cblx0Z2V0IHBoYXNlKCl7cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5kYXRhfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YVwiKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdFx0XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XHRcdFx0XG5cdFx0XHRjb25zdCBtb2RlID0gTU9ERVNbKHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtbW9kZVwiKSB8fCBcInJlbW90ZVwiKV07XG5cdFx0XHRpZiAoIW1vZGUpXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBqc3RsLWRhdGEtbW9kZSBpcyB1bnN1cHBvcnRlZCFcIik7XG5cblx0XHRcdGxldCBkYXRhID0gdGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YVwiKTtcblx0XHRcdGRhdGEgPSBhd2FpdCBtb2RlKHsgZGF0YSwgY29udGV4dCB9KTtcblxuXHRcdFx0Y29uc3QgdmFybmFtZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtdmFyXCIpO1xuXHRcdFx0Y29uc3Qgc2NvcGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhLXNjb3BlXCIpO1xuXHRcdFx0Y29udGV4dCA9IHVwZGF0ZUNvbnRleHQoeyB2YXJuYW1lLCBkYXRhLCBzY29wZSwgY29udGV4dCB9KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUsIGNvbnRleHQudGVtcGxhdGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IERhdGEoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgQVRUUklCVVRFID0ge1xuXHREQVRBOiBcImpzdGwtZm9yZWFjaFwiLFxuXHRWQVI6IFwianN0bC1mb3JlYWNoLXZhclwiLFxuXHRTVEFUVVM6IFwianN0bC1mb3JlYWNoLXN0YXR1c1wiLFxuXHRDT1VOVDogXCJqc3RsLWZvcmVhY2gtY291bnRcIixcblx0U1RBUlQ6IFwianN0bC1mb3JlYWNoLXN0YXJ0XCIsXG5cdFNURVA6IFwianN0bC1mb3JlYWNoLXN0ZXBcIixcblx0Q09ORElUSU9OOiBcImpzdGwtZm9yZWFjaC1jb25kaXRpb25cIlxufTtcblxuY29uc3QgZG9Db3VudCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cblx0Y291bnQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50KTtcblx0Y29uc3QgbGVuZ3RoID0gc3RhcnQgKyAoY291bnQgKiBzdGVwKTtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fVxuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGk7XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRzdGVwLFxuXHRcdFx0Y291bnRcblx0XHR9O1xuXHRcdHN0b3AgPSAhKGF3YWl0IGl0ZXJhdGUoaXRlcmF0aW9uLCBvcHRpb24pKTtcblx0fVxufTtcblxuY29uc3QgZG9Gb3JlYWNoID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBkYXRhLCBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShkYXRhKTtcblx0bGV0IGFycmF5ID0gZGF0YTtcblx0aWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSlcblx0XHRhcnJheSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEpO1xuXG5cdGNvdW50ID0gY291bnQgIT0gXCJcIiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQsIDApIDogbnVsbDtcblx0Y29uc3QgbGVuZ3RoID0gY291bnQgPyBNYXRoLm1pbihzdGFydCArIGNvdW50LCBhcnJheS5sZW5ndGgpIDogYXJyYXkubGVuZ3RoO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gZGF0YVtpXTtcblx0XHRpdGVyYXRpb25bc3RhdHVzXSA9IHtcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdGNvdW50OiBsZW5ndGgsXG5cdFx0XHRkYXRhXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGUgPSBhc3luYyAoZGF0YSwgb3B0aW9uKSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbnRhaW5lciwgY29uZGl0aW9uLCBjb250ZXh0IH0gPSBvcHRpb247XG5cdHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1mb3JlYWNoXCIsIHBhcmVudDogcmVzb2x2ZXIgfSk7XG5cblx0Y29uZGl0aW9uID0gY29uZGl0aW9uID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKSA6IGZhbHNlO1xuXHRpZiAoY29uZGl0aW9uKVxuXHRcdHJldHVybiBmYWxzZTtcblxuXHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBjb250ZXh0OiBjb250ZXh0LmNsb25lKHsgcmVzb2x2ZXIsIGNvbnRhaW5lciwgdGVtcGxhdGUsIG1vZGU6IFwiYXBwZW5kXCIgfSkgfSk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuY2xhc3MgRm9yZWFjaCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiZm9yZWFjaFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAyIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlIH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRpZiAoIShjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICghY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5EQVRBKSAmJiAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT1VOVCkpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCB9ID0gY29udGV4dDtcblx0XHRcdGNvbnN0IG9wdGlvbiA9IHtcblx0XHRcdFx0ZGF0YTogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpIHx8IFwiXCIpLnRyaW0oKSxcblx0XHRcdFx0Y291bnQ6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT1VOVCkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRzdGFydDogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZSh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFSVCkgfHwgXCIwXCIpLFxuXHRcdFx0XHRzdGVwOiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNURVApIHx8IFwiMVwiKSxcblx0XHRcdFx0dmFybmFtZTogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlZBUikgfHwgXCJpdGVtXCIpLnRyaW0oKSxcblx0XHRcdFx0c3RhdHVzOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RBVFVTKSB8fCBcInN0YXR1c1wiKS50cmltKCksXG5cdFx0XHRcdGNvbmRpdGlvbjogdGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuQ09ORElUSU9OKSxcblx0XHRcdFx0dGVtcGxhdGU6IHRlbXBsYXRlLmNoaWxkTm9kZXMsXG5cdFx0XHRcdHJlc29sdmVyLFxuXHRcdFx0XHRyZW5kZXJlcixcblx0XHRcdFx0Y29udGFpbmVyOiBjb250ZW50LFxuXHRcdFx0XHRjb250ZXh0XG5cdFx0XHR9O1xuXHRcdFx0aWYgKCghb3B0aW9uLmRhdGEgfHwgb3B0aW9uLmRhdGEgPT0gXCJcIikgJiYgb3B0aW9uLmNvdW50KVxuXHRcdFx0XHRhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGF3YWl0IGRvRm9yZWFjaChvcHRpb24pO1xuXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLWZvcmVhY2g6XCIsIGVycm9yKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufTtcblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEZvcmVhY2goKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgSWYgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImlmXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEwMDAgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuaW5pdCB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuYXR0cihcImpzdGwtaWZcIikpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pZlwiKTtcblx0XHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBmYWxzZSk7XG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJZigpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuLi9UZW1wbGF0ZS5qc1wiO1xuXG5jbGFzcyBJbmNsdWRlIGV4dGVuZHMgRGlyZWN0aXZlIHtcdFxuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdH1cblx0XG5cdGdldCBuYW1lKCkge3JldHVybiBcImluY2x1ZGVcIn1cblx0Z2V0IHJhbmsoKSB7cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOS31cblx0Z2V0IHBoYXNlKCl7cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZX1cblx0XHRcblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KXtcblx0XHRpZighKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuYXR0cihcImpzdGwtaW5jbHVkZVwiKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdHRyeXtcblx0XHRcdGNvbnN0IHt0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyfSA9IGNvbnRleHQ7XHRcdFxuXHRcdFx0bGV0IGluY2x1ZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpO1xuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGluY2x1ZGUpO1xuXHRcdFx0aW5jbHVkZSA9IG5ldyBVUkwoaW5jbHVkZSwgbG9jYXRpb24ub3JpZ2luKTtcdFx0XHRcblx0XHRcdGluY2x1ZGUgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKGluY2x1ZGUpO1xuXHRcdFx0XG5cdFx0XHRjb25zdCBtb2RlID0gdGVtcGxhdGUuYXR0cihcImpzdGwtaW5jbHVkZS1tb2RlXCIpIHx8IFwicmVwbGFjZVwiO1xuXHRcdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHt0ZW1wbGF0ZTppbmNsdWRlLCBjb250YWluZXI6IGNvbnRleHQuY29udGVudCwgbW9kZSwgY29udGV4dH0pO1xuXHRcdFx0Y29udGV4dC5pZ25vcmU7XG5cdFx0XHRcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdH1jYXRjaChlKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblx0XHR9XHRcdFxuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoe2RpcmVjdGl2ZTogbmV3IEluY2x1ZGUoKX0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFJlcGxhY2UgZnJvbSBcIi4uL2VsZW1lbnRzL1JlcGxhY2UuanNcIlxuXG5cbmNsYXNzIEluaXRpYWwgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImluaXRpYWxcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmluaXQgfVxuXG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVuZGVyZXIgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgVGV4dClcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXG5cdFx0ZWxzZSBpZiAodGVtcGxhdGUuYXR0cihcImpzdGwtYXN5bmNcIikpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IG5ldyBSZXBsYWNlKCk7XG5cdFx0XHR0ZW1wbGF0ZS5hdHRyKFwianN0bC1hc3luY1wiLCBudWxsKTtcblx0XHRcdHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBtb2RlOiBcInJlcGxhY2VcIiwgdGFyZ2V0OiBjb250ZXh0LmNvbnRlbnQsIGNvbnRleHQgfSk7XG5cdFx0XHR9LCBwYXJzZUludCh0ZW1wbGF0ZS5hdHRyKFwianN0bC1hc3luY1wiKSB8fCBcIjI1MFwiKSB8fCAyNTApO1xuXHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlLmF0dHIoXCJqc3RsLWlnbm9yZVwiKSkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUpO1xuXHRcdFx0Y29uc3Qgc3ViY29udGV4dCA9IGNvbnRleHQuc3ViQ29udGV4dCh7XG5cdFx0XHRcdHRlbXBsYXRlOiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXMsXG5cdFx0XHRcdGNvbnRhaW5lcjogY29udGV4dC5jb250ZW50LmNvbnRlbnRcblx0XHRcdH0pO1xuXHRcdFx0cmVuZGVyZXIucmVuZGVyKHsgY29udGV4dDogc3ViY29udGV4dCB9KTtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZS50YWdOYW1lKVxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZW1wbGF0ZS50YWdOYW1lKTtcblx0XHRlbHNlIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgSW5pdGlhbCgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuXG5jb25zdCBERUZBVUxUX09QVElPTiA9IHtcblx0bW9kZTogXCJ0ZXh0XCIsXG5cdHVuc2VjdXJlOiBmYWxzZSxcblx0cHJldmVudEZvcm1hdCA6IGZhbHNlLFxuXHRtYXhMZW5ndGg6IDBcdFxufTtcblxuY29uc3QgU0VDVVJFX0hUTUxfRklMVEVSID0gXCJzY3JpcHQsIHN0eWxlLCBib2R5LCBodG1sLCBoZWFkLCBvYmplY3QsIGxpbmtcIjtcblxuY29uc3QgcmVhZE9wdGlvbiA9IGFzeW5jIChwYXJlbnQsIGNvbnRleHQpID0+IHtcblx0Y29uc3QgcmVzb2x2ZXIgPSBjb250ZXh0LnJlc29sdmVyO1xuXHRyZXR1cm4ge1xuXHRcdG1vZGU6IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KChwYXJlbnQuYXR0cihcImpzdGwtdGV4dC1jb250ZW50LXR5cGVcIikgfHwgXCJ0ZXh0XCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSxcblx0XHR1bnNlY3VyZTogcGFyZW50Lmhhc0F0dHJpYnV0ZShcImpzdGwtdGV4dC11bnNlY3VyZVwiKSxcblx0XHRwcmV2ZW50Rm9ybWF0OiAhIXBhcmVudC5hdHRyKFwianN0bC10ZXh0LXByZXZlbnQtZm9ybWF0XCIpIHx8IGZhbHNlLFxuXHRcdG1heExlbmd0aDogcGFyc2VJbnQoYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQocGFyZW50LmF0dHIoXCJqc3RsLXRleHQtdHJpbS1sZW5ndGhcIikgfHwgXCIwXCIpKVxuXHR9O1xufTtcblxuY29uc3QgdHJpbVRleHRMZW5ndGggPSAodGV4dCwgbGVuZ3RoKSA9PiB7XG5cdHJldHVybiB0ZXh0Lmxlbmd0aCA+IGxlbmd0aCA/IHRleHQuc3Vic3RyaW5nKDAsIGxlbmd0aCAtIDMpLnRyaW0oKSArIFwiLi4uXCIgOiB0ZXh0O1xufTtcblxuY29uc3QgTU9ERVMgPSB7XG5cdFwidGV4dFwiIDogYXN5bmMgKG9wdGlvbiwgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IHtjb250ZW50LCByZXNvbHZlciwgdGVtcGxhdGV9ID0gY29udGV4dDtcblx0XHRcblx0XHRsZXQgdGV4dCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLnRleHRDb250ZW50KTtcdFx0XG5cdFx0dGV4dCA9IGNyZWF0ZSh0ZXh0LHRydWUpLmNvbnRlbnQudGV4dENvbnRlbnQ7XG5cdFx0aWYob3B0aW9uLm1heExlbmd0aCA+IDApXG5cdFx0XHR0ZXh0ID0gdHJpbVRleHRMZW5ndGgodGV4dCwgb3B0aW9uLm1heExlbmd0aCk7XHRcdFxuXHRcdFxuXHRcdGNvbnRlbnQudGV4dENvbnRlbnQgPSB0ZXh0O1x0XHRcblx0fSxcblx0XCJodG1sXCI6IGFzeW5jIChvcHRpb24sIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCB7cmVzb2x2ZXIsIHRlbXBsYXRlfSA9IGNvbnRleHQ7XG5cdFx0XG5cdFx0bGV0IGNvbnRlbnQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS50ZXh0Q29udGVudCk7XHRcdFxuXHRcdGNvbnRlbnQgPSBjcmVhdGUoY29udGVudCx0cnVlKTtcdFx0XG5cdFx0Y29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUoY29udGVudC5jb250ZW50LCB0cnVlKTtcblx0XHRcblx0XHRpZihvcHRpb24udW5zZWN1cmUpXG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBjb250ZW50O1x0XHRcdFxuXHRcdGVsc2V7XG5cdFx0XHRjb250ZW50LmZpbmQoU0VDVVJFX0hUTUxfRklMVEVSKS5yZW1vdmUoKTtcdFx0XHRcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0fVxuXHR9XG59O1xuXG5cbmNsYXNzIFRleHRDb250ZW50IGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJ0ZXh0XCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuY29udGVudCB9XG5cblxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGNvbnN0IHsgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBUZXh0KSB8fCB0ZW1wbGF0ZS50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoID09IDAgfHwgKHRlbXBsYXRlLnBhcmVudEVsZW1lbnQgJiYgdGVtcGxhdGUucGFyZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJqc3RsLXRleHQtaWdub3JlXCIpKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXG5cdFx0Y29uc3QgcGFyZW50ID0gdGVtcGxhdGUucGFyZW50RWxlbWVudDtcblx0XHRjb25zdCBvcHRpb24gPSBwYXJlbnQgPyBhd2FpdCByZWFkT3B0aW9uKHBhcmVudCwgY29udGV4dCkgOiBERUZBVUxUX09QVElPTjtcblx0XHRcblx0XHRjb25zdCAgbW9kZSA9IE1PREVTW29wdGlvbi5tb2RlXTtcblx0XHRpZighbW9kZSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRleHQgbW9kZSBcXFwiXCIrIG9wdGlvbi5tb2RlICsgXCJcXFwiIGlzIHVuc3VwcG9ydGVkIVwiKTtcblx0XHRcblx0XHRhd2FpdCBtb2RlKG9wdGlvbiwgY29udGV4dCk7XG5cdFx0XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IFRleHRDb250ZW50KCkgfSk7IiwiaW1wb3J0IFwiLi9Jbml0aWFsLmpzXCI7XG5pbXBvcnQgXCIuL0RhdGEuanNcIjtcbmltcG9ydCBcIi4vSWYuanNcIjtcbmltcG9ydCBcIi4vQ2hvb3NlLmpzXCI7XG5pbXBvcnQgXCIuL0luY2x1ZGUuanNcIjtcbmltcG9ydCBcIi4vRm9yZWFjaC5qc1wiO1xuaW1wb3J0IFwiLi9UZXh0LmpzXCI7XG5pbXBvcnQgXCIuL0F0dHJpYnV0ZXMuanNcIjsiLCJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudC5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VFbGVtZW50IGV4dGVuZHMgRWxlbWVudHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHRcdFxuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcblx0fVxuXHRhc3luYyBleGVjdXRlKHt0ZW1wbGF0ZSwgY29udGV4dH0pe1xuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9O1x0XHRcbn1cbnRyeXtjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJqc3RsLXJlcGxhY2VcIiwgUmVwbGFjZUVsZW1lbnQpO31jYXRjaChlKXt9Ly9pZ25vcmUiLCJpbXBvcnQgXCIuL1JlcGxhY2UuanNcIiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgZGVmaW5lLCB0b05vZGVOYW1lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL0RlZmluZUNvbXBvbmVudEhlbHBlclwiO1xuaW1wb3J0IHsgZmluZENsb3Nlc3RJbkRlcHRoIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL05vZGVIZWxwZXJcIjtcbmltcG9ydCB7IGF0dHJpYnV0ZUNoYW5nZUV2ZW50bmFtZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9FdmVudEhlbHBlclwiXG5pbXBvcnQgeyBFVkVOVF9DTElDSyBhcyBST1VURV9DTElDSyB9IGZyb20gXCIuL1JvdXRlL0V2ZW50c1wiO1xuaW1wb3J0IHsgRVZFTlRfVE9fUk9VVEUgfSBmcm9tIFwiLi9Sb3V0ZUxpbmsvRXZlbnRzXCI7XG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcbmltcG9ydCBSb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuaW1wb3J0IFJvdXRlTGluayBmcm9tIFwiLi9Sb3V0ZUxpbmtcIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuL1ZpZXdcIjtcblxuY29uc3QgTk9ERU5BTUUgPSB0b05vZGVOYW1lKFwiYXBwbGljYXRpb25cIik7XG5leHBvcnQgY29uc3QgRVZFTlRfU1RPUkVfQ0hBTkdFRCA9IFwiYXBwLXN0b3JlLWNoYW5nZWRcIjtcbmV4cG9ydCBjb25zdCBBVFRSX1JPVVRFID0gXCJyb3V0ZVwiO1xuXG5jb25zdCBmaW5kUm91dGUgPSAoYXBwLCBuYW1lKSA9PiB7XG5cdGNvbnN0IHNlbGVjdG9yID0gYCR7Um91dGUuTk9ERU5BTUV9W25hbWU9XCIke25hbWV9XCJdYDtcblx0cmV0dXJuIGFwcC5maW5kKHNlbGVjdG9yKS5maXJzdCgpO1xufTtcblxuY29uc3QgYnVpbGRSb3V0ZUNvbnRleHQgPSBhc3luYyAoY29udGV4dCwgYXBwKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIFJlc29sdmVyLnJlc29sdmUoY29udGV4dCwgYXBwLnN0b3JlLCBudWxsKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xuXG5jb25zdCBBVFRSSUJVVEVTID0gW0FUVFJfUk9VVEVdXG5cbmNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0XHRcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVM7XG5cdH1cblx0XG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMucmVhZHkudGhlbigoKSA9PiB7XG5cdFx0XHR0aGlzLnJvb3Qub24oW1JPVVRFX0NMSUNLLCBFVkVOVF9UT19ST1VURV0sIGFzeW5jIChldmVudCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJvdXRlKHsgcm91dGU6IGV2ZW50LnRhcmdldCB9KTtcblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLm9uKGF0dHJpYnV0ZUNoYW5nZUV2ZW50bmFtZShBVFRSX1JPVVRFLCB0aGlzKSwgKCkgPT4ge1xuXHRcdFx0XHRpZih0aGlzLmhhc0F0dHJpYnV0ZShBVFRSX1JPVVRFKSlcblx0XHRcdFx0XHR0aGlzLnJvdXRlKHsgcm91dGU6IHRoaXMuYXR0cihBVFRSX1JPVVRFKSB9KTtcblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRpZih0aGlzLmhhc0F0dHJpYnV0ZShBVFRSX1JPVVRFKSlcblx0XHRcdFx0dGhpcy5yb3V0ZSh7IHJvdXRlOiB0aGlzLmF0dHIoQVRUUl9ST1VURSkgfSk7XG5cdFx0fSk7XG5cdFx0XG5cdH1cblx0XG5cdGFzeW5jIGluaXQoKSB7XG5cdFx0XG5cdH1cblxuXHRnZXQgcm9vdCgpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFzeW5jIHJvdXRlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290LmZpbmQoUm91dGUuTk9ERU5BTUUpO1xuXHR9XG5cblx0YXN5bmMgcm91dGUoeyByb3V0ZSwgcmVmcmVzaCA9IG51bGwsIGNvbnRleHQgPSBudWxsIH0pIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSByZXR1cm4gdGhpcy5fX3JvdXRlX187XG5cblx0XHRpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSByb3V0ZSA9IGZpbmRSb3V0ZSh0aGlzLCByb3V0ZSk7XG5cdFx0aWYgKHJvdXRlIGluc3RhbmNlb2YgUm91dGVMaW5rKSB7XG5cdFx0XHRyZWZyZXNoID0gcmVmcmVzaCAhPSBudWxsID8gcmVmcmVzaCA6IHJvdXRlLnJlZnJlc2g7XG5cdFx0XHRpZiAoY29udGV4dCA9PSBudWxsKSBjb250ZXh0ID0gYXdhaXQgYnVpbGRSb3V0ZUNvbnRleHQocm91dGUuY29udGV4dCwgdGhpcyk7XG5cdFx0XHRyb3V0ZSA9IGZpbmRSb3V0ZSh0aGlzLCByb3V0ZS50YXJnZXQpO1xuXHRcdH1cblx0XHRpZiAoIShyb3V0ZSBpbnN0YW5jZW9mIFJvdXRlKSkgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgcm91dGUgdHlwZSFcIik7XG5cblx0XHRpZihyZWZyZXNoID09IG51bGwpIHJlZnJlc2ggPSBmYWxzZTtcblxuXHRcdGlmICghcmVmcmVzaCAmJiB0aGlzLl9fcm91dGVfXyA9PSByb3V0ZSkgcmV0dXJuO1xuXG5cdFx0aWYgKGNvbnRleHQgPT0gbnVsbCkgY29udGV4dCA9IGF3YWl0IGJ1aWxkUm91dGVDb250ZXh0KHJvdXRlLmNvbnRleHQsIHRoaXMpO1xuXG5cdFx0aWYgKHRoaXMuX19yb3V0ZV9fKSB0aGlzLl9fcm91dGVfXy5hY3RpdmUgPSBmYWxzZTtcblx0XHRhd2FpdCB0aGlzLnZpZXcuZGlzcGxheSh7IHJvdXRlLCBjb250ZXh0LCByZWZyZXNoIH0pO1xuXHRcdHRoaXMuX19yb3V0ZV9fID0gcm91dGU7XG5cdFx0cm91dGUuYWN0aXZlID0gdHJ1ZTtcblx0fVxuXG5cdGdldCB2aWV3KCkge1xuXHRcdGlmICghdGhpcy5fX3ZpZXdfXykge1xuXHRcdFx0dGhpcy5fX3ZpZXdfXyA9IGZpbmRDbG9zZXN0SW5EZXB0aCh0aGlzLnJvb3QsIChub2RlKSA9PiB7XG5cdFx0XHRcdHJldHVybiBub2RlIGluc3RhbmNlb2YgVmlldztcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5fX3ZpZXdfXy5hcHAgPSB0aGlzO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLl9fdmlld19fO1xuXHR9XG5cblx0Z2V0IHN0b3JlKCkge1xuXHRcdGlmICghdGhpcy5fX3N0b3JlX18pIHRoaXMuX19zdG9yZV9fID0ge307XG5cdFx0cmV0dXJuIHRoaXMuX19zdG9yZV9fO1xuXHR9XG59XG5cbmRlZmluZShBcHBsaWNhdGlvbik7XG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbjtcbiIsImV4cG9ydCBjb25zdCBBVFRSX05BTUUgPSBcIm5hbWVcIjtcbmV4cG9ydCBjb25zdCBBVFRSX0FDVElWRSA9IFwiYWN0aXZlXCI7XG5leHBvcnQgY29uc3QgQVRUUl9TVEFURUZVTCA9IFwic3RhdGVmdWxcIjtcbmV4cG9ydCBjb25zdCBBVFRSX0NPTVBPTkVOVF9UQUcgPSBcImNvbXBvbmVudC10YWdcIjtcbmV4cG9ydCBjb25zdCBBVFRSX0NPTVBPTkVOVF9UQUdfQVRUUklCVVRFUyA9IFwiY29tcG9uZW50LXRhZy1hdHRyaWJ1dGVzXCI7XG5leHBvcnQgY29uc3QgQVRUUl9DT05URVhUID0gXCJjb250ZXh0XCI7XG5leHBvcnQgY29uc3QgQVRUUl9SRUZSRVNIID0gXCJyZWZyZXNoXCI7IiwiaW1wb3J0IE5PREVOQU1FIGZyb20gXCIuL05vZGVuYW1lXCI7XG5leHBvcnQgY29uc3QgRVZFTlRfQ0xJQ0sgPSBOT0RFTkFNRSArIFwiLWNsaWNrXCI7XG5leHBvcnQgY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBOT0RFTkFNRSArIFwiLWFjdGl2YXRlXCI7XG5leHBvcnQgY29uc3QgRVZFTlRfREVBQ1RJVkFURSA9IE5PREVOQU1FICsgXCItZGVhY3RpdmF0ZVwiOyIsImltcG9ydCB7IHRvTm9kZU5hbWUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvRGVmaW5lQ29tcG9uZW50SGVscGVyXCI7XG5leHBvcnQgZGVmYXVsdCB0b05vZGVOYW1lKFwicm91dGVcIik7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvRGVmaW5lQ29tcG9uZW50SGVscGVyXCI7XG5pbXBvcnQgeyBsb2FkVGVtcGxhdGUsIEFUVFJfVEVNUExBVEUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvVGVtcGxhdGVIZWxwZXJcIjtcbmltcG9ydCBSZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlclwiO1xuaW1wb3J0IE5PREVOQU1FIGZyb20gXCIuL05vZGVuYW1lXCI7XG5pbXBvcnQgeyBFVkVOVF9DTElDSywgRVZFTlRfQUNUSVZBVEUsIEVWRU5UX0RFQUNUSVZBVEUgfSBmcm9tIFwiLi9FdmVudHNcIjtcbmltcG9ydCB7IEFUVFJfTkFNRSwgQVRUUl9BQ1RJVkUsIEFUVFJfQ09NUE9ORU5UX1RBRywgQVRUUl9DT01QT05FTlRfVEFHX0FUVFJJQlVURVMsIEFUVFJfU1RBVEVGVUwsIEFUVFJfQ09OVEVYVCB9IGZyb20gXCIuL0F0dHJpYnV0ZXNcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSX05BTUUsIEFUVFJfVEVNUExBVEUsIEFUVFJfQ09NUE9ORU5UX1RBRywgQVRUUl9DT01QT05FTlRfVEFHX0FUVFJJQlVURVMsIEFUVFJfU1RBVEVGVUxdO1xuY29uc3QgRVZFTlRTID0gW0VWRU5UX0NMSUNLLCBFVkVOVF9BQ1RJVkFURSwgRVZFTlRfREVBQ1RJVkFURV07XG5jb25zdCBnZXRUYWdBdHRyaWJ1dGVzID0gYXN5bmMgKHJvdXRlKSA9PiB7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSByb3V0ZS5hdHRyKEFUVFJfQ09NUE9ORU5UX1RBR19BVFRSSUJVVEVTKSB8fCBcInt9XCI7XG5cdHJldHVybiBSZXNvbHZlci5yZXNvbHZlKGF0dHJpYnV0ZXMsIHt9LCB7fSk7XG59O1xuXG5jb25zdCBidWlsZENvbXBvbmVudCA9IGFzeW5jIChyb3V0ZSkgPT4ge1xuXHRpZiAocm91dGUuaGFzQXR0cmlidXRlKEFUVFJfVEVNUExBVEUpKSB7XG5cdFx0aWYgKCFyb3V0ZS5fX3RlbXBsYXRlX18pIHJvdXRlLl9fdGVtcGxhdGVfXyA9IGxvYWRUZW1wbGF0ZShyb3V0ZSwgbnVsbCk7XG5cdFx0cmV0dXJuIHJvdXRlLl9fdGVtcGxhdGVfXztcblx0fSBlbHNlIHtcblx0XHRjb25zdCB0YWcgPSByb3V0ZS5hdHRyKEFUVFJfQ09NUE9ORU5UX1RBRyk7XG5cdFx0Y29uc3QgY2xhenogPSBjdXN0b21FbGVtZW50cy5nZXQodGFnKTtcblx0XHRjb25zdCBhdHRyaWJ1dGVzID0gYXdhaXQgZ2V0VGFnQXR0cmlidXRlcyhyb3V0ZSk7XG5cblx0XHRjb25zdCBlbGVtZW50ID0gbmV3IGNsYXp6KCk7XG5cdFx0Zm9yIChsZXQgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikgZWxlbWVudC5hdHRyKGF0dHJpYnV0ZSwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG59O1xuXG5jbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBBVFRSSUJVVEVTO1xuXHR9XG5cblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcblx0XHRyZXR1cm4gTk9ERU5BTUU7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IEVWRU5UUygpIHtcblx0XHRyZXR1cm4gRVZFTlRTO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0aWYoIXRoaXMuYWN0aXZlKVxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoRVZFTlRfQ0xJQ0spO1xuXHRcdH0pO1xuXHR9XG5cblx0YXN5bmMgaW5pdCgpIHt9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cihBVFRSX05BTUUpO1xuXHR9XG5cblx0Z2V0IGFjdGl2ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoQVRUUl9BQ1RJVkUpO1xuXHR9XG5cblx0c2V0IGFjdGl2ZShhY3RpdmUpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5hY3RpdmU7XG5cdFx0aWYgKGFjdGl2ZSAhPSBjdXJyZW50KSB7XG5cdFx0XHR0aGlzLmF0dHIoQVRUUl9BQ1RJVkUsIGFjdGl2ZSA/IFwiXCIgOiBudWxsKTtcblx0XHRcdGlmIChhY3RpdmUpXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihFVkVOVF9BQ1RJVkFURSk7XG5cdFx0XHRlbHNlIFxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoRVZFTlRfREVBQ1RJVkFURSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRnZXQgc3RhdGVmdWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKEFUVFJfU1RBVEVGVUwpO1xuXHR9XG5cblx0Z2V0IGNvbnRleHQoKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyKEFUVFJfQ09OVEVYVCk7XG5cdH1cdFxuXHRcblx0Z2V0IHJlZnJlc2goKXtcblx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoQVRUUl9SRUZSRVNIKTtcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudCgpIHtcdFx0XG5cdFx0cmV0dXJuIGJ1aWxkQ29tcG9uZW50KHRoaXMpO1xuXHR9XG59XG5cbmRlZmluZShSb3V0ZSk7XG5leHBvcnQgZGVmYXVsdCBSb3V0ZTtcbiIsImV4cG9ydCBjb25zdCBBVFRSX1RBUkdFVCA9IFwidGFyZ2V0XCI7XG5leHBvcnQgY29uc3QgQVRUUl9DT05URVhUID0gXCJjb250ZXh0XCI7XG5leHBvcnQgY29uc3QgQVRUUl9SRUZSRVNIID0gXCJyZWZyZXNoXCI7IiwiaW1wb3J0IE5PREVOQU1FIGZyb20gXCIuL05vZGVuYW1lXCI7XG5leHBvcnQgY29uc3QgRVZFTlRfVE9fUk9VVEUgPSBOT0RFTkFNRSArIFwiLXRvLXJvdXRlXCI7IiwiaW1wb3J0IHsgdG9Ob2RlTmFtZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9EZWZpbmVDb21wb25lbnRIZWxwZXJcIjtcbmV4cG9ydCBkZWZhdWx0IHRvTm9kZU5hbWUoXCJyb3V0ZS1saW5rXCIpOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL0RlZmluZUNvbXBvbmVudEhlbHBlclwiO1xuaW1wb3J0IE5PREVOQU1FIGZyb20gXCIuL05vZGVuYW1lXCI7XG5pbXBvcnQgeyBFVkVOVF9UT19ST1VURSB9IGZyb20gXCIuL0V2ZW50c1wiO1xuaW1wb3J0IHsgQVRUUl9UQVJHRVQsIEFUVFJfQ09OVEVYVCwgQVRUUl9SRUZSRVNIfSBmcm9tIFwiLi9BdHRyaWJ1dGVzXCI7XG5pbXBvcnQge30gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL05vZGVIZWxwZXJcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSX1RBUkdFVCwgQVRUUl9DT05URVhUXTtcblxuY29uc3QgRVZFTlRTID0gW0VWRU5UX1RPX1JPVVRFXTtcblxuY2xhc3MgUm91dGVMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVM7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xuXHRcdHJldHVybiBOT0RFTkFNRTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgRVZFTlRTKCkge1xuXHRcdHJldHVybiBFVkVOVFM7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoRVZFTlRfVE9fUk9VVEUpO1xuXHRcdH0pO1xuXHR9XG5cblx0YXN5bmMgaW5pdCgpIHt9XG5cblx0Z2V0IHRhcmdldCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyKEFUVFJfVEFSR0VUKTtcblx0fVxuXHRcblx0Z2V0IGNvbnRleHQoKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyKEFUVFJfQ09OVEVYVCk7XG5cdH1cblxuXHRnZXQgcmVmcmVzaCgpe1xuXHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShBVFRSX1JFRlJFU0gpO1xuXHR9XG59XG5cbmRlZmluZShSb3V0ZUxpbmspO1xuZXhwb3J0IGRlZmF1bHQgUm91dGVMaW5rO1xuIiwiaW1wb3J0IHsgdG9Ob2RlTmFtZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9EZWZpbmVDb21wb25lbnRIZWxwZXJcIjtcbmV4cG9ydCBkZWZhdWx0IHRvTm9kZU5hbWUoXCJ2aWV3XCIpOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL0RlZmluZUNvbXBvbmVudEhlbHBlclwiO1xuaW1wb3J0IE5PREVOQU1FIGZyb20gXCIuL05vZGVuYW1lXCI7XG5pbXBvcnQgeyBSZW5kZXJlciwgVGVtcGxhdGUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlXCI7XG5pbXBvcnQgV2Vha0RhdGEgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL1dlYWtEYXRhXCI7XG5cbmNvbnN0IFJPVVRFREFUQSA9IG5ldyBXZWFrRGF0YSgpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcblx0XHRyZXR1cm4gTk9ERU5BTUU7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IHJvb3QoKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgYXBwKCkge1xuXHRcdHJldHVybiB0aGlzLl9fYXBwX187XG5cdH1cblxuXHRzZXQgYXBwKGFwcCkge1xuXHRcdHRoaXMuX19hcHBfXyA9IGFwcDtcblx0fVxuXG5cdGFzeW5jIGRpc3BsYXkoeyByb3V0ZSwgY29udGV4dCwgdmlldywgcmVmcmVzaCA9IGZhbHNlIH0pIHtcblx0XHRpZiAodmlldykgdGhyb3cgbmV3IEVycm9yKFwieW91IG11c3Qgb3ZlcnJpZGUgdGhlIGRpc3BsYXkgZnVuY3Rpb24hXCIpO1xuXG5cdFx0Y29uc3QgeyByb290LCBhcHAgfSA9IHRoaXM7XG5cdFx0cm9vdC5lbXB0eSgpO1xuXG5cdFx0bGV0IGNvbXBvbmVudCA9IHJvdXRlLnN0YXRlZnVsID8gUk9VVEVEQVRBLnZhbHVlKHJvdXRlLCBcImNvbXBvbmVudFwiKSA6IG51bGw7XG5cdFx0aWYgKHJlZnJlc2ggfHwgIWNvbXBvbmVudCkge1xuXHRcdFx0Y29tcG9uZW50ID0gYXdhaXQgcm91dGUuY29tcG9uZW50KCk7XG5cdFx0XHRpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgVGVtcGxhdGUpIHtcblx0XHRcdFx0YXdhaXQgUmVuZGVyZXIucmVuZGVyKHtcblx0XHRcdFx0XHRjb250YWluZXI6IHJvb3QsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0JHZpZXc6IHRoaXMsXG5cdFx0XHRcdFx0XHQkYXBwOiBhcHAsXG5cdFx0XHRcdFx0XHQkc3RvcmU6IGFwcC5zdG9yZSxcblx0XHRcdFx0XHRcdCRyb3V0ZTogcm91dGUsXG5cdFx0XHRcdFx0XHQkY29udGV4dDogY29udGV4dCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRlbXBsYXRlOiBjb21wb25lbnQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb21wb25lbnQgPSBOb2RlTGlzdC5mcm9tKHJvb3QuY2hpbGROb2Rlcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgVmlldykge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5hcHAgPSBhcHA7XG5cdFx0XHRcdFx0YXdhaXQgY29tcG9uZW50LmRpc3BsYXkoeyByb3V0ZSwgY29udGV4dCwgdmlldzogdGhpcyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyb290LmFwcGVuZChjb21wb25lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocm91dGUuc3RhdGVmdWwpIFJPVVRFREFUQS52YWx1ZShyb3V0ZSwgXCJjb21wb25lbnRcIiwgY29tcG9uZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIFZpZXcpIHtcblx0XHRcdFx0Y29tcG9uZW50LmFwcCA9IGFwcDtcblx0XHRcdFx0YXdhaXQgY29tcG9uZW50LmRpc3BsYXkoeyByb3V0ZSwgY29udGV4dCwgdmlldzogdGhpcyB9KTtcblx0XHRcdH1cblx0XHRcdHJvb3QuYXBwZW5kKGNvbXBvbmVudCk7XG5cdFx0fVxuXHR9XG59XG5kZWZpbmUoVmlldyk7XG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==