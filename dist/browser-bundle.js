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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global */ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _src_Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Application */ "./src/Application.js");
/* harmony import */ var _src_Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Route */ "./src/Route/index.js");
/* harmony import */ var _src_RouteLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/RouteLink */ "./src/RouteLink/index.js");
/* harmony import */ var _src_View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/View */ "./src/View/index.js");






_default_js_defaultjs_common_utils_src_Global__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs = _default_js_defaultjs_common_utils_src_Global__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs || {};
_default_js_defaultjs_common_utils_src_Global__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs.app = _default_js_defaultjs_common_utils_src_Global__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs.app || {};
_default_js_defaultjs_common_utils_src_Global__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs.app.toolbox = _default_js_defaultjs_common_utils_src_Global__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs.app.toolbox || {
	VERSION : "1.0.0-beta.8",
    Application: _src_Application__WEBPACK_IMPORTED_MODULE_1__["default"],
	View: _src_View__WEBPACK_IMPORTED_MODULE_4__["default"],
    Route: _src_Route__WEBPACK_IMPORTED_MODULE_2__["default"],
    RouteLink: _src_RouteLink__WEBPACK_IMPORTED_MODULE_3__["default"]
};




/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/Global.js ***!
  \***********************************************************************/
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9Db250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRGVmYXVsdFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Eb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0RvY3VtZW50RnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9FbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRXZlbnRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxJbnB1dEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MU2VsZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IdG1sQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvRGF0YVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9FeHRlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy9SZWFkeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvRGVmaW5lQ29tcG9uZW50SGVscGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9FdmVudEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvTm9kZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvVGVtcGxhdGVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL1dlYWtEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvamF2YXNjcmlwdC9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9EaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9XYWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL0Nob29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9Gb3JlYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvSWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9JbmNsdWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvSW5pdGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9lbGVtZW50cy9SZXBsYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2VsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZS9BdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZS9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlL05vZGVuYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUm91dGVMaW5rL0F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlTGluay9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlTGluay9Ob2RlbmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUm91dGVMaW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9WaWV3L05vZGVuYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9WaWV3L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1FO0FBQ3ZCO0FBQ1o7QUFDUTtBQUNWOztBQUU5QixxRkFBTSxhQUFhLHFGQUFNO0FBQ3pCLHFGQUFNLGlCQUFpQixxRkFBTTtBQUM3QixxRkFBTSx5QkFBeUIscUZBQU07QUFDckMsY0FBYyxRQUFRO0FBQ3RCLElBQUkscUVBQVc7QUFDZixDQUFDLHVEQUFJO0FBQ0wsSUFBSSx5REFBSztBQUNULElBQUksaUVBQVM7QUFDYjs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUNBO0FBQ0EsaUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyxxRUFBTSxFOzs7Ozs7Ozs7Ozs7O0FDUHJCO0FBQUE7QUFDQTtBQUNBLGlEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMscUVBQU0sRTs7Ozs7Ozs7Ozs7OztBQ1ByQjtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsbUJBQW1CLDBEQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7QUFJQSxzQ0FBc0MsaUJBQWlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQLDJCQUEyQiw2Q0FBNkMsS0FBSztBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnREFBZ0Q7QUFDOUY7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUllO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDbkdEO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsVUFBVTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0JBQWdCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwwREFBMEQ7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLDhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDckdBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEU7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRTtBQUNpQjtBQUNQO0FBQ2xDO0FBQ1Y7OztBQUduQztBQUNBLHdCQUF3Qiw2QkFBNkIsRUFBRSxLQUFLO0FBQzVELGdDQUFnQyx3REFBWTtBQUM1QztBQUNBLHNCQUFzQix3REFBWTtBQUNsQzs7QUFFQSxZQUFZLHdEQUFZO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLHdEQUFZO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixjQUFjLFdBQVcsd0ZBQU0sOEJBQThCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxvQkFBb0IsZ0dBQWM7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnR0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxpQ0FBaUMsNkZBQVc7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxvQkFBb0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsb0JBQW9CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBOztBQUVBLHFCQUFxQiw2QkFBNkIsVUFBVSxlQUFlO0FBQzNFLFlBQVksNkZBQVcsU0FBUyxrQ0FBa0M7QUFDbEUsaUNBQWlDLHNCQUFzQjtBQUN2RDtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ25NQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFrQzs7QUFFbEMsb0RBQUssb0JBQW9CLG9EQUFLO0FBQzlCLG9EQUFLLDJCQUEyQixvREFBSztBQUNyQyxjQUFjLFFBQVE7QUFDdEI7QUFDQSxTQUFTLG9EQUFLO0FBQ2Q7QUFDQTs7QUFFQSxvREFBSztBQUNMO0FBQ0E7O0FBRUEsb0RBQUs7QUFDTDtBQUNBOztBQUVBLG9EQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9EQUFLO0FBQ0w7QUFDQSx1Q0FBdUMsb0RBQUs7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBdUQ7QUFDRjtBQUNVOztBQUUvRCxzRUFBZSxXQUFXLGdFQUFZLEVBQUUscUVBQWlCOztBQUV6RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ0Y7QUFDYzs7QUFFbkUsc0VBQWUsbUJBQW1CLGdFQUFZLEVBQUUsdUVBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ0Y7QUFDUTtBQUNNOztBQUVuRSxzRUFBZSxTQUFTLGdFQUFZLEVBQUUsb0VBQWdCLEVBQUUsdUVBQW1CLEU7Ozs7Ozs7Ozs7OztBQ0wzRTtBQUFBO0FBQUE7QUFBdUQ7QUFDRjs7QUFFckQsc0VBQWUsY0FBYyxnRUFBWSxFOzs7Ozs7Ozs7Ozs7QUNIekM7QUFBQTtBQUFBO0FBQUE7QUFBdUQ7QUFDTTtBQUNGOzs7QUFHM0Qsc0VBQWUsY0FBYyxvRUFBZ0IsRUFBRSxtRUFBZSxFOzs7Ozs7Ozs7Ozs7QUNMOUQ7QUFBQTtBQUFBO0FBQXVEO0FBQ0Y7OztBQUdyRCxzRUFBZSxrQkFBa0IsZ0VBQVksRTs7Ozs7Ozs7Ozs7O0FDSjdDO0FBQUE7QUFBQTtBQUF1RDtBQUNGOzs7QUFHckQsc0VBQWUsbUJBQW1CLGdFQUFZLEU7Ozs7Ozs7Ozs7OztBQ0o5QztBQUFBO0FBQUE7QUFBdUQ7QUFDZDs7O0FBR3pDLHNFQUFlLHFCQUFxQiwrREFBUSwrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRztBQUNBLENBQUMsRzs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUFBO0FBQUE7QUFBdUQ7QUFDRTtBQUNOOztBQUVuRCxzRUFBZSxpQkFBaUIsK0RBQVc7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEU7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0E7OztBQUdBLHVFQUFnQjtBQUNoQixrQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pGRDtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNKO0FBQ2dCOztBQUVuRSxzRUFBZSxNQUFNLCtEQUFXLENBQUMsdUVBQW1CLEU7Ozs7Ozs7Ozs7OztBQ0pwRDtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNFO0FBQ047O0FBRW5ELHNFQUFlLFdBQVcsK0RBQVc7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEU7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0E7OztBQUdBLHVFQUFnQjtBQUNoQixrQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pGRDtBQUFBO0FBQTRDOztBQUU1QyxnQkFBZ0IsK0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLHNFQUFPLEU7Ozs7Ozs7Ozs7OztBQ3RCdEI7QUFBQTtBQUE0QztBQUM1QyxnQkFBZ0IsK0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxDQUFDO0FBQ2Msc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDeEJ0QjtBQUFBO0FBQTRDOztBQUU1QztBQUNBLGdCQUFnQiwrREFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVMsa0NBQWtDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCw4Q0FBOEMsb0NBQW9DLHFEQUFxRDtBQUMxTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLDJDQUEyQzs7QUFFcEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0RBQWdELHFCQUFxQixrQ0FBa0M7O0FBRXRKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2Msc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQ3hHdkI7QUFBQTtBQUE0Qzs7QUFFNUMsZ0JBQWdCLCtEQUFRLG1DO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ2Msc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDOUJ0QjtBQUFBO0FBQTRDOztBQUU1QyxnQkFBZ0IsK0RBQVEsOEI7QUFDeEI7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLHNFQUFPLEU7Ozs7Ozs7Ozs7OztBQ2pDdEI7QUFBQTtBQUFBO0FBQTRDO0FBQ047O0FBRXRDLGdCQUFnQiwrREFBUSxzQztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQSxDQUFDO0FBQ2Msc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDckh0QjtBQUFBO0FBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsZ0JBQWdCLCtEQUFRLCtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQSxJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRzs7QUFFQTtBQUNBO0FBQ0Esb0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE87QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSztBQUNBO0FBQ0E7QUFDQSxJO0FBQ0E7QUFDQTtBQUNBLEc7O0FBRUEsdUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDYyxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7OztBQ3pJdkI7QUFBQTtBQUE0Qzs7QUFFNUMsZ0JBQWdCLCtEQUFRO0FBQ3hCLDZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQztBQUNjLHNFQUFPLEU7Ozs7Ozs7Ozs7OztBQ1p0QjtBQUFBO0FBQTRDOztBQUU1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYztBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLGM7QUFDQSxFQUFFOztBQUVGO0FBQ0E7OztBQUdBLGdCQUFnQiwrREFBUTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ2Msc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDdkN0QjtBQUFBO0FBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFO0FBQ0o7QUFDQSxHQUFHO0FBQ0gsbUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhGO0FBQ0E7QUFDQSxHO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBLHdCO0FBQ0E7QUFDQTs7O0FBR0EsZ0JBQWdCLCtEQUFRLCtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7QUFDQSxDQUFDO0FBQ2Msc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDaEZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjtBQUNQO0FBQ0c7QUFDQztBQUNRO0FBQ0w7QUFDSztBQUNHO0FBQ0Y7QUFDVDtBQUNNO0FBQ1o7Ozs7Ozs7Ozs7Ozs7QUNYbEI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ2UsK0VBQWdCLEU7Ozs7Ozs7Ozs7OztBQ2hCL0I7QUFBQTtBQUNBO0FBQ0EsMkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDhFQUFlLEU7Ozs7Ozs7Ozs7OztBQ1Q5QjtBQUFBO0FBQTRCOztBQUU1Qix1QkFBdUIsOENBQUssNENBQTRDO0FBQ3hFO0FBQ0Esd0I7QUFDQTtBQUNBO0FBQ0EsZ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNsQnZCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFk7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBLDZCO0FBQ0E7QUFDQTs7QUFFZSxvRUFBSyxFOzs7Ozs7Ozs7Ozs7O0FDZnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNwQjtBQUM2QztBQUMzQztBQUNaOztBQUU1QixxQkFBcUIsdURBQVE7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw2RUFBa0I7QUFDdkMsR0FBRztBQUNILEVBQUUsRUFBRSxzREFBVztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQUs7QUFDcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQWMsRUFBRSxtRkFBd0I7QUFDeEQsZ0JBQWdCLHlEQUFjLEVBQUUsNkVBQWtCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDOUN6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNYRjtBQUFBO0FBQUE7QUFBQTtBQUErQzs7QUFFeEM7QUFDUDtBQUNBOztBQUVBLFFBQVEsMERBQWU7QUFDdkI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZSxxRUFBTSxFOzs7Ozs7Ozs7Ozs7O0FDakJyQjtBQUFBO0FBQUE7QUFBQTtBQUF3RDs7QUFFakQsa0Q7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdPO0FBQ1AsOEJBQThCLHFFQUEwQjtBQUN4RCxFOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQU87QUFDUCxzQjtBQUNBO0FBQ0E7O0FBRUEsNkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBaUU7QUFDMUQ7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsZ0ZBQVE7O0FBRWpCO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFN0I7QUFDZTtBQUNmLGNBQWMsZ0dBQWdHO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0RBQUk7OztBQUdsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxxS0FBcUssS0FBSztBQUN2TCwyQkFBMkIsNEVBQTRFO0FBQ3ZHO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHFLQUFxSyxLQUFLO0FBQ2xMLHNCQUFzQiw0RUFBNEU7QUFDbEc7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztBQUVBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7O0FBRWYscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4Qix3QkFBd0I7O0FBRXhCLGdCQUFnQjs7QUFFaEIsYUFBYTtBQUNiLGFBQWE7QUFDYixjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUMzREE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxHO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUMrRDtBQUNoRTtBQUNGO0FBQ0k7QUFDSjtBQUNiO0FBQ0Y7OztBQUdiO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLDJHQUFrQixFQUFFLDJCQUEyQjs7QUFFdEY7QUFDQSxvQkFBb0Isb0NBQW9DO0FBQ3hEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLG1CQUFtQixvQ0FBb0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Ysb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixvREFBUTtBQUMzQjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2YsY0FBYyxpQkFBaUIsS0FBSztBQUNwQyx3Q0FBd0Msb0RBQVE7QUFDaEQ7O0FBRUE7QUFDQSxzQkFBc0IsMkdBQWtCLEVBQUUsNkNBQTZDLHNDQUFzQztBQUM3SDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhFQUE4RTtBQUM3RjtBQUNBLHFCQUFxQiwyR0FBa0IsRUFBRSx5RkFBeUY7O0FBRWxJO0FBQ0E7QUFDQSx1QkFBdUIsbURBQU8sRUFBRSxzSEFBc0g7QUFDdEo7QUFDQSx3Q0FBd0Msb0RBQW9EOztBQUU1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtREFBTztBQUMvQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyR0FBa0IsRUFBRSw2REFBNkQ7QUFDMUcsMENBQTBDLDJCQUEyQjtBQUNyRSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbURBQU87QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QixnREFBZ0QsR0FBRztBQUNoSDtBQUNBOztBQUVBO0FBQ0EsaURBQWlEOztBQUVqRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxREFBUztBQUM5QjtBQUNBLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFPO0FBQ2pDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGlCQUFpQixLQUFLO0FBQzNDO0FBQ0E7O0FBRUEsOEJBQThCLG9EQUFRO0FBQ3RDLHVCQUF1QixpQkFBaUI7QUFDeEM7O0FBRUEsc0JBQXNCLDBDQUEwQztBQUNoRSxpQ0FBaUMsaUJBQWlCO0FBQ2xELDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN2TUE7QUFBQTtBQUFBO0FBQUE7QUFBcUU7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVlLGdCO0FBQ2YsNEI7QUFDQTtBQUNBLGlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNaRDtBQUFBO0FBQXdDOztBQUV4Qzs7QUFFQSw4QkFBOEIsa0NBQWtDO0FBQ2hFLFFBQVEsOEJBQThCOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEO0FBQ0E7O0FBRUEsMEJBQTBCLGtDQUFrQztBQUM1RCxRQUFRLHFCQUFxQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGtCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7O0FBRUEsd0JBQXdCLDhCQUE4QjtBQUN0RCxRQUFRLG1CQUFtQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsRUFBRSxPO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkM7QUFDQSxVQUFVLHlDQUF5QyxVO0FBQ25ELCtDQUErQyx1QkFBdUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx3QkFBd0IscURBQVM7QUFDakM7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixhQUFhLFFBQVEscURBQVM7QUFDOUIsY0FBYyxRQUFRLHFEQUFTOzs7QUFHL0I7QUFDQSxTQUFTLFdBQVc7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDtBQUNBLDBCQUEwQixrQ0FBa0M7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxREFBUyxTQUFTLDZCQUE2QixFOzs7Ozs7Ozs7Ozs7QUNqSC9DO0FBQUE7QUFBd0M7O0FBRXhDLHFCQUFxQixxREFBUztBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLGFBQWEsUUFBUSxxREFBUztBQUM5QixjQUFjLFFBQVEscURBQVM7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHFCQUFxQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscURBQVMsU0FBUywwQkFBMEIsRTs7Ozs7Ozs7Ozs7O0FDbEM1QztBQUFBO0FBQUE7QUFBd0M7QUFDNkQ7O0FBRXJHO0FBQ0EsbUJBQW1CLGdCQUFnQixNO0FBQ25DLFNBQVMsbUJBQW1CO0FBQzVCO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEY7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRixtQkFBbUIsZ0JBQWdCO0FBQ25DLFNBQVMsU0FBUzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGdDQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJHQUFrQixFQUFFLDZEQUE2RDs7O0FBRzFHO0FBQ0E7Ozs7QUFJQSxtQkFBbUIscURBQVM7QUFDNUI7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYSxPQUFPLHFEQUFTOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLFdBQVcsVztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsZ0JBQWdCOztBQUV0QztBQUNBO0FBQ0EsNEJBQTRCLGdDQUFnQztBQUM1RCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHFEQUFTLFNBQVMsd0JBQXdCLEU7Ozs7Ozs7Ozs7OztBQ3RFMUM7QUFBQTtBQUFBO0FBQXdDO0FBQzZEOztBQUVyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGdEQUFnRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxzREFBc0Q7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sOERBQThEO0FBQ3BFLGdCQUFnQiwyR0FBa0IsRUFBRSx3REFBd0Q7O0FBRTVGO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IseUJBQXlCLGdEQUFnRCxHQUFHO0FBQ3BHO0FBQ0E7O0FBRUEsc0JBQXNCLHFEQUFTO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsYUFBYSxRQUFRLHFEQUFTO0FBQzlCLGNBQWMsUUFBUSxxREFBUzs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHdDQUF3QztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFEQUFTLFNBQVMsMkJBQTJCLEU7Ozs7Ozs7Ozs7OztBQy9HN0M7QUFBQTtBQUF3Qzs7QUFFeEMsaUJBQWlCLHFEQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsYUFBYSxRQUFRLHFEQUFTO0FBQzlCLGNBQWMsUUFBUSxxREFBUzs7QUFFL0I7QUFDQSxTQUFTLFdBQVc7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxREFBUyxTQUFTLHNCQUFzQixFOzs7Ozs7Ozs7Ozs7QUM3QnhDO0FBQUE7QUFBQTtBQUF3QztBQUNGOztBQUV0QyxzQkFBc0IscURBQVMsRTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLGFBQWEsT0FBTyxxREFBUztBQUM3QixhQUFhLE9BQU8scURBQVM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw2QkFBNkIsVztBQUN2QztBQUNBO0FBQ0EsK0M7QUFDQSxtQkFBbUIsb0RBQVE7O0FBRTNCO0FBQ0EsMEJBQTBCLDREQUE0RDtBQUN0Rjs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRztBQUNBO0FBQ0E7O0FBRUEscURBQVMsU0FBUyx5QkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDbEMzQztBQUFBO0FBQUE7QUFBd0M7QUFDSTs7O0FBRzVDLHNCQUFzQixxREFBUztBQUMvQjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLGFBQWEsUUFBUSxxREFBUztBQUM5QixjQUFjLFFBQVEscURBQVM7OztBQUcvQjtBQUNBLFNBQVMscUJBQXFCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsNERBQU87QUFDaEM7QUFDQTtBQUNBLDJCQUEyQixvREFBb0Q7QUFDL0UsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFEQUFTLFNBQVMsMkJBQTJCLEU7Ozs7Ozs7Ozs7OztBQ3BEN0M7QUFBQTtBQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsNEJBQTRCOztBQUVyQyw4RDtBQUNBO0FBQ0E7QUFDQSxpRDs7QUFFQSw2QjtBQUNBLEVBQUU7QUFDRjtBQUNBLFNBQVMsbUJBQW1COztBQUU1QixpRTtBQUNBLGlDO0FBQ0E7O0FBRUE7QUFDQSw2QjtBQUNBO0FBQ0EsNkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsMEJBQTBCLHFEQUFTO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsYUFBYSxRQUFRLHFEQUFTO0FBQzlCLGNBQWMsUUFBUSxxREFBUzs7OztBQUkvQjtBQUNBLFNBQVMsV0FBVztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxREFBUyxTQUFTLCtCQUErQixFOzs7Ozs7Ozs7Ozs7QUNsRmpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQjtBQUNIO0FBQ0Y7QUFDSTtBQUNDO0FBQ0E7QUFDSDs7Ozs7Ozs7Ozs7OztBQ05uQjtBQUFBO0FBQUE7QUFBbUM7O0FBRXBCLDZCQUE2QixtREFBTztBQUNuRDtBQUNBOztBQUVBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBLEc7QUFDQTtBQUNBLElBQUksdURBQXVELFVBQVUsUTs7Ozs7Ozs7Ozs7O0FDWnJFO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RTtBQUMrQjtBQUNYO0FBQ007QUFDMUM7QUFDUjtBQUNvQztBQUM1RDtBQUNRO0FBQ1Y7O0FBRTFCLGlCQUFpQix3SEFBVTtBQUNwQjtBQUNBOztBQUVQO0FBQ0EscUJBQXFCLDhDQUFLLFVBQVUsU0FBUyxLQUFLO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsd0dBQVE7QUFDakIsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQkFBMEIsMkZBQVM7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix5REFBVyxFQUFFLGdFQUFjO0FBQzVDLGdCQUFnQixzQkFBc0I7QUFDdEMsSUFBSTs7QUFFSixXQUFXLDRIQUF3QjtBQUNuQztBQUNBLGlCQUFpQiwrQkFBK0I7QUFDaEQsSUFBSTs7QUFFSjtBQUNBLGdCQUFnQiwrQkFBK0I7QUFDL0MsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsOENBQUs7QUFDN0I7O0FBRUEsY0FBYyx3Q0FBd0M7QUFDdEQ7O0FBRUE7QUFDQSx1QkFBdUIsa0RBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQUs7O0FBRTlCOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxSEFBa0I7QUFDckMsMkJBQTJCLDZDQUFJO0FBQy9CLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvSEFBTTtBQUNTLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNoSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQjs7Ozs7Ozs7Ozs7O0FDTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUMzQixvQkFBb0IsaURBQVE7QUFDNUIsdUJBQXVCLGlEQUFRO0FBQy9CLHlCQUF5QixpREFBUSxpQjs7Ozs7Ozs7Ozs7O0FDSHhDO0FBQUE7QUFBbUc7QUFDcEYsdUxBQVUsU0FBUyxFOzs7Ozs7Ozs7Ozs7QUNEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RTtBQUNtQjtBQUNjO0FBQ3JCO0FBQ3REO0FBQ3VDO0FBQzZEOztBQUV0SSxvQkFBb0IscURBQVMsRUFBRSw0R0FBYSxFQUFFLDhEQUFrQixFQUFFLHlFQUE2QixFQUFFLHlEQUFhO0FBQzlHLGdCQUFnQixtREFBVyxFQUFFLHNEQUFjLEVBQUUsd0RBQWdCO0FBQzdEO0FBQ0EsK0JBQStCLHlFQUE2QixRQUFRO0FBQ3BFLFFBQVEsd0dBQVEsdUJBQXVCLElBQUk7QUFDM0M7O0FBRUE7QUFDQSx3QkFBd0IsNEdBQWE7QUFDckMsZ0RBQWdELG1IQUFZO0FBQzVEO0FBQ0EsRUFBRTtBQUNGLHlCQUF5Qiw4REFBa0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMkZBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxpREFBUTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbURBQVc7QUFDNUIsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CLHFEQUFTO0FBQzVCOztBQUVBO0FBQ0EsMkJBQTJCLHVEQUFXO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdURBQVc7QUFDeEI7QUFDQSxpQkFBaUIsc0RBQWM7QUFDL0I7QUFDQSxpQkFBaUIsd0RBQWdCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIseURBQWE7QUFDeEM7O0FBRUE7QUFDQSxtQkFBbUIsd0RBQVk7QUFDL0IsRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0hBQU07QUFDUyxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDOUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ0E7QUFDQSwrQjs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQWtDO0FBQzNCLHVCQUF1QixpREFBUSxlOzs7Ozs7Ozs7Ozs7QUNEdEM7QUFBQTtBQUFtRztBQUNwRix1TEFBVSxjQUFjLEU7Ozs7Ozs7Ozs7OztBQ0R2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RTtBQUNtQjtBQUM3RDtBQUNRO0FBQzRCO0FBQ007O0FBRTVFLG9CQUFvQix1REFBVyxFQUFFLHdEQUFZOztBQUU3QyxnQkFBZ0Isc0RBQWM7O0FBRTlCLHdCQUF3QiwyRkFBUztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGlEQUFRO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzREFBYztBQUM5QixHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsdURBQVc7QUFDOUI7O0FBRUE7QUFDQSxtQkFBbUIsd0RBQVk7QUFDL0I7O0FBRUE7QUFDQSwyQkFBMkIsd0RBQVk7QUFDdkM7QUFDQTs7QUFFQSxvSEFBTTtBQUNTLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNoRHpCO0FBQUE7QUFBbUc7QUFDcEYsdUxBQVUsUUFBUSxFOzs7Ozs7Ozs7Ozs7QUNEakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRFO0FBQ21CO0FBQzdEO0FBQzJDO0FBQ0c7O0FBRWhGLHNCQUFzQixnR0FBUTs7QUFFOUIsbUJBQW1CLDJGQUFTO0FBQzVCO0FBQ0EsU0FBUyxpREFBUTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHdDQUF3QztBQUN4RDs7QUFFQSxTQUFTLFlBQVk7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdGQUFRO0FBQ3BDLFVBQVUsZ0ZBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw2QkFBNkIsNkJBQTZCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSEFBTTtBQUNTLG1FQUFJLEVBQUMiLCJmaWxlIjoiYnJvd3Nlci1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdMT0JBTCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvR2xvYmFsXCI7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcIi4vc3JjL0FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgUm91dGUgZnJvbSBcIi4vc3JjL1JvdXRlXCI7XG5pbXBvcnQgUm91dGVMaW5rIGZyb20gXCIuL3NyYy9Sb3V0ZUxpbmtcIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuL3NyYy9WaWV3XCI7XG5cbkdMT0JBTC5kZWZhdWx0anMgPSBHTE9CQUwuZGVmYXVsdGpzIHx8IHt9O1xuR0xPQkFMLmRlZmF1bHRqcy5hcHAgPSBHTE9CQUwuZGVmYXVsdGpzLmFwcCB8fCB7fTtcbkdMT0JBTC5kZWZhdWx0anMuYXBwLnRvb2xib3ggPSBHTE9CQUwuZGVmYXVsdGpzLmFwcC50b29sYm94IHx8IHtcblx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxuICAgIEFwcGxpY2F0aW9uLFxuXHRWaWV3LFxuICAgIFJvdXRlLFxuICAgIFJvdXRlTGlua1xufTtcblxuXG4iLCJjb25zdCBHTE9CQUwgPSAoKCkgPT4ge1xyXG5cdGlmKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWw7XHJcblx0aWYodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHdpbmRvdztcdFxyXG5cdGlmKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gc2VsZjtcclxuXHRyZXR1cm4ge307XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHTE9CQUw7IiwiY29uc3QgR0xPQkFMID0gKCgpID0+IHtcclxuXHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xyXG5cdGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB3aW5kb3c7XHRcclxuXHRpZih0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNlbGY7XHJcblx0cmV0dXJuIHt9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR0xPQkFMOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3BlcnR5IHtcblx0Y29uc3RydWN0b3Ioa2V5LCBjb250ZXh0KXtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR9XG5cdFxuXHRnZXQga2V5RGVmaW5lZCgpe1xuXHRcdHJldHVybiB0aGlzLmtleSBpbiB0aGlzLmNvbnRleHQ7IFxuXHR9XG5cdFxuXHRnZXQgaGFzVmFsdWUoKXtcblx0XHRyZXR1cm4gISF0aGlzLmNvbnRleHRbdGhpcy5rZXldO1xuXHR9XG5cdFxuXHRnZXQgdmFsdWUoKXtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcblx0fVxuXHRcblx0c2V0IHZhbHVlKGRhdGEpe1xuXHRcdHRoaXMuY29udGV4dFt0aGlzLmtleV0gPSBkYXRhO1xuXHR9XG5cdFxuXHRzZXQgYXBwZW5kKGRhdGEpIHtcblx0XHRpZighdGhpcy5oYXNWYWx1ZSlcblx0XHRcdHRoaXMudmFsdWUgPSBkYXRhO1xuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdFx0dmFsdWUucHVzaChkYXRhKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy52YWx1ZSA9IFt0aGlzLnZhbHVlLCBkYXRhXTtcblx0XHR9XG5cdH1cblx0XG5cdHJlbW92ZSgpe1xuXHRcdGRlbGV0ZSB0aGlzLmNvbnRleHRbdGhpcy5rZXldO1xuXHR9XG5cdFxuXHRzdGF0aWMgbG9hZChkYXRhLCBrZXksIGNyZWF0ZT10cnVlKSB7XG5cdFx0bGV0IGNvbnRleHQgPSBkYXRhO1xuXHRcdGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoXCJcXC5cIik7XG5cdFx0bGV0IG5hbWUgPSBrZXlzLnNoaWZ0KCkudHJpbSgpO1xuXHRcdHdoaWxlKGtleXMubGVuZ3RoID4gMCl7XG5cdFx0XHRpZighY29udGV4dFtuYW1lXSl7XG5cdFx0XHRcdGlmKCFjcmVhdGUpXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb250ZXh0W25hbWVdID0ge31cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29udGV4dCA9IGNvbnRleHRbbmFtZV07XG5cdFx0XHRuYW1lID0ga2V5cy5zaGlmdCgpLnRyaW0oKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG5ldyBPYmplY3RQcm9wZXJ0eShuYW1lLCBjb250ZXh0KTtcblx0fVxufTsiLCJpbXBvcnQgT2JqZWN0UHJvcGVydHkgZnJvbSBcIi4vT2JqZWN0UHJvcGVydHkuanNcIjtcclxuLyoqXHJcbiAqIGFwcGVuZCBhIHByb3BlcnkgdmFsdWUgdG8gYW4gb2JqZWN0LiBJZiBwcm9wZXJ5IGV4aXN0cyBpdHMgd291bGQgYmUgY29udmVydGVkIHRvIGFuIGFycmF5XHJcbiAqIFxyXG4gKiAgQHBhcmFtIGFLZXk6c3RyaW5nIG5hbWUgb2YgcHJvcGVydHlcclxuICogIEBwYXJhbSBhRGF0YTphbnkgcHJvcGVydHkgdmFsdWVcclxuICogIEBwYXJhbSBhT2JqZWN0Om9iamVjdCB0aGUgb2JqZWN0IHRvIGFwcGVuZCB0aGUgcHJvcGVydHlcclxuICogIFxyXG4gKiAgQHJldHVybiByZXR1cm5zIHRoZSBjaGFuZ2VkIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uKGFLZXksIGFEYXRhLCBhT2JqZWN0KSB7XHJcblx0aWYgKHR5cGVvZiBhRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0Y29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKGFPYmplY3QsIGFLZXksIHRydWUpXHJcblx0XHRwcm9wZXJ0eS5hcHBlbmQgPSBhRGF0YTtcclxuXHR9XHJcblx0cmV0dXJuIGFPYmplY3Q7XHJcbn07XHJcblxyXG4vKipcclxuICogY2hlY2tlZCBpZiBhbiBvYmplY3QgYSBzaW1wbGUgb2JqZWN0LiBObyBBcnJheSwgTWFwIG9yIHNvbWV0aGluZyBlbHNlLlxyXG4gKiBcclxuICogQHBhcmFtIGFPYmplY3Q6b2JqZWN0IHRoZSBvYmplY3QgdG8gYmUgdGVzdGluZ1xyXG4gKiBcclxuICogQHJldHVybiBib29sZWFuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNQb2pvID0gZnVuY3Rpb24oYU9iamVjdCkge1xyXG5cdHJldHVybiB0eXBlb2YgYU9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhT2JqZWN0ICE9IG51bGwgJiYgYU9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBtZXJnaW5nIG9iamVjdCBpbnRvIGEgdGFyZ2V0IG9iamVjdC4gSXRzIG9ubHkgbWVyZ2Ugc2ltcGxlIG9iamVjdCBhbmQgc3ViIG9iamVjdHMuIEV2ZXJ5IG90aGVyIFxyXG4gKiB2YWx1ZSB3b3VsZCBiZSByZXBsYWNlZCBieSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0LlxyXG4gKiBcclxuICogc2FtcGxlOiBtZXJnZSh0YXJnZXQsIHNvdXJjZS0xLCBzb3VyY2UtMiwgLi4uc291cmNlLW4pXHJcbiAqIFxyXG4gKiBAcGFyYW0gYVRhcmdldDpvYmplY3QgdGhlIHRhcmdldCBvYmplY3QgdG8gbWVyZ2luZyBpbnRvXHJcbiAqIEBwYXJhbSBhU291cmNlczpvYmplY3RcclxuICogXHJcbiAqIEByZXR1cm4gb2JqZWN0IHJldHVybnMgdGhlIHRhcmdldCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBtZXJnZSA9IGZ1bmN0aW9uKGFUYXJnZXQpIHtcclxuXHRmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKGFLZXkgPT4ge1xyXG5cdFx0XHRpZiAoaXNQb2pvKGFUYXJnZXRbYUtleV0pKVxyXG5cdFx0XHRcdG1lcmdlKGFUYXJnZXRbYUtleV0sIHNvdXJjZVthS2V5XSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRhVGFyZ2V0W2FLZXldID0gc291cmNlW2FLZXldO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYVRhcmdldDtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBidWlsZFByb3BlcnR5RmlsdGVyID0gZnVuY3Rpb24oeyBuYW1lcywgYWxsb3dlZCB9KSB7XHJcblx0cmV0dXJuIChuYW1lLCB2YWx1ZSwgY29udGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuIG5hbWVzLmluY2x1ZGVzKG5hbWUpID09PSBhbGxvd2VkO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgW2RhdGEsIHByb3BGaWx0ZXIsIHtkZWVwID0gZmFsc2UsIHJlY3Vyc2l2ZSA9IHRydWUsIHBhcmVudHMgPSBbXX0gPSB7fV0gPSBhcmd1bWVudHM7XHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblxyXG5cdGZvciAobmFtZSBpbiBkYXRhKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGRhdGFbbmFtZV07XHJcblx0XHRjb25zdCBhY2NlcHQgPSBwcm9wRmlsdGVyKG5hbWUsIHZhbHVlLCBkYXRhKTtcclxuXHRcdGlmIChhY2NlcHQgJiYgKCFkZWVwIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpKVxyXG5cdFx0XHRyZXN1bHRbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdGVsc2UgaWYgKGFjY2VwdCAmJiBkZWVwKSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcblx0XHRcdGlmICh0eXBlICE9PSBcIm9iamVjdFwiXHJcblx0XHRcdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheVxyXG5cdFx0XHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgTWFwXHJcblx0XHRcdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBTZXRcclxuXHRcdFx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cFxyXG5cdFx0XHRcdHx8IHBhcmVudHMuaW5jbHVkZXNbdmFsdWVdXHJcblx0XHRcdFx0fHwgdmFsdWUgPT0gZGF0YSlcclxuXHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJlc3VsdFtuYW1lXSA9IGZpbHRlcih2YWx1ZSwgcHJvcEZpbHRlciwge2RlZXAsIHJlY3Vyc2l2ZSwgcGFyZW50czogIHBhcmVudHMuY29uY2F0KGRhdGEpfSk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGlzUG9qbyxcclxuXHRhcHBlbmQsXHJcblx0bWVyZ2UsXHJcblx0ZmlsdGVyLFxyXG5cdGJ1aWxkUHJvcGVydHlGaWx0ZXJcclxufTsiLCJjb25zdCBzZWVrQXRDaGFpbiA9IChyZXNvbHZlciwgcHJvcGVydHkpID0+IHtcblx0d2hpbGUocmVzb2x2ZXIpe1xuXHRcdGNvbnN0IGRlZiA9IHJlc29sdmVyLnByb3h5LmhhbmRsZS5nZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSwgZmFsc2UpO1xuXHRcdGlmKGRlZilcblx0XHRcdHJldHVybiBkZWY7XG5cdFx0XG5cdFx0cmVzb2x2ZXIgPSByZXNvbHZlci5wYXJlbnQ7XG5cdH1cdFxuXHRyZXR1cm4geyBkYXRhOiBudWxsLCByZXNvbHZlcjogbnVsbCwgZGVmaW5lZDogZmFsc2UgfTtcbn1cblxuY2xhc3MgSGFuZGxlIHtcblx0Y29uc3RydWN0b3IoZGF0YSwgcmVzb2x2ZXIpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucmVzb2x2ZXIgPSByZXNvbHZlcjtcblx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHR9XG5cdFxuXHR1cGRhdGVEYXRhKGRhdGEpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0fVxuXHRcblx0cmVzZXRDYWNoZSgpe1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHRnZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSwgc2VlayA9IHRydWUpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMocHJvcGVydHkpKVxuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KHByb3BlcnR5KTtcblx0XHRcblx0XHRsZXQgZGVmID0gbnVsbFxuXHRcdGlmICh0aGlzLmRhdGEgJiYgcHJvcGVydHkgaW4gdGhpcy5kYXRhKVxuXHRcdFx0ZGVmID0geyBkYXRhOiB0aGlzLmRhdGEsIHJlc29sdmVyOiB0aGlzLnJlc29sdmVyLCBkZWZpbmVkOiB0cnVlIH07XG5cdFx0ZWxzZSBpZihzZWVrKVxuXHRcdFx0ZGVmID0gc2Vla0F0Q2hhaW4odGhpcy5yZXNvbHZlci5wYXJlbnQsIHByb3BlcnR5KTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRpZihkZWYuZGVmaW5lZClcblx0XHRcdHRoaXMuY2FjaGUuc2V0KHByb3BlcnR5LCBkZWYpO1xuXHRcdHJldHVybiBkZWY7XG5cdH1cblxuXHRoYXNQcm9wZXJ0eShwcm9wZXJ0eSkge1xuXHRcdC8vQFRPRE8gd3JpdGUgdGVzdHMhISFcblx0XHRjb25zdCB7IGRlZmluZWQgfSA9IHRoaXMuZ2V0UHJvcGVydHlEZWYocHJvcGVydHkpO1xuXHRcdHJldHVybiBkZWZpbmVkO1xuXHR9XG5cdGdldFByb3BlcnR5KHByb3BlcnR5KSB7XG5cdFx0Ly9AVE9ETyB3cml0ZSB0ZXN0cyEhIVx0XG5cdFx0Y29uc3QgeyBkYXRhIH0gPSB0aGlzLmdldFByb3BlcnR5RGVmKHByb3BlcnR5KTtcblx0XHRyZXR1cm4gZGF0YSA/IGRhdGFbcHJvcGVydHldIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdC8vQFRPRE8gd291bGQgc3VwcG9ydCB0aGlzIGFjdGlvbiBvbiBhbiBwcm94aWVkIHJlc29sdmVyIGNvbnRleHQ/Pz8gd3JpdGUgdGVzdHMhISFcblx0XHRjb25zdCB7IGRhdGEsIGRlZmluZWQgfSA9IHRoaXMuZ2V0UHJvcGVydHlEZWYocHJvcGVydHkpO1xuXHRcdGlmIChkZWZpbmVkKVxuXHRcdFx0ZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRlbHNlIHtcblx0XHRcdGlmICh0aGlzLmRhdGEpXG5cdFx0XHRcdHRoaXMuZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB7fVxuXHRcdFx0XHR0aGlzLmRhdGFbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhY2hlLnNldChwcm9wZXJ0eSwgeyBkYXRhOiB0aGlzLmRhdGEsIHJlc29sdmVyOiB0aGlzLnJlc29sdmVyLCBkZWZpbmVkOiB0cnVlIH0pO1xuXHRcdH1cblx0fVxuXHRkZWxldGVQcm9wZXJ0eShwcm9wZXJ0eSkge1xuXHRcdC8vQFRPRE8gd291bGQgc3VwcG9ydCB0aGlzIGFjdGlvbiBvbiBhbiBwcm94aWVkIHJlc29sdmVyIGNvbnRleHQ/Pz8gd3JpdGUgdGVzdHMhISFcdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwidW5zdXBwb3J0ZWQgZnVuY3Rpb24hXCIpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQsIHJlc29sdmVyKSB7XG5cdFx0dGhpcy5oYW5kbGUgPSBuZXcgSGFuZGxlKGNvbnRleHQsIHJlc29sdmVyKTtcdFx0XG5cdFx0dGhpcy5kYXRhID0gbmV3IFByb3h5KHRoaXMuaGFuZGxlLCB7XG5cdFx0XHRoYXM6IGZ1bmN0aW9uKGRhdGEsIHByb3BlcnR5KSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLmhhc1Byb3BlcnR5KHByb3BlcnR5KTtcblx0XHRcdH0sXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKGRhdGEsIHByb3BlcnR5KSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLmdldFByb3BlcnR5KHByb3BlcnR5KTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKGRhdGEsIHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xuXHRcdFx0fSxcblx0XHRcdGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbihkYXRhLCBwcm9wZXJ0eSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5kZWxldGVQcm9wZXJ0eShwcm9wZXJ0eSk7XG5cdFx0XHR9XG5cdFx0XHQvL0BUT0RPIG5lZWQgdG8gc3VwcG9ydCB0aGUgb3RoZXIgcHJveHkgYWN0aW9uc1x0XHRcblx0XHR9KTs7XG5cdH1cblx0XG5cdHVwZGF0ZURhdGEoZGF0YSl7XG5cdFx0dGhpcy5oYW5kbGUudXBkYXRlRGF0YShkYXRhKVx0XHRcblx0fVxuXHRcblx0cmVzZXRDYWNoZSgpe1xuXHRcdHRoaXMuaGFuZGxlLnJlc2V0Q2FjaGUoKTtcblx0fVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0VmFsdWUge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSl7XG5cdFx0dGhpcy5oYXNWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cdFxufTsiLCJpbXBvcnQgR0xPQkFMIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanNcIlxyXG5pbXBvcnQgT2JqZWN0UHJvcGVydHkgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzXCI7XHJcbmltcG9ydCBPYmplY3RVdGlscyBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanNcIlxyXG5pbXBvcnQgRGVmYXVsdFZhbHVlIGZyb20gXCIuL0RlZmF1bHRWYWx1ZS5qc1wiO1xyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0LmpzXCI7XHJcblxyXG5cclxuY29uc3QgRVhFQ1VUSU9OX1dBUk5fVElNRU9VVCA9IDEwMDA7XHJcbmNvbnN0IEVYUFJFU1NJT04gPSAvXFwkXFx7KChbYS16QS1aMC05XFwtX1xcc10rKTo6KT8oW15cXHtcXH1dKylcXH0vO1xyXG5jb25zdCBERUZBVUxUX05PVF9ERUZJTkVEID0gbmV3IERlZmF1bHRWYWx1ZSgpO1xyXG5jb25zdCB0b0RlZmF1bHRWYWx1ZSA9IHZhbHVlID0+IHtcclxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBEZWZhdWx0VmFsdWUpXHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblxyXG5cdHJldHVybiBuZXcgRGVmYXVsdFZhbHVlKHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGV4ZWN1dGUgPSBhc3luYyBmdW5jdGlvbihhU3RhdGVtZW50LCBhQ29udGV4dCkge1xyXG5cdGlmICh0eXBlb2YgYVN0YXRlbWVudCAhPT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBhU3RhdGVtZW50O1xyXG5cdFx0XHJcblx0Y29uc3QgZXhwcmVzc2lvbiA9IG5ldyBGdW5jdGlvbihcImNvbnRleHRcIiwgXHJcbmBcclxucmV0dXJuIChhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cdHRyeXsgXHJcblx0XHR3aXRoKGNvbnRleHQpe1xyXG5cdFx0XHQgcmV0dXJuICR7YVN0YXRlbWVudH1cclxuXHRcdH1cclxuXHR9Y2F0Y2goZSl7XHJcblx0XHR0aHJvdyBlO1xyXG5cdH1cclxufSkoY29udGV4dClgXHJcblx0KTtcclxuXHRcclxuXHRsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRjb25zb2xlLndhcm4oXCJsb25nIHJ1bm5pbmcgc3RhdGVtZW50OlwiLCBhU3RhdGVtZW50LCBuZXcgRXJyb3IoKSk7XHJcblx0fSwgRVhFQ1VUSU9OX1dBUk5fVElNRU9VVClcclxuXHRcclxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBleHByZXNzaW9uKGFDb250ZXh0KTtcclxuXHRcclxuXHRpZih0aW1lb3V0KVxyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IHJlc29sdmUgPSBhc3luYyBmdW5jdGlvbihhUmVzb2x2ZXIsIGFFeHByZXNzaW9uLCBhRmlsdGVyLCBhRGVmYXVsdCkge1xyXG5cdGlmIChhRmlsdGVyICYmIGFSZXNvbHZlci5uYW1lICE9IGFGaWx0ZXIpXHJcblx0XHRyZXR1cm4gYVJlc29sdmVyLnBhcmVudCA/IHJlc29sdmUoYVJlc29sdmVyLnBhcmVudCwgYUV4cHJlc3Npb24sIGFGaWx0ZXIsIGFEZWZhdWx0KSA6IG51bGw7XHJcblx0XHJcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZShhRXhwcmVzc2lvbiwgYVJlc29sdmVyLnByb3h5LmRhdGEpO1xyXG5cdGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblxyXG5cdGVsc2UgaWYgKGFEZWZhdWx0IGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlICYmIGFEZWZhdWx0Lmhhc1ZhbHVlKVxyXG5cdFx0cmV0dXJuIGFEZWZhdWx0LnZhbHVlO1xyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplID0gdmFsdWUgPT4ge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0dmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcblx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoID09IDAgPyBudWxsIDogdmFsdWU7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvblJlc29sdmVyIHtcclxuXHRjb25zdHJ1Y3Rvcih7IGNvbnRleHQgPSBHTE9CQUwsIHBhcmVudCA9IG51bGwsIG5hbWUgPSBudWxsIH0pIHtcclxuXHRcdHRoaXMucGFyZW50ID0gKHBhcmVudCBpbnN0YW5jZW9mIEV4cHJlc3Npb25SZXNvbHZlcikgPyBwYXJlbnQgOiBudWxsO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcblx0XHR0aGlzLnByb3h5ID0gbmV3IENvbnRleHQodGhpcy5jb250ZXh0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cdGdldCBjaGFpbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmNoYWluICsgXCIvXCIgKyB0aGlzLm5hbWUgOiBcIi9cIiArIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdGdldCBlZmZlY3RpdmVDaGFpbigpIHtcclxuXHRcdGlmICghdGhpcy5jb250ZXh0KVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5lZmZlY3RpdmVDaGFpbiA6IFwiXCI7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5lZmZlY3RpdmVDaGFpbiArIFwiL1wiICsgdGhpcy5uYW1lIDogXCIvXCIgKyB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHRnZXQgY29udGV4dENoYWluKCkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0XHRsZXQgcmVzb2x2ZXIgPSB0aGlzO1xyXG5cdFx0d2hpbGUgKHJlc29sdmVyKSB7XHJcblx0XHRcdGlmIChyZXNvbHZlci5jb250ZXh0KVxyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKHJlc29sdmVyLmNvbnRleHQpO1xyXG5cclxuXHRcdFx0cmVzb2x2ZXIgPSByZXNvbHZlci5wYXJlbnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoa2V5LCBmaWx0ZXIpIHtcclxuXHRcdGlmICgha2V5KVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRlbHNlIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9IHRoaXMubmFtZSkge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJlbnQpXHJcblx0XHRcdFx0dGhpcy5wYXJlbnQuZ2V0RGF0YShrZXksIGZpbHRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBwcm9wZXJ0eSA9IE9iamVjdFByb3BlcnR5LmxvYWQodGhpcy5jb250ZXh0LCBrZXksIGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuIHByb3BlcnR5ID8gcHJvcGVydHkudmFsdWUgOiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXBkYXRlRGF0YShrZXksIHZhbHVlLCBmaWx0ZXIpIHtcclxuXHRcdGlmICgha2V5KVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRlbHNlIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9IHRoaXMubmFtZSkge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJlbnQpXHJcblx0XHRcdFx0dGhpcy5wYXJlbnQudXBkYXRlRGF0YShrZXksIHZhbHVlLCBmaWx0ZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYodGhpcy5jb250ZXh0ID09IG51bGwgfHwgdHlwZW9mIHRoaXMuY29udGV4dCA9PT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdFx0dGhpcy5jb250ZXh0ID0ge307XHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnByb3h5LnVwZGF0ZURhdGEodGhpcy5jb250ZXh0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBwcm9wZXJ0eSA9IE9iamVjdFByb3BlcnR5LmxvYWQodGhpcy5jb250ZXh0LCBrZXkpO1xyXG5cdFx0XHRwcm9wZXJ0eS52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLnByb3h5LnJlc2V0Q2FjaGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1lcmdlQ29udGV4dChjb250ZXh0LCBmaWx0ZXIpIHtcclxuXHRcdGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9IHRoaXMubmFtZSkge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJlbnQpXHJcblx0XHRcdFx0dGhpcy5wYXJlbnQubWVyZ2VDb250ZXh0KGNvbnRleHQsIGZpbHRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNvbnRleHQgPyBPYmplY3RVdGlscy5tZXJnZSh0aGlzLmNvbnRleHQsIGNvbnRleHQpIDogY29udGV4dDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlc29sdmUoYUV4cHJlc3Npb24sIGFEZWZhdWx0KSB7XHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgbWF0Y2ggPSBFWFBSRVNTSU9OLmV4ZWMoYUV4cHJlc3Npb24pO1xyXG5cdFx0XHRpZiAobWF0Y2gpXHJcblx0XHRcdFx0cmV0dXJuIGF3YWl0IHJlc29sdmUodGhpcywgbWF0Y2hbM10sIG5vcm1hbGl6ZShtYXRjaFsyXSksIGRlZmF1bHRWYWx1ZSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gYXdhaXQgcmVzb2x2ZSh0aGlzLCBub3JtYWxpemUoYUV4cHJlc3Npb24pLCBudWxsLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgZXhlY3V0aW5nIHN0YXRtZW50XFxcIlwiLCBhRXhwcmVzc2lvbiwgXCJcXFwiOlwiLCBlKTtcclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZS5oYXNWYWx1ZSA/IGRlZmF1bHRWYWx1ZS52YWx1ZSA6IGFFeHByZXNzaW9uO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgcmVzb2x2ZVRleHQoYVRleHQsIGFEZWZhdWx0KSB7XHJcblx0XHRsZXQgdGV4dCA9IGFUZXh0O1xyXG5cdFx0bGV0IHRlbXAgPSBhVGV4dDsgLy8gcmVxdWlyZWQgdG8gcHJldmVudCBpbmZpbml0eSBsb29wXHJcblx0XHRsZXQgbWF0Y2ggPSBFWFBSRVNTSU9OLmV4ZWModGV4dCk7XHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEXHJcblx0XHR3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlc29sdmUobWF0Y2hbMF0sIGRlZmF1bHRWYWx1ZSk7XHJcblx0XHRcdHRlbXAgPSB0ZW1wLnNwbGl0KG1hdGNoWzBdKS5qb2luKCk7IC8vIHJlbW92ZSBjdXJyZW50IG1hdGNoIGZvciBuZXh0IGxvb3BcclxuXHRcdFx0dGV4dCA9IHRleHQuc3BsaXQobWF0Y2hbMF0pLmpvaW4odHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAocmVzdWx0ID09IG51bGwgPyBcIm51bGxcIiA6IHJlc3VsdCkpO1xyXG5cdFx0XHRtYXRjaCA9IEVYUFJFU1NJT04uZXhlYyh0ZW1wKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0ZXh0O1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzeW5jIHJlc29sdmUoYUV4cHJlc3Npb24sIGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpIHtcclxuXHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGFDb250ZXh0IH0pO1xyXG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEO1xyXG5cdFx0aWYgKHR5cGVvZiBhVGltZW91dCA9PT0gXCJudW1iZXJcIiAmJiBhVGltZW91dCA+IDApXHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHJlc29sdmUocmVzb2x2ZXIucmVzb2x2ZShhRXhwcmVzc2lvbiwgZGVmYXVsdFZhbHVlKSk7XHJcblx0XHRcdFx0fSwgYVRpbWVvdXQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShhRXhwcmVzc2lvbiwgZGVmYXVsdFZhbHVlKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzeW5jIHJlc29sdmVUZXh0KGFUZXh0LCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KSB7XHJcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBhQ29udGV4dCB9KTtcclxuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcclxuXHRcdGlmICh0eXBlb2YgYVRpbWVvdXQgPT09IFwibnVtYmVyXCIgJiYgYVRpbWVvdXQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHJlc29sdmVyLnJlc29sdmVUZXh0KGFUZXh0LCBkZWZhdWx0VmFsdWUpKTtcclxuXHRcdFx0XHR9LCBhVGltZW91dCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiByZXNvbHZlci5yZXNvbHZlVGV4dChhVGV4dCwgZGVmYXVsdFZhbHVlKTtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGJ1aWxkU2VjdXJlKHtjb250ZXh0LCBwcm9wRmlsdGVyLCBvcHRpb249e2RlZXA6dHJ1ZX0sIG5hbWUsIHBhcmVudH0pe1xyXG5cdFx0Y29udGV4dCA9IE9iamVjdFV0aWxzLmZpbHRlcih7ZGF0YTogY29udGV4dCwgcHJvcEZpbHRlciwgb3B0aW9ufSk7XHJcblx0XHRyZXR1cm4gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7Y29udGV4dCwgbmFtZSwgcGFyZW50fSk7XHJcblx0fVxyXG59OyIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5VdGlscy5nbG9iYWwuZGVmYXVsdGpzID0gVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcyB8fCB7fTtcclxuVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcy5leHRkb20gPSBVdGlscy5nbG9iYWwuZGVmYXVsdGpzLmV4dGRvbSB8fCB7XHJcblx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdHV0aWxzIDoge1xyXG5cdFx0VXRpbHM6IFV0aWxzXHJcblx0fVxyXG59O1xyXG5cclxuVXRpbHMuZ2xvYmFsLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZmluZC5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5yZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5yZWFkeS5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5jcmVhdGUgPSBmdW5jdGlvbihhQ29udGVudCwgYXNUZW1wbGF0ZSkge1xyXG5cdGlmICh0eXBlb2YgYXJndW1lbnRzWzBdICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmchXCIpO1xyXG5cdFxyXG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IGFDb250ZW50O1xyXG5cdGlmKGFzVGVtcGxhdGUpXHJcblx0XHRyZXR1cm4gdGVtcGxhdGU7XHJcblx0XHJcblx0cmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSkuY2hpbGROb2RlcztcclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5zY3JpcHQgPSBmdW5jdGlvbihhRmlsZSwgYVRhcmdldCkge1xyXG5cdGlmKGFGaWxlIGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoYUZpbGUubWFwKGZpbGUgPT4gVXRpbHMuZ2xvYmFsLnNjcmlwdChmaWxlLCBhVGFyZ2V0KSkpO1xyXG5cdFxyXG5cdGlmKHR5cGVvZiBhRmlsZSA9PT0gXCJzdHJpbmdcIilcdFxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyLGUpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHRcdFx0c2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7cigpfTtcclxuXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcImxvYWQgZXJyb3IhXCIpfTtcclxuXHRcdFx0IWFUYXJnZXQgPyBkb2N1bWVudC5ib2R5LmFwcGVuZChzY3JpcHQpIDogYVRhcmdldC5hcHBlbmQoc2NyaXB0KTtcclxuXHRcdFx0c2NyaXB0LnNyYyA9IGFGaWxlO1xyXG5cdFx0fSk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KFwiRmlyc3QgcGFyYW1ldGVyIG11c3QgYmUgYW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBhIHN0cmluZyFcIik7XHJcbn07IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IFJlYWR5RXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudCwgUXVlcnlTdXBwb3J0LCBSZWFkeUV2ZW50U3VwcG9ydCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiBkb2N1bWVudC50cmlnZ2VyKFwicmVhZHlcIikpO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudEZyYWdtZW50LCBRdWVyeVN1cHBvcnQsIE1hbmlwdWxhdGlvblN1cHBvcnQpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IEF0dHJpYnV0ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEVsZW1lbnQsUXVlcnlTdXBwb3J0LCBBdHRyaWJ1dGVTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcblxuZXh0ZW5kUHJvdG90eXBlKEV2ZW50VGFyZ2V0LCBFdmVudFN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgSHRtbENsYXNzU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnRcIjtcclxuaW1wb3J0IFNob3dIaWRlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MRWxlbWVudCwgSHRtbENsYXNzU3VwcG9ydCwgU2hvd0hpZGVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MSW5wdXRFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFNlbGVjdEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MVGV4dEFyZWFFbGVtZW50LEV4dGVuZGVyKFwiVmFsdWVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gYXJndW1lbnRzWzBdXHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KSk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEZWxlZ2F0ZXJCdWlsZGVyIGZyb20gXCIuLi91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTENvbGxlY3Rpb24sIExpc3RTdXBwb3J0KTtcclxuXHJcbkhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5hcHBseVRvID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGNhbGxpbmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0Y29uc3QgaXNGdW5jdGlvbiA9IHR5cGVvZiBjYWxsaW5nID09PSBcImZ1bmN0aW9uXCI7XHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKXtcclxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzW2ldO1xyXG5cdFx0bGV0XHRyZXN1bHQ7XHJcblx0XHRpZihpc0Z1bmN0aW9uKVxyXG5cdFx0XHRyZXN1bHQgPSBjYWxsaW5nLmFwcGx5KFtub2RlXS5jb25jYXQoYXJncykpO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2Ygbm9kZVtjYWxsaW5nXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXN1bHQgPSBub2RlW2NhbGxpbmddLmFwcGx5KG5vZGUsIGFyZ3MpO1xyXG5cdFx0XHJcblx0XHRpZihyZXN1bHQpXHJcblx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcmVzdWx0cztcclxufTtcclxuXHJcbkhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IE1hcCgpO1xyXG5cdFx0XHR0aGlzLmZvckVhY2gobm9kZSA9PiB7XHJcblx0XHRcdFx0aWYodHlwZW9mIG5vZGUudmFsID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLnZhbCgpO1xyXG5cdFx0XHRcdFx0aWYodmFsdWUpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5zZXQoKG5vZGUubmFtZSB8fCBub2RlLmlkIHx8IG5vZGUuc2VsZWN0b3IoKSksIG5vZGUudmFsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0SFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmFwcGx5VG8uYXBwbHkodGhpcywgW1widmFsXCJdLmNvbmNhdChBcnJheS5mcm9tKGFyZ3VtZW50cykpKTtcclxufTtcclxuXHJcbkhUTUxDb2xsZWN0aW9uLmZyb20gPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdGxldCBjb3VudGVyID0gMDtcclxuXHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0Y29uc3QgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0aWYodHlwZW9mIGFyZyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcmcgIT0gbnVsbCl7XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KVxyXG5cdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBhcmcgaW5zdGFuY2VvZiBBcnJheSl7XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZihhcmdbaV0gJiYgYXJnW2ldIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xyXG5cdFx0XHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZ1tpXSwgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGRhdGEubGVuZ3RoID0ge3ZhbHVlOiBjb3VudGVyfTtcclxuXHRyZXR1cm4gIE9iamVjdC5jcmVhdGUoSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLCBkYXRhKTtcclxufTtcclxuXHJcblxyXG5EZWxlZ2F0ZXJCdWlsZGVyKGZ1bmN0aW9uKGFGdW5jdGlvbk5hbWUsIHRoZUFyZ3VtZW50cykge1xyXG5cdGxldCByZXN1bHRzID0gW107XHRcclxuXHR0aGlzLmZvckVhY2gobm9kZSA9PiB7XHJcblx0XHRpZihub2RlICYmIHR5cGVvZiBub2RlW2FGdW5jdGlvbk5hbWVdID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gbm9kZVthRnVuY3Rpb25OYW1lXS5hcHBseShub2RlLCB0aGVBcmd1bWVudHMpO1xyXG5cdFx0XHRpZihyZXN1bHQpeyBcclxuXHRcdFx0XHRpZihyZXN1bHQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbilcclxuXHRcdFx0XHRcdHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChBcnJheS5mcm9tKHJlc3VsdCkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdFx0XHR9XHRcdFxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdGlmKHJlc3VsdHMubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRlbHNlIGlmKHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCByZXN1bHRzWzBdIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pXHJcblx0XHRyZXR1cm4gSFRNTENvbGxlY3Rpb24uZnJvbS5hcHBseShudWxsLCByZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcclxufSxIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUsIE5vZGUucHJvdG90eXBlLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSwgRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEYXRhU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0RhdGFTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGUsRGF0YVN1cHBvcnQsTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEZWxlZ2F0ZXJCdWlsZGVyIGZyb20gXCIuLi91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZUxpc3QsIExpc3RTdXBwb3J0KTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGNhbGxpbmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0Y29uc3QgaXNGdW5jdGlvbiA9IHR5cGVvZiBjYWxsaW5nID09PSBcImZ1bmN0aW9uXCI7XHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKXtcclxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzW2ldO1xyXG5cdFx0bGV0XHRyZXN1bHQ7XHJcblx0XHRpZihpc0Z1bmN0aW9uKVxyXG5cdFx0XHRyZXN1bHQgPSBjYWxsaW5nLmFwcGx5KFtub2RlXS5jb25jYXQoYXJncykpO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2Ygbm9kZVtjYWxsaW5nXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXN1bHQgPSBub2RlW2NhbGxpbmddLmFwcGx5KG5vZGUsIGFyZ3MpO1xyXG5cdFx0XHJcblx0XHRpZihyZXN1bHQpXHJcblx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcmVzdWx0cztcclxufTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IE1hcCgpO1xyXG5cdFx0XHR0aGlzLmZvckVhY2gobm9kZSA9PiB7XHJcblx0XHRcdFx0aWYodHlwZW9mIG5vZGUudmFsID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLnZhbCgpO1xyXG5cdFx0XHRcdFx0aWYodmFsdWUpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5zZXQoKG5vZGUubmFtZSB8fCBub2RlLmlkIHx8IG5vZGUuc2VsZWN0b3IoKSksIG5vZGUudmFsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0Tm9kZUxpc3QucHJvdG90eXBlLmFwcGx5VG8uYXBwbHkodGhpcywgW1widmFsXCJdLmNvbmNhdChBcnJheS5mcm9tKGFyZ3VtZW50cykpKTtcclxufTtcclxuXHJcbk5vZGVMaXN0LmZyb20gPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdGxldCBjb3VudGVyID0gMDtcclxuXHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0Y29uc3QgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0aWYodHlwZW9mIGFyZyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcmcgIT0gbnVsbCl7XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmcsIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRlbHNlIGlmKGFyZyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGFyZyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IGFyZyBpbnN0YW5jZW9mIEFycmF5KXtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJnLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdGlmKGFyZ1tpXSAmJiBhcmdbaV0gaW5zdGFuY2VvZiBOb2RlKXtcclxuXHRcdFx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmdbaV0sIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRkYXRhLmxlbmd0aCA9IHt2YWx1ZTogY291bnRlcn07XHJcblx0cmV0dXJuICBPYmplY3QuY3JlYXRlKE5vZGVMaXN0LnByb3RvdHlwZSwgZGF0YSk7XHJcbn07XHJcblxyXG5cclxuRGVsZWdhdGVyQnVpbGRlcihmdW5jdGlvbihhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpIHtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1x0XHJcblx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0aWYobm9kZSAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbm9kZVthRnVuY3Rpb25OYW1lXS5hcHBseShub2RlLCB0aGVBcmd1bWVudHMpO1xyXG5cdFx0XHRpZihyZXN1bHQpeyBcclxuXHRcdFx0XHRpZihyZXN1bHQgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdFx0XHRcdHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChBcnJheS5mcm9tKHJlc3VsdCkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdFx0XHR9XHRcdFxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdGlmKHJlc3VsdHMubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRlbHNlIGlmKHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBOb2RlIHx8IHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdHMpO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiByZXN1bHRzO1xyXG59LE5vZGVMaXN0LnByb3RvdHlwZSwgTm9kZS5wcm90b3R5cGUsIEhUTUxFbGVtZW50LnByb3RvdHlwZSwgSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsIEVsZW1lbnQucHJvdG90eXBlLCBFdmVudFRhcmdldC5wcm90b3R5cGUpO1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJBdHRyaWJ1dGVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0UHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZXMoKSA/ICgoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2gobmFtZSA9PiB7XHJcblx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KSgpIDogdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJEYXRhU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBkYXRhID0ge307XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0Zm9yIChuYW1lIGluIHRoaXMuZGF0YXNldClcclxuXHRcdFx0XHRkYXRhW25hbWVdID0gdGhpcy5kYXRhc2V0W25hbWVdO1xyXG5cclxuXHRcdHRoaXMuZGF0YSA9IChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRcdHJldHVybiBkYXRhW2FyZ3VtZW50c1swXV07XHJcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdFx0ZGVsZXRlIGRhdGFbYXJndW1lbnRzWzBdXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGRhdGFbYXJndW1lbnRzWzBdXSA9IGFyZ3VtZW50c1sxXTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSkuYmluZCh0aGlzKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgREVGQVVMVF9USU1FT1VUID0gMTAwO1xyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJFdmVudFN1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdGNvbnN0IEVWRU5UU1BMSVRFUiA9IC8oXFxzKyl8KFxccyosXFxzKikvO1xyXG5cdGNvbnN0IGdldFdyYXBwZXJIYW5kbGVNYXAgPSAoZWxlbWVudCkgPT4ge1xyXG5cdFx0aWYgKCFlbGVtZW50Ll9fd3JhcHBlcmhhbmRsZW1hcF9fKVxyXG5cdFx0XHRlbGVtZW50Ll9fd3JhcHBlcmhhbmRsZW1hcF9fID0gbmV3IE1hcCgpO1xyXG5cclxuXHRcdHJldHVybiBlbGVtZW50Ll9fd3JhcHBlcmhhbmRsZW1hcF9fO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2V0VHJpZ2dlclRpbWVvdXRzID0gKGVsZW1lbnQpID0+IHtcclxuXHRcdGlmICghZWxlbWVudC5fX19FVkVOVFRSSUdHRVJUSU1FT1VUU19fXykgZWxlbWVudC5fX19FVkVOVFRSSUdHRVJUSU1FT1VUU19fXyA9IHt9O1xyXG5cclxuXHRcdHJldHVybiBlbGVtZW50Ll9fX0VWRU5UVFJJR0dFUlRJTUVPVVRTX19fO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlbW92ZVdyYXBwZXIgPSAoZWxlbWVudCwgZGF0YSwgZXZlbnRUeXBlcykgPT4ge1xyXG5cdFx0Y29uc3QgeyB3cmFwcGVyLCBvcHRpb24sIGV2ZW50cywgaGFuZGxlIH0gPSBkYXRhO1xyXG5cdFx0Y29uc3QgY2FwdHVyZSA9IG9wdGlvbi5jYXB0dXJlO1xyXG5cdFx0aWYoZXZlbnRUeXBlcyl7XHJcblx0XHRcdGV2ZW50VHlwZXMgPSB0eXBlb2YgZXZlbnRUeXBlcyA9PT0gXCJzdHJpbmdcIiA/IGV2ZW50VHlwZXMuc3BsaXQoRVZFTlRTUExJVEVSKSA6IGV2ZW50VHlwZXM7XHJcblx0XHRcdGZvciAobGV0IGV2ZW50IG9mIGV2ZW50VHlwZXMpIHtcclxuXHRcdFx0XHRjb25zdCBpbmRleCA9IGV2ZW50cy5pbmRleE9mKGV2ZW50KTtcclxuXHRcdFx0XHRpZihpbmRleCA+PSAwKSB7XHJcblx0XHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHdyYXBwZXIsIGNhcHR1cmUpO1xyXG5cdFx0XHRcdFx0ZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGV2ZW50cy5sZW5ndGggPT0gMClcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Z2V0V3JhcHBlckhhbmRsZU1hcChlbGVtZW50KS5kZWxldGUoaGFuZGxlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcclxuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHdyYXBwZXIsIGNhcHR1cmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdldFdyYXBwZXJIYW5kbGVNYXAoZWxlbWVudCkuZGVsZXRlKGhhbmRsZSk7XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHJcblx0UHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcihcIlRvbyBsZXNzIGFyZ3VtZW50cyFcIik7XHJcblxyXG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBldmVudHMgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKS5zcGxpdChFVkVOVFNQTElURVIpIDogYXJncy5zaGlmdCgpO1xyXG5cdFx0Y29uc3QgZmlsdGVyID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzLnNoaWZ0KCkgOiBudWxsO1xyXG5cdFx0Y29uc3QgaGFuZGxlID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0Y29uc3Qgb3B0aW9uID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwidW5kZWZpbmVkXCIgPyB7IGNhcHR1cmU6IGZhbHNlLCBvbmNlOiBmYWxzZSwgcGFzc2l2ZTogZmFsc2UgfSA6ICh0eXBlb2YgYXJnc1swXSA9PT0gXCJib29sZWFuXCIgPyB7IGNhcHR1cmU6IGFyZ3Muc2hpZnQoKSwgb25jZTogZmFsc2UsIHBhc3NpdmU6IGZhbHNlIH0gOiBhcmdzLnNoaWZ0KCkpO1xyXG5cdFx0Y29uc3Qgd3JhcHBlciA9IGZ1bmN0aW9uKGFFdmVudCkge1xyXG5cdFx0XHRpZiAoZmlsdGVyKSB7XHJcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgdGFyZ2V0LmlzID09PSBcImZ1bmN0aW9uXCIgJiYgIWFFdmVudC50YXJnZXQuaXMoZmlsdGVyKSkgcmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gaGFuZGxlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdGlmIChvcHRpb24ub25jZSkgcmVtb3ZlV3JhcHBlcih0aGlzLCB3cmFwcGVyKTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH07XHJcblxyXG5cdFx0Z2V0V3JhcHBlckhhbmRsZU1hcCh0aGlzKS5zZXQoaGFuZGxlLCB7IGhhbmRsZSwgd3JhcHBlcjogd3JhcHBlciwgZXZlbnRzLCBvcHRpb24gfSk7XHJcblxyXG5cdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgd3JhcHBlciwgb3B0aW9uKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHJcblx0UHJvdG90eXBlLnJlbW92ZU9uID0gZnVuY3Rpb24oaGFuZGxlLCBldmVudCwgY2FwdHVyZSkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IGdldFdyYXBwZXJIYW5kbGVNYXAodGhpcykuZ2V0KGhhbmRsZSk7XHJcblx0XHRpZiAoZGF0YSkgXHJcblx0XHRcdHJlbW92ZVdyYXBwZXIodGhpcywgZGF0YSwgZXZlbnQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlLCBldmVudCwgY2FwdHVyZSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRjb25zdCB0aW1lb3V0ID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwibnVtYmVyXCIgPyBhcmdzLnNoaWZ0KCkgOiAtMTtcclxuXHRcdGlmICh0aW1lb3V0ID49IDApIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3NbMF07XHJcblx0XHRcdGNvbnN0IHRpbWVvdXRzID0gZ2V0VHJpZ2dlclRpbWVvdXRzKHRoaXMpO1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0aWQgPSB0aW1lb3V0c1t0eXBlXTtcclxuXHRcdFx0aWYgKHRpbWVvdXRpZCkgY2xlYXJUaW1lb3V0KHRpbWVvdXRpZCk7XHJcblxyXG5cdFx0XHR0aW1lb3V0c1t0eXBlXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGRlbGV0ZSB0aW1lb3V0c1t0eXBlXTtcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHRcdH0sIHRpbWVvdXQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0Y29uc3QgZGVsZWdhdGUgPSBhcmdzWzBdIGluc3RhbmNlb2YgRXZlbnQgPyBhcmdzLnNoaWZ0KCkgOiBudWxsO1xyXG5cdFx0XHRjb25zdCBkYXRhID0gYXJncy5sZW5ndGggPj0gMSA/IChhcmdzLmxlbmd0aCA9PSAwID8gYXJncy5zaGlmdCgpIDogYXJncykgOiBkZWxlZ2F0ZTtcclxuXHRcdFx0Y29uc3QgZXZlbnQgPSBkYXRhID8gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgZGV0YWlsOiBkYXRhIH0pIDogbmV3IEV2ZW50KHR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcclxuXHJcblx0XHRcdGlmIChkZWxlZ2F0ZSkgZXZlbnQuZGVsZWdhdGVkRXZlbnQgPSBkZWxlZ2F0ZTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJIdG1sQ2xhc3NTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaChjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhenopKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LmFkZChjbGF6eikpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGF6eikpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGF6eikpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaChjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhenopKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhenopKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTGlzdFN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFx0XHJcblx0UHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZih0aGlzW2ldID09IGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiB0aGlzWzBdO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJNYW5pcHVsYXRpb25TdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzXHJcblx0XHR3aGlsZShub2Rlcy5sZW5ndGggIT0gMClcdFx0XHRcclxuXHRcdFx0bm9kZXNbMF0ucmVtb3ZlKHRydWUpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdGlmKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIFxyXG5cdFx0XHRBcnJheS5mcm9tKGFyZ3VtZW50cykuZm9yRWFjaChjb250ZW50ID0+IHtcclxuXHRcdFx0XHR0aGlzLmVtcHR5KCk7XHJcblx0XHRcdFx0aWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHRlbHNlIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBjb250ZW50IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pe1xyXG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoY29udGVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcdFx0XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBhcHBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0Y29uc3QgYXBwZW5kID0gUHJvdG90eXBlLmFwcGVuZENoaWxkLmJpbmQodGhpcyk7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0aWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHR0aGlzLmFwcGVuZENoaWxkKGFyZyk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRjcmVhdGUoYXJnKS5mb3JFYWNoKGFwcGVuZCk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdH1cclxuXHR9O1x0XHJcblx0UHJvdG90eXBlLmFwcGVuZCA9IGFwcGVuZDtcclxuXHRcclxuXHRjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24oYUZpcnN0RWxlbWVudCwgYUVsZW1lbnQpe1xyXG5cdFx0dGhpcy5pbnNlcnRCZWZvcmUoYUVsZW1lbnQsIGFGaXJzdEVsZW1lbnQpO1xyXG5cdH07XHJcblx0UHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRhcHBlbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjb25zdCBmaXJzdCA9IHRoaXMuY2hpbGROb2Rlcy5maXJzdCgpO1xyXG5cdFx0XHRjb25zdCBpbnNlcnQgPSBwcmVwZW5kLmJpbmQodGhpcywgZmlyc3QpO1xyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRjb25zdCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdFx0aWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHRcdGluc2VydChhcmcpO1xyXG5cdFx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydCk7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPCAxKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnN1ZmZpY2llbnQgYXJndW1lbnRzISBPbmUgb3IgdHdvIG5vZGVzIHJlcXVpcmVkIVwiKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgcGFyZW50ID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gdGhpcy5wYXJlbnROb2RlIDogdGhpcztcclxuXHRcdGNvbnN0IG9sZE5vZGUgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyB0aGlzIDogYXJndW1lbnRzWzBdO1xyXG5cdFx0Y29uc3QgbmV3Tm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50c1sxXTtcclxuXHRcdFxyXG5cdFx0aWYobmV3Tm9kZSBpbnN0YW5jZW9mIEFycmF5IHx8IG5ld05vZGUgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBuZXdOb2RlIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pe1xyXG5cdFx0XHRuZXdOb2RlLmZvckVhY2goYUl0ZW0gPT4gcGFyZW50Lmluc2VydEJlZm9yZShhSXRlbSwgb2xkTm9kZSkpO1xyXG5cdFx0XHRvbGROb2RlLnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld05vZGUsb2xkTm9kZSk7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5wYXJlbnROb2RlID09IG51bGwpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IGluc2VydCBub2RlcyBhZnRlciB0aGlzIG5vZGUhIFBhcmVudCBub2RlIG5vdCBhdmFpbGFibGUhXCIpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRjb25zdCBuZXh0ID0gdGhpcy5uZXh0U2libGluZztcclxuXHRcdGlmKG5leHQpXHJcblx0XHRcdFByb3RvdHlwZS5iZWZvcmUuYXBwbHkobmV4dCwgYXJndW1lbnRzKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0UHJvdG90eXBlLmFwcGVuZC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5wYXJlbnROb2RlID09IG51bGwpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IGluc2VydCBub2RlcyBhZnRlciB0aGlzIG5vZGUhIFBhcmVudCBub2RlIG5vdCBhdmFpbGFibGUhXCIpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRjb25zdCBpbnNlcnRlciA9IChub2RlKSA9PiB7cGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0aGlzKTt9XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0Y29uc3QgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdGluc2VydGVyKGFyZyk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnRlcik7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0ZXIpO1xyXG5cdFx0fVxyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgcGFyZW50U2VsZWN0b3IgPSAvOnBhcmVudChcXChcXFwiKFteXFwpXSopXFxcIlxcKSk/L2k7XHJcbmNvbnN0IHF1ZXJ5RXhlY3V0ZXIgPSBmdW5jdGlvbihhRWxlbWVudCwgYVNlbGVjdG9yKXtcclxuXHRsZXQgbWF0Y2ggPSBwYXJlbnRTZWxlY3Rvci5leGVjKGFTZWxlY3Rvcik7XHJcblx0aWYobWF0Y2gpe1xyXG5cdFx0bGV0IHJlc3VsdCA9IGFFbGVtZW50O1xyXG5cdFx0aWYobWF0Y2guaW5kZXggPiAwKXtcclxuXHRcdFx0cmVzdWx0ID0gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3Iuc3Vic3RyKDAsIG1hdGNoLmluZGV4KSk7XHJcblx0XHRcdGlmKHJlc3VsdC5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHRcclxuXHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQobWF0Y2hbMl0pO1x0XHRcdFxyXG5cdFx0aWYocmVzdWx0KXtcclxuXHRcdFx0bGV0IG5leHRTZWxlY3RvciA9IGFTZWxlY3Rvci5zdWJzdHIobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcclxuXHRcdFx0aWYobmV4dFNlbGVjdG9yLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmZpbmQobmV4dFNlbGVjdG9yKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3IpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlF1ZXJ5U3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBub2RlcyA9IFtdO1xyXG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0d2hpbGUoYXJnKXtcclxuXHRcdFx0aWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHF1ZXJ5RXhlY3V0ZXIodGhpcywgYXJnKTtcclxuXHRcdFx0XHRpZihyZXN1bHQpXHJcblx0XHRcdFx0XHRub2Rlcy5wdXNoKHJlc3VsdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IE5vZGVMaXN0LmZyb20uYXBwbHkobnVsbCwgbm9kZXMpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHRcdFxyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEpe1xyXG5cdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm1hdGNoZXMoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIil7XHJcblx0XHRcdFx0bGV0IGZpbHRlciA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0aWYodGhpcy5tYXRjaGVzKGZpbHRlcltpXSkpXHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHRcdFx0XHRcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLmlzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLnBhcmVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoIXRoaXMucGFyZW50Tm9kZSlcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcdFx0XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpe1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0XHR0cnl7XHJcblx0XHRcdFx0d2hpbGUocGFyZW50ICYmICFwYXJlbnQuaXMoYXJndW1lbnRzWzBdKSlcclxuXHRcdFx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnQoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0fWNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcInRoaXM6XCIsIHRoaXMsIFwicGFyZW50OlwiLCBwYXJlbnQsIFwiZXJyb3I6XCIsIGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnBhcmVudHMgPSBmdW5jdGlvbigpIHtcdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gbmV3IEFycmF5KCk7XHJcblx0XHRsZXQgcGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0d2hpbGUocGFyZW50KXtcclxuXHRcdFx0cmVzdWx0LnB1c2gocGFyZW50KTtcclxuXHRcdFx0cGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdCk7XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuc2VsZWN0b3IgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZih0aGlzLmlkKVxyXG5cdFx0XHRyZXR1cm4gXCIjXCIgKyB0aGlzLmlkO1xyXG5cdFx0ZWxzZXtcdFx0XHRcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xyXG5cdFx0XHRpZihwYXJlbnQpe1xyXG5cdFx0XHRcdGxldCBzYW1lVGFnU2libGluZ3MgPSBwYXJlbnQuZmluZChcIjpzY29wZT5cIiArIHNlbGVjdG9yKTtcdFx0XHRcclxuXHRcdFx0XHRpZiAoc2FtZVRhZ1NpYmxpbmdzIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IHNhbWVUYWdTaWJsaW5ncy5pbmRleE9mKHRoaXMpO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID4gMClcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3IgKz0gJzpudGgtY2hpbGQoJyArIChpbmRleCArIDEpICsgJyknO1xyXG5cdFx0XHRcdH1cdFx0XHJcblx0XHRcdFx0bGV0IHBhcmVudFNlbGVjdG9yID0gcGFyZW50LnNlbGVjdG9yKCk7XHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudFNlbGVjdG9yID8gcGFyZW50U2VsZWN0b3IgKyBcIj5cIiArIHNlbGVjdG9yIDogc2VsZWN0b3I7XHJcblx0XHRcdH0gXHJcblx0XHRcdHJldHVybiBzZWxlY3RvcjtcclxuXHRcdH1cclxuXHR9O1x0XHJcblxyXG5cdFByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24oYVF1ZXJ5KSB7XHRcdFx0XHJcblx0XHRsZXQgbm9kZSA9IHRoaXM7XHJcblx0XHR3aGlsZShub2RlKXtcclxuXHRcdFx0bGV0IGNsb3Nlc3RzID0gbm9kZS5maW5kKGFRdWVyeSk7XHJcblx0XHRcdGlmKGNsb3Nlc3RzICYmIGNsb3Nlc3RzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIGNsb3Nlc3RzO1xyXG5cdFx0XHRlbHNlIGlmKG5vZGUuaXMoYVF1ZXJ5KSlcclxuXHRcdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShub2RlKTtcclxuXHRcdFx0XHJcblx0XHRcdG5vZGUgPSBub2RlLnBhcmVudCgpO1x0XHRcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5uZXN0ZWQgPSBmdW5jdGlvbihhUXVlcnkpe1xyXG5cdFx0aWYodGhpcy5pcyhhUXVlcnkpKVxyXG5cdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzKTtcdFxyXG5cdFx0XHJcblx0XHRsZXQgbmVzdGVkID0gdGhpcy5maW5kKGFRdWVyeSk7XHJcblx0XHRpZihuZXN0ZWQgJiYgbmVzdGVkLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiBuZXN0ZWQ7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMucGFyZW50KGFRdWVyeSkpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG5cclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUmVhZHlFdmVudFN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbihhRnVuY3Rpb24sIG9uY2Upe1x0XHJcblx0XHR0aGlzLm9uKFwicmVhZHlcIiwgYUZ1bmN0aW9uLCBvbmNlKTtcclxuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKVx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJyZWFkeVwiKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgSElERVZBTFVFID0gXCJub25lXCI7XHJcblxyXG5jb25zdCBpc0hpZGRlbiA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gSElERVZBTFVFXHJcbn07XHJcblxyXG5jb25zdCBpbml0ID0gKGVsZW1lbnQpID0+IHtcdFxyXG5cdGxldCBkaXNwbGF5ID0gIWlzSGlkZGVuKGVsZW1lbnQpID8gZWxlbWVudC5zdHlsZS5kaXNwbGF5IDogXCJcIjtcclxuXHRcclxuXHRlbGVtZW50LnNob3cgPSAoZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fSkuYmluZChlbGVtZW50KTtcclxuXHRcclxuXHRlbGVtZW50LmhpZGUgPSAoZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IEhJREVWQUxVRTtcclxuXHRcdHJldHVybiB0aGlzO1x0XHRcclxuXHR9KS5iaW5kKGVsZW1lbnQpO1xyXG5cdFxyXG5cdHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlNob3dIaWRlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaW5pdCh0aGlzKS5zaG93LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGluaXQodGhpcykuaGlkZS5hcHBseShudWxsLCBhcmd1bWVudHMpXHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLnRvZ2dsZVNob3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpc0hpZGRlbih0aGlzKSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcblx0fTtcclxuXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IElucHV0VHlwZXMgPSBbXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcInNlbGVjdFwiLFxyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcblx0XHRcdFx0aWYob3B0aW9uLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gob3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oKXtcdFx0XHRcdFxyXG5cdFx0XHRsZXQgdmFsdWVzID0gW107XHJcblx0XHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcmcpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKGFyZyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZXM7XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5kZXhPZihvcHRpb24udmFsdWUpID49IDApO1x0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVx0XHRcdFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcImlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl1cIixcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKHRoaXMudmFsdWUgPT0gXCJvblwiIHx8IHRoaXMudmFsdWUgPT0gXCJvZmZcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2VkO1xyXG5cdFx0XHRlbHNlIGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcdFx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdGlmKHR5cGVvZiBhVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMudmFsdWUgPT0gYVZhbHVlO1xyXG5cdFx0XHRlbHNlIGlmKEFycmF5LmlzQXJyYXkoYVZhbHVlKSlcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWUuaW5kZXhPZih0aGlzLnZhbHVlKSA+PSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cclxuXHR9XHJcbl07XHJcblxyXG5jb25zdCBEZWZhdWx0SW5wdXRUeXBlID0ge1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiaW5wdXRcIik7XHJcblx0XHR9XHRcclxufTtcclxuXHJcbmNvbnN0IGdldElucHV0VHlwZSA9IGZ1bmN0aW9uKGFFbGVtZW50KXtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgSW5wdXRUeXBlcy5sZW5ndGg7IGkrKylcclxuXHRcdGlmKGFFbGVtZW50LmlzKElucHV0VHlwZXNbaV0uc2VsZWN0b3IpKVxyXG5cdFx0XHRyZXR1cm4gSW5wdXRUeXBlc1tpXTtcdFx0XHJcblx0cmV0dXJuIERlZmF1bHRJbnB1dFR5cGU7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiVmFsdWVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdHlwZSA9IGdldElucHV0VHlwZSh0aGlzKTtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHR5cGUuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHR5cGUuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuL2RvbS9FdmVudFRhcmdldFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlXCI7XHJcbmltcG9ydCBcIi4vZG9tL0VsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRGcmFnbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MSW5wdXRFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFNlbGVjdEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZUxpc3RcIjtcclxuaW1wb3J0IFwiLi9kb20vSHRtbENvbGxlY3Rpb25cIjtcclxuaW1wb3J0IFwiLi9HbG9iYWxcIjtcclxuIiwiY29uc3QgRGVsZWdhdGVyQnVpbGRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0Y29uc3Qgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdGFyZ3MuZm9yRWFjaCggdGFyZ2V0ID0+e1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxyXG5cdFx0LmZvckVhY2gobmFtZSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XHJcblx0XHRcdGlmICh0eXBlb2Ygc291cmNlW25hbWVdID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwcm9wLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0c291cmNlW25hbWVdID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXMsIG5hbWUsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0fTtcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGVnYXRlckJ1aWxkZXI7IiwiY29uc3QgZXh0ZW5kUHJvdG90eXBlID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0Y29uc3QgZXh0ZW5kZXIgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRleHRlbmRlcih0eXBlKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHRlbmRQcm90b3R5cGU7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG5jb25zdCBFWFRFTlNJT05TX01BUCA9IFV0aWxzLmdsb2JhbFZhcihcIl9fX0RPTV9BUElfRVhURU5TSU9OX01BUF9fX1wiLCB7fSk7XHJcbmNvbnN0IEV4dGVuZGVyID0gZnVuY3Rpb24oYU5hbWUsIGFFeHRlbnRpb24pe1xyXG5cdHJldHVybiBmdW5jdGlvbihhVHlwZSl7XHRcclxuXHRcdGxldCBleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbYVR5cGUubmFtZV07XHJcblx0XHRpZighZXh0ZW5zaW9ucylcclxuXHRcdFx0ZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW2FUeXBlLm5hbWVdID0ge307XHRcdFxyXG5cdFx0XHJcblx0XHRpZighZXh0ZW5zaW9uc1thTmFtZV0pe1xyXG5cdFx0XHRleHRlbnNpb25zW2FOYW1lXSA9IHRydWU7XHJcblx0XHRcdGFFeHRlbnRpb24oYVR5cGUucHJvdG90eXBlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS53YXJuKFwiZHVwbGljYXRlZCBsb2FkIG9mIGV4dGVuc2lvbiBcXFwiXCIgKyBhTmFtZSArIFwiXFxcIiFcIik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kZXI7IiwiY29uc3QgVXRpbHMgPSB7XHJcblx0Z2xvYmFsIDogKCgpID0+IHtcclxuXHRcdGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB3aW5kb3c7XHJcblx0XHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xyXG5cdFx0aWYodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBzZWxmO1xyXG5cdFx0cmV0dXJuIHt9O1x0XHRcclxuXHR9KSgpLFxyXG5cdGdsb2JhbFZhciA6IGZ1bmN0aW9uKGFOYW1lLCBhSW5pdFZhbHVlKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIFV0aWxzLmdsb2JhbFthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFV0aWxzLmdsb2JhbFthTmFtZV0gPSBhSW5pdFZhbHVlO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVXRpbHMuZ2xvYmFsW2FOYW1lXTtcdFx0XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7IiwiaW1wb3J0IHsgaW5pdFRpbWVvdXQsIHRyaWdnZXJUaW1lb3V0IH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tXCI7XG5pbXBvcnQgeyBhdHRyaWJ1dGVDaGFuZ2VFdmVudG5hbWUsIGNvbXBvbmVudEV2ZW50bmFtZSB9IGZyb20gXCIuL3V0aWxzL0V2ZW50SGVscGVyXCI7XG5pbXBvcnQgV2Vha0RhdGEgZnJvbSBcIi4vdXRpbHMvV2Vha0RhdGFcIjtcbmltcG9ydCBSZWFkeSBmcm9tIFwiLi9SZWFkeVwiO1xuXG5jb25zdCBUSU1FT1VUUyA9IG5ldyBXZWFrRGF0YSgpO1xuY29uc3QgaW5pdCA9IChjb21wb25lbnQpID0+IHtcblx0Y29uc3QgZGF0YSA9IFRJTUVPVVRTLmRhdGEoY29tcG9uZW50KTtcblx0aWYgKGRhdGEuaW5pdGlhbGl6ZSkgY2xlYXJUaW1lb3V0KGRhdGEuaW5pdGlhbGl6ZSk7XG5cblx0ZGF0YS5pbml0aWFsaXplID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cdFx0ZGVsZXRlIGRhdGEuaW5pdGlhbGl6ZTtcblxuXHRcdFByb21pc2UucmVzb2x2ZShjb21wb25lbnQuaW5pdCgpKS50aGVuKCgpID0+IHtcblx0XHRcdGNvbXBvbmVudC5yZWFkeS5yZXNvbHZlKCk7XG5cdFx0XHRjb21wb25lbnQudHJpZ2dlcihjb21wb25lbnRFdmVudG5hbWUoXCJpbml0aWFsemVkXCIsIGNvbXBvbmVudCkpO1xuXHRcdH0pO1xuXHR9LCBpbml0VGltZW91dCk7XG59O1xuXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5yZWFkeSA9IFJlYWR5KCk7XG5cdH1cblxuXHRhc3luYyBpbml0KCkge31cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRpZih0aGlzLm93bmVyRG9jdW1lbnQgPT0gZG9jdW1lbnQpXG5cdFx0XHRpbml0KHRoaXMpO1xuXHR9XG5cblx0YWRvcHRlZENhbGxiYWNrKCkge1xuXHRcdHRoaXMuY29ubmVjdGVkQ2FsbGJhY2soKTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAob2xkVmFsdWUgIT0gbmV3VmFsdWUgJiYgdGhpcy5pc0Nvbm5lY3RlZCkge1xuXHRcdFx0dGhpcy50cmlnZ2VyKHRyaWdnZXJUaW1lb3V0LCBhdHRyaWJ1dGVDaGFuZ2VFdmVudG5hbWUobmFtZSwgdGhpcykpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKHRyaWdnZXJUaW1lb3V0LCBjb21wb25lbnRFdmVudG5hbWUoXCJjaGFuZ2VcIiwgdGhpcykpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCJleHBvcnQgY29uc3QgY29tcG9uZW50UHJlZml4ID0gXCJkLVwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZUNoYW5nZUV2ZW50UHJlZml4ID0gXCJhdHRyaWJ1dGUtXCI7XG5leHBvcnQgY29uc3QgaW5pdFRpbWVvdXQgPSAxMDA7XG5leHBvcnQgY29uc3QgdHJpZ2dlclRpbWVvdXQgPSAxMDA7XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGxldCByZXNvbHZlICwgcmVqZWN0ID0gbnVsbDtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IFByb21pc2UoKHIsIGUpID0+IHtcblx0XHRyZXNvbHZlID0gcjtcblx0XHRyZWplY3QgPSBlO1xuXHR9KTtcblxuXHRyZXN1bHQucmVzb2x2ZSA9IHJlc29sdmU7XG5cdHJlc3VsdC5yZWplY3QgPSByZWplY3Q7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBjb21wb25lbnRQcmVmaXggfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB0b05vZGVOYW1lID0gKG5hbWUsIHByZWZpeCkgPT4ge1xuXHRpZih0eXBlb2YgcHJlZml4ID09PSBcInN0cmluZ1wiKVxuXHRcdHJldHVybiBwcmVmaXggKyBuYW1lO1xuXHRcdFxuXHRyZXR1cm4gY29tcG9uZW50UHJlZml4ICsgbmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZpbmUgPSBmdW5jdGlvbihjbGF6eiwgb3B0aW9ucykge1xuXHRjb25zdCBub2RlbmFtZSA9IGNsYXp6Lk5PREVOQU1FO1xuXHRpZiAoIWN1c3RvbUVsZW1lbnRzLmdldChub2RlbmFtZSkpIHtcblx0XHRjdXN0b21FbGVtZW50cy5kZWZpbmUobm9kZW5hbWUsIGNsYXp6LCBvcHRpb25zKTtcblx0fVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmU7IFxuIiwiaW1wb3J0IHthdHRyaWJ1dGVDaGFuZ2VFdmVudFByZWZpeH0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50RXZlbnRuYW1lID0gKGV2ZW50VHlwZSwgbm9kZSApID0+IHtcdFxuXHRsZXQgbm9kZW5hbWUgPSBcInVuc3VwcG9ydGVkXCI7XG5cdGlmKHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiKVxuXHRcdG5vZGVuYW1lID0gbm9kZTtcblx0ZWxzZSBpZihub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXG5cdFx0bm9kZW5hbWUgPSBub2RlLm5vZGVOYW1lO1xuXHRlbHNlIGlmKHR5cGVvZiBub2RlLk5PREVOQU1FID09PSBcInN0cmluZ1wiKVxuXHRcdG5vZGVuYW1lID0gbm9kZS5OT0RFTkFNRTtcblx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IodHlwZW9mIG5vZGUgKyBcIiBpcyBub3Qgc3VwcG9ydGVkIGFzIHByYW0gbm9kZSFcIik7XG5cdFxuICAgcmV0dXJuIG5vZGVuYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIGV2ZW50VHlwZTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZUNoYW5nZUV2ZW50bmFtZSA9IChhdHRyaWJ1dGUsIG5vZGUgKSA9PiB7XG4gICAgcmV0dXJuIGNvbXBvbmVudEV2ZW50bmFtZShhdHRyaWJ1dGVDaGFuZ2VFdmVudFByZWZpeCArIFwiLVwiICsgYXR0cmlidXRlLCBub2RlKTtcbn07IiwiZXhwb3J0IGNvbnN0IGZpbmRQYXJlbnQgPSAobm9kZSwgY2hlY2spID0+IHtcblx0d2hpbGUobm9kZSAhPSBudWxsKSB7XHRcdFxuICAgICAgICBpZihjaGVjayhub2RlKSlcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudCgpO1x0XHRcdFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGZpbmRDbG9zZXN0ID0gKG5vZGUsIGRlcHRoLCBjaGVjaykgPT4ge1xuICAgIGlmKGNoZWNrKG5vZGUpKVxuICAgICAgICByZXR1cm4ge25vZGUsIGRlcHRofVxuXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgZm9yKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkTm9kZXMpe1xuICAgICAgICBjb25zdCBpdGVtID0gZmluZENsb3Nlc3QoY2hpbGQsIGRlcHRoICsgMSwgY2hlY2spO1xuXG4gICAgICAgIGlmKGl0ZW0gIT0gbnVsbCAmJiAocmVzdWx0ID09IG51bGwgfHwgcmVzdWx0LmRlcHRoID4gaXRlbS5kZXB0aCkpICAgICAgICAgICAgXG4gICAgICAgICAgICByZXN1bHQgPSBpdGVtO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBmaW5kQ2xvc2VzdEluRGVwdGggPSAobm9kZSwgY2hlY2spID0+IHtcbiAgICBjb25zdCBjbG9zZXN0ID0gZmluZENsb3Nlc3Qobm9kZSwgMCwgY2hlY2spO1xuICAgIHJldHVybiBjbG9zZXN0ICE9IG51bGwgPyBjbG9zZXN0Lm5vZGUgOiBudWxsO1xufSIsImltcG9ydCB7VGVtcGxhdGV9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2VcIjtcbmV4cG9ydCBjb25zdCBBVFRSX1RFTVBMQVRFID0gXCJ0ZW1wbGF0ZVwiO1xuXG5jb25zdCBnZXRUZW1wbGF0ZSA9IChub2RlKSA9PiB7XG5cdGxldCB0ZW1wbGF0ZSA9IG5vZGUuZmluZChcIjpzY29wZSA+IHRlbXBsYXRlXCIpLmZpcnN0KCk7XG5cdGlmICghIXRlbXBsYXRlKSByZXR1cm4gdGVtcGxhdGU7XG5cdGNvbnN0IHZhbHVlID0gbm9kZS5hdHRyKEFUVFJfVEVNUExBVEUpO1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcblx0dHJ5IHtcblx0XHR0ZW1wbGF0ZSA9IGZpbmQodmFsdWUpLmZpcnN0KCk7XG5cdFx0aWYgKCEhdGVtcGxhdGUpIHJldHVybiB0ZW1wbGF0ZTtcblx0fSBjYXRjaCAoZSkge31cblx0cmV0dXJuIG5ldyBVUkwodmFsdWUsIGxvY2F0aW9uLmhyZWYpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRUZW1wbGF0ZSA9IGFzeW5jIChub2RlLCBkZWZhdWx0VGVtcGxhdGUsIGNhY2hlLCBhbGlhcykgPT4ge1xuXHRjb25zdCB0ZW1wbGF0ZSA9IGdldFRlbXBsYXRlKG5vZGUpO1xuXHRpZih0ZW1wbGF0ZSlcblx0XHRyZXR1cm4gVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKTtcblxuXHRyZXR1cm4gZGVmYXVsdFRlbXBsYXRlO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFrRGF0YSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMud2Vha21hcCA9IG5ldyBXZWFrTWFwKCk7XG5cdH1cblxuXHRkYXRhKHJlZmVyZW5jZSkge1xuXHRcdGxldCBkYXRhID0gdGhpcy53ZWFrbWFwLmdldChyZWZlcmVuY2UpO1xuXHRcdGlmICghZGF0YSkge1xuXHRcdFx0ZGF0YSA9IHt9O1xuXHRcdFx0dGhpcy53ZWFrbWFwLnNldChyZWZlcmVuY2UsIGRhdGEpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXG5cdHZhbHVlKHJlZmVyZW5jZSwga2V5LCB2YWx1ZSkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDIpIHJldHVybiB0aGlzLmRhdGEocmVmZXJlbmNlKVtrZXldO1xuXHRcdGVsc2UgdGhpcy5kYXRhKHJlZmVyZW5jZSlba2V5XSA9IHZhbHVlO1xuXHR9XG59O1xuXG4iLCJpbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vc3JjL1RlbXBsYXRlLmpzXCI7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vc3JjL1JlbmRlcmVyLmpzXCI7XG5cbmV4cG9ydCB7VGVtcGxhdGUsIFJlbmRlcmVyfTsiLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuaGFzaGNvZGUpXHJcblx0U3RyaW5nLnByb3RvdHlwZS5oYXNoY29kZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdFxyXG5cdFx0bGV0IGhhc2ggPSAwO1xyXG5cdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLmNoYXJDb2RlQXQoaSk7XHJcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGM7XHJcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaGFzaDtcclxuXHR9OyIsImltcG9ydCBXYWl0IGZyb20gXCIuL1dhaXQuanNcIjtcblxuY29uc3QgQ0xPU0VfVElNRU9VVCA9IDIwMDA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcblx0Y29uc3RydWN0b3IoeyByZXNvbHZlciwgcmVuZGVyZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIHJvb3QsIG1vZGUgPSBcInJlcGxhY2VcIiwgdGFyZ2V0ID0gbnVsbCwgcGFyZW50ID0gbnVsbCB9KSB7XG5cdFx0aWYgKCFyZXNvbHZlcikgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVyIFxcXCJyZXNvbHZlclxcXCIgaXMgcmVxdWlyZWQhXCIpO1xuXHRcdGlmICghcmVuZGVyZXIpIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwicmVuZGVyZXJcXFwiIGlzIHJlcXVpcmVkIVwiKTtcblx0XHRpZiAoIXRlbXBsYXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcInRlbXBsYXRlXFxcIiBpcyByZXF1aXJlZCFcIik7XG5cdFx0aWYgKCFjb250YWluZXIpIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwiY29udGFpbmVyXFxcIiBpcyByZXF1aXJlZCFcIik7XG5cdFx0aWYgKCFyb290KSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcInJvb3RcXFwiIGlzIHJlcXVpcmVkIVwiKTtcblxuXHRcdHRoaXMucmVhZHlIYW5kbGVzID0gW107XG5cdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cdFx0dGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuXHRcdHRoaXMubW9kZSA9IG1vZGU7XG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXHRcdHRoaXMucm9vdCA9IHJvb3Q7XG5cdFx0dGhpcy50YXJnZXQgPSB0YXJnZXQ7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jbG9zZWQgPSBmYWxzZTtcblx0XHR0aGlzLndhaXQgPSBXYWl0KHRoaXMpO1xuXG5cblx0XHQvKiBleGVjdXRpb24gZmxhZ3MgKi9cblx0XHR0aGlzLnN0b3AgPSBmYWxzZTtcblx0XHR0aGlzLmlnbm9yZSA9IGZhbHNlO1xuXHR9XG5cblx0YXN5bmMgZmluaXNoKGNhbGxiYWNrKSB7XG5cdFx0aWYgKHRoaXMuY2xvc2VkKVxuXHRcdFx0cmV0dXJuOyAvL2NvbnRleHQgaXMgcmVhZHkgYW5kIGNsb3NlZFxuXG5cdFx0aWYgKHRoaXMucGFyZW50KVxuXHRcdFx0dGhpcy5wYXJlbnQuZmluaXNoKGNhbGxiYWNrKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLnJlYWR5KGNhbGxiYWNrKTtcblx0fTtcblxuXHRhc3luYyByZWFkeShjYWxsYmFjaykge1xuXHRcdGlmICh0aGlzLmNsb3NlZClcblx0XHRcdHJldHVybjsgLy9jb250ZXh0IGlzIHJlYWR5IGFuZCBjbG9zZWRcblxuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0aWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHRcdGNhbGxiYWNrLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7IHRoaXMucmVhZHkgPSBjYWxsYmFjazsgfSk7XG5cdFx0XHRlbHNlIGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIFByb21pc2UgfHwgdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpXG5cdFx0XHRcdHRoaXMucmVhZHlIYW5kbGVzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlZCA9IHRydWU7XG5cdFx0XHQvL3dhaXQgb2YgYWxsIHN1YiBjb250ZXh0IHRvIGJlIGNsb3NlZCB3aXRoIGFuIG1heGltdW0gYW1vdW50IG9mIHRpbWVcblxuXHRcdFx0aWYgKHRoaXMucmVhZHlIYW5kbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRhd2FpdCBQcm9taXNlLnJhY2UoW1xuXHRcdFx0XHRcdFx0UHJvbWlzZS5hbGwodGhpcy5yZWFkeUhhbmRsZXMubWFwKGhhbmRsZSA9PiBoYW5kbGUgaW5zdGFuY2VvZiBQcm9taXNlID8gaGFuZGxlIDogaGFuZGxlKHRoaXMpKSksXG5cdFx0XHRcdFx0XHRuZXcgUHJvbWlzZSgocmVqZWN0LCBlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlcnJvcihuZXcgRXJyb3IoXCJ0aW1lb3V0XCIpKTtcblx0XHRcdFx0XHRcdFx0fSwgMjAwMClcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1x0XHRcdFxuXHRcdFx0XHRcdHRocm93IGVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLndhaXQuZmluaXNoZWQoKTtcblx0XHR9XG5cdH1cblxuXHRzdWJDb250ZXh0KHsgcmVzb2x2ZXIgPSB0aGlzLnJlc29sdmVyLCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXIsIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSwgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIHJvb3QgPSB0aGlzLnJvb3QsIG1vZGUgPSB0aGlzLm1vZGUsIHRhcmdldCA9IHRoaXMudGFyZ2V0IH0gPSB7fSkge1xuXHRcdGNvbnN0IHN1YiA9IG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCByb290LCB0YXJnZXQsIHBhcmVudDogdGhpcyB9KTtcblx0XHQvL3RoaXMucmVhZHkoc3ViLndhaXQpO1xuXHRcdHJldHVybiBzdWI7XG5cdH1cblxuXHRjbG9uZSh7IHJlc29sdmVyID0gdGhpcy5yZXNvbHZlciwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCB9ID0ge30pIHtcblx0XHRyZXR1cm4gbmV3IENvbnRleHQoeyByZXNvbHZlciwgcmVuZGVyZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIHJvb3QsIHRhcmdldCwgcGFyZW50OiB0aGlzIH0pO1xuXHR9XG59OyIsImNvbnN0IERFRklORURfRElSRUNUSVZFUyA9IFtdO1xuXG5jb25zdCBkZWZpbmVEaXJlY3RpdmUgPSAoeyBkaXJlY3RpdmUgfSkgPT4ge1xuXHRpZiAoIShkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUpKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkltcGxlbWVudGF0aW9uIGRvc24ndCBleHRlbmQgRGlyZWN0aXZlIGNsYXNzIVwiKTtcblxuXHRpZiAoZGlyZWN0aXZlLnJhbmsgPCBEaXJlY3RpdmUuTUlOX1JBTkspXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHJhbmsgb2YgYSBkaXJlY3RpdmUgY2FuJ3QgYmUgbG93ZXIgYXMgXCIgKyBEaXJlY3RpdmUuTUlOX1JBTksgKyBcIiFcIik7XG5cblx0aWYgKGRpcmVjdGl2ZS5yYW5rID4gRGlyZWN0aXZlLk1BWF9SQU5LKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSByYW5rIG9mIGEgZGlyZWN0aXZlIGNhbid0IGJlIGdyYXRlciBhcyBcIiArIERpcmVjdGl2ZS5NQVhfUkFOSyArIFwiIVwiKTtcblxuXHRERUZJTkVEX0RJUkVDVElWRVMucHVzaChkaXJlY3RpdmUpO1xuXHRERUZJTkVEX0RJUkVDVElWRVMuc29ydCgoYSwgYikgPT4ge1xuXHRcdGNvbnN0IHBoYXNlID0gYS5waGFzZSAtIGIucGhhc2U7XG5cdFx0aWYocGhhc2UgPT0gMClcblx0XHRcdHJldHVybiBhLnJhbmsgLSBiLnJhbms7XG5cdFx0XHRcblx0XHRyZXR1cm4gcGhhc2U7XG5cdH0pO1xufTtcblxuY29uc3QgUEhBU0UgPSB7XG5cdGluaXQ6IDAsXG5cdGRhdGE6IDEsXG5cdHRlbXBsYXRlOiAyLFxuXHRjb250ZW50OiAzLFxuXHRmaW5pc2g6IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGl2ZSB7XG5cblx0c3RhdGljIGdldCBQSEFTRSgpIHsgcmV0dXJuIFBIQVNFIH07XG5cdHN0YXRpYyBnZXQgTUlOX1JBTksoKSB7IHJldHVybiAwIH07XG5cdHN0YXRpYyBnZXQgTUFYX1JBTksoKSB7IHJldHVybiAxMDAwMDAgfTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfTtcblxuXHRnZXQgbmFtZSgpIHsgfVxuXHRnZXQgcmFuaygpIHsgfVxuXHRnZXQgcGhhc2UoKSB7cmV0dXJuIFBIQVNFLmZpbmlzaH1cblxuXHQvKipcblx0ICogbmVlZCB0byBiZSBpbXBsZW1lbnRlZFxuXHQgKiBcblx0ICogcmV0dXJuIERpcmVjdGl2ZVJlc3VsdFxuXHQgKi9cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXG5cdHN0YXRpYyBkZWZpbmUob3B0aW9uKSB7XG5cdFx0ZGVmaW5lRGlyZWN0aXZlKG9wdGlvbik7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IGRpcmVjdGl2ZXMoKSB7XG5cdFx0cmV0dXJuIERFRklORURfRElSRUNUSVZFUztcblx0fVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmVFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnR7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmhpZGRlbiA9IHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBuZWVkIHRvIGJlIGltcGxlbWVudGVkXG5cdCAqIFxuXHQgKi9cblx0YXN5bmMgZXhlY3V0ZSh7dGVtcGxhdGUsIGNvbnRleHR9KXtcblx0XHRjb250ZXh0LmNvbnRlbnQgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH07XHRcbn0iLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vVGVtcGxhdGUuanNcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHQuanNcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50LmpzXCI7XG5pbXBvcnQgXCIuL2RpcmVjdGl2ZXNcIjtcbmltcG9ydCBcIi4vZWxlbWVudHNcIjtcblxuXG5leHBvcnQgY29uc3QgU0NPUEVTID0ge1xuXHRhcHBsaWNhdGlvbjogXCJhcHBsaWNhdGlvblwiLFxuXHRkYXRhOiBcImRhdGFcIixcblx0cmVuZGVyOiBcInJlbmRlclwiLFxuXHRjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG5cdG5vZGU6IFwibm9kZVwiLFxuXHRkaXJlY3RpdmU6IFwiZGlyZWN0aXZlXCJcbn07XG5cbmNvbnN0IEFQUExJQ0FUSU9OX1NDT1BFX1JFU09MVkVSID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5hcHBsaWNhdGlvbiB9KTtcblxuY29uc3QgTU9ERVdPUktFUiA9IHtcblx0XCJyZXBsYWNlXCI6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0dGFyZ2V0LnJlcGxhY2UoY29udGVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRhaW5lci5lbXB0eSgpO1xuXHRcdFx0Y29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcblx0XHR9XG5cdH0sXG5cdFwiYXBwZW5kXCI6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldClcblx0XHRcdHRhcmdldC5hZnRlcihjb250ZW50KTtcblx0XHRlbHNlXG5cdFx0XHRjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xuXHR9LFxuXHRcInByZXBlbmRcIjogYXN5bmMgKHsgY29udGFpbmVyLCB0YXJnZXQgPSBudWxsLCBjb250ZW50IH0pID0+IHtcblx0XHRpZiAodGFyZ2V0KVxuXHRcdFx0dGFyZ2V0LmJlZm9yZShjb250ZW50KTtcblx0XHRlbHNlXG5cdFx0XHRjb250YWluZXIucHJlcGVuZChjb250ZW50KTtcblx0fVxufTtcblxuY29uc3QgbG9hZFRlbXBsYXRlQ29udGVudCA9IGFzeW5jICh0ZW1wbGF0ZSwgY29udGV4dCwgcmVuZGVyZXIpID0+IHtcblx0aWYgKHRlbXBsYXRlKSB7XG5cdFx0dGVtcGxhdGUgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKHRlbXBsYXRlKVxuXHRcdHJldHVybiB0ZW1wbGF0ZS5pbXBvcnRDb250ZW50KCk7XG5cdH0gZWxzZSBpZiAoY29udGV4dClcblx0XHRyZXR1cm4gY29udGV4dC50ZW1wbGF0ZTtcblx0ZWxzZSBpZiAocmVuZGVyZXIudGVtcGxhdGUpIHtcblx0XHRyZXR1cm4gYXdhaXQgcmVuZGVyZXIudGVtcGxhdGUuaW1wb3J0Q29udGVudCgpO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKFwiTm8gY29udGVudCB0ZW1wbGF0ZSBzcGVjaWZpZWQhXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlLCBkYXRhIH0gPSB7fSkge1xuXHRcdGlmICh0ZW1wbGF0ZSAmJiAhKHRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGUpKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwidGVtcGxhdGUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBUZW1wbGF0ZSFcIik7XG5cblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5yZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMuZGF0YSwgY29udGV4dDogZGF0YSA/IGRhdGEgOiB7fSwgcGFyZW50OiBBUFBMSUNBVElPTl9TQ09QRV9SRVNPTFZFUiB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gXG5cdCAqIFx0XHRjb250YWluZXIgSFRNTEVsZW1lbnQgLT4gdGFyZ2V0IHRvIHJlbmRlciBpblxuXHQgKiBAcGFyYW1cblx0ICogXHRcdGRhdGEgT2JqZWN0fC4uLiAtPiBkYXRhIHRvIHVzZWQgYXQgcmVuZGVyaW5nXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0dGVtcGxhdGUgVGVtcGxhdGV8Tm9kZXxOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbnxTdHJpbmcgLT4gdGVtcGxhdGUgdG8gcmVuZGVyXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0bW9kZSBcImFwcGVuZFwifFwiaW5zZXJ0XCJ8XCJyZXBsYWNlXCJcblx0ICogQHBhcmFtXG5cdCAqIFx0XHR0YXJnZXRcblx0ICovXG5cdGFzeW5jIHJlbmRlcih7IHRlbXBsYXRlID0gbnVsbCwgZGF0YSA9IG51bGwsIGNvbnRhaW5lciwgcm9vdCwgbW9kZSwgdGFyZ2V0LCBjb250ZXh0ID0gbnVsbCB9KSB7XG5cdFx0dGVtcGxhdGUgPSBhd2FpdCBsb2FkVGVtcGxhdGVDb250ZW50KHRlbXBsYXRlLCBjb250ZXh0LCB0aGlzKTtcblx0XHRsZXQgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLnJlbmRlciwgY29udGV4dDogZGF0YSwgcGFyZW50OiBjb250ZXh0ID8gY29udGV4dC5yZXNvbHZlciA6IHRoaXMucmVzb2x2ZXIgfSk7XG5cblx0XHRsZXQgcmVuZGVyQ29udGV4dCA9IGNvbnRleHQ7XG5cdFx0aWYgKCFyZW5kZXJDb250ZXh0KVxuXHRcdFx0cmVuZGVyQ29udGV4dCA9IG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyOiB0aGlzLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290OiByb290ID8gcm9vdCA6IGNvbnRhaW5lciwgbW9kZTogbW9kZSA/IG1vZGUgOiBcInJlcGxhY2VcIiwgdGFyZ2V0IH0pO1xuXHRcdGVsc2Vcblx0XHRcdHJlbmRlckNvbnRleHQgPSByZW5kZXJDb250ZXh0LmNsb25lKHsgcmVzb2x2ZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIHJvb3QsIG1vZGUsIHRhcmdldCB9KTtcblxuXHRcdGxldCByZXN1bHQgPSBudWxsO1xuXHRcdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIE5vZGUpXG5cdFx0XHRyZXN1bHQgPSBhd2FpdCB0aGlzLnJlbmRlck5vZGUocmVuZGVyQ29udGV4dCk7XG5cdFx0ZWxzZVxuXHRcdFx0cmVzdWx0ID0gYXdhaXQgdGhpcy5yZW5kZXJDb250YWluZXIocmVuZGVyQ29udGV4dClcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDb250ZXh0KVxuXHRcdFx0cmVuZGVyQ29udGV4dCA9IHJlc3VsdDtcblxuXG5cdFx0aWYgKHJlbmRlckNvbnRleHQuY29udGVudCAmJiByZW5kZXJDb250ZXh0Lm1vZGUpIHtcblx0XHRcdGNvbnN0IG1vZGV3b3JrZXIgPSBNT0RFV09SS0VSW3JlbmRlckNvbnRleHQubW9kZV07XG5cdFx0XHRpZiAoIW1vZGV3b3JrZXIpXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBcXFwiXCIgKyByZW5kZXJDb250ZXh0Lm1vZGUgKyBcIlxcXCIgaXMgbm90IHN1cHBvcnRlZCFcIilcblxuXHRcdFx0YXdhaXQgbW9kZXdvcmtlcihyZW5kZXJDb250ZXh0KTtcblx0XHR9XG5cblx0XHRpZiAoIWNvbnRleHQpXG5cdFx0XHRhd2FpdCByZW5kZXJDb250ZXh0LnJlYWR5KCk7XG5cdFx0ZWxzZVxuXHRcdFx0cmVuZGVyQ29udGV4dC5yZWFkeSgpO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXG5cdGFzeW5jIHJlbmRlckNvbnRhaW5lcihjb250ZXh0KSB7XG5cdFx0aWYgKGNvbnRleHQudGVtcGxhdGUgJiYgY29udGV4dC50ZW1wbGF0ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCByZW5kZXJpbmdzID0gY29udGV4dC50ZW1wbGF0ZS5tYXAobm9kZSA9PiB7XG5cdFx0XHRcdC8vc2VwYXJhdGUgbm9kZSBjb250ZXh0IGZyb20gdGhlIGN1cnJlbnQgY29udGV4dFxuXHRcdFx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMubm9kZSwgY29udGV4dDogbnVsbCwgcGFyZW50OiBjb250ZXh0LnJlc29sdmVyIH0pO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJOb2RlKGNvbnRleHQuY2xvbmUoeyB0ZW1wbGF0ZTogbm9kZSwgcmVzb2x2ZXIgfSkpXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKHJlbmRlcmluZ3MpO1xuXHRcdFx0aWYgKCFyZXN1bHQpXG5cdFx0XHRcdHJldHVybiBjb250ZXh0O1xuXG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSByZXN1bHRcblx0XHRcdFx0LmZpbHRlcihyZXN1bHQgPT4gISFyZXN1bHQpXG5cdFx0XHRcdC5yZWR1Y2UoKGNvbnRlbnQsIHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG5vZGUgPSByZXN1bHQuY29udGVudDtcblx0XHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQuY29uY2F0KG5vZGUpO1xuXHRcdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKVxuXHRcdFx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQuY29uY2F0KEFycmF5LmZyb20obm9kZSkpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb2RlKVxuXHRcdFx0XHRcdFx0Y29udGVudC5wdXNoKG5vZGUpO1xuXG5cdFx0XHRcdFx0cmVzdWx0LnJlYWR5KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHRcdH0sIFtdKTtcblxuXHRcdH1cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cdGFzeW5jIHJlbmRlck5vZGUoY29udGV4dCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb250ZXh0LnRlbXBsYXRlLm5vcm1hbGl6ZSgpO1xuXHRcdFx0aWYgKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBFbGVtZW50KVxuXHRcdFx0XHRhd2FpdCBjb250ZXh0LnRlbXBsYXRlLmV4ZWN1dGUoY29udGV4dCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGF3YWl0IHRoaXMuZXhlY3V0ZURpcmVjdGl2ZXMoY29udGV4dCk7XG5cblx0XHRcdGlmICghY29udGV4dC5pZ25vcmUgJiYgY29udGV4dC5jb250ZW50KSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnQgPSBjb250ZXh0LnRlbXBsYXRlLmNoaWxkTm9kZXM7XG5cdFx0XHRcdGlmIChjb250ZW50ICYmIGNvbnRlbnQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdC8vIEBUT0RPIGF3YWl0IG9yIGZpcmUgYW5kIGZvcmdldD8/P1xuXHRcdFx0XHRcdGF3YWl0IGNvbnRleHQucmVuZGVyZXIucmVuZGVyKHsgY29udGV4dDogY29udGV4dC5jbG9uZSh7IHRlbXBsYXRlOiBjb250ZW50LCBjb250YWluZXI6IGNvbnRleHQuY29udGVudCB9KSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29udGV4dC5jb250ZW50ICYmIGNvbnRleHQuY29udGVudC50YWdOYW1lICYmIGNvbnRleHQuY29udGVudC50YWdOYW1lID09IFwiSlNUTFwiKVxuXHRcdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBjb250ZXh0LmNvbnRlbnQuY2hpbGROb2RlczsgLy9zcGVjaWFsIGNhc2UgdG8gc3VwcG9ydCB0aGUgb2xkIFwiPGpzdGw+XCIgdGFnLlxuXHRcdFx0XHRcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgcmVuZGVyIG5vZGU6XCIsIGUsIGNvbnRleHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGVEaXJlY3RpdmVzKGNvbnRleHQpIHtcblx0XHQvL2NvbnNvbGUubG9nKFwic2NvcGUgY2hhaW46XCIsIGNvbnRleHQucmVuZGVyZXIuY2hhaW4sIFwicmVzb2x2ZXIgY2hhaW5cIiwgY29udGV4dC5yZW5kZXJlci5yZXNvbHZlci5mdWxsbmFtZSk7XG5cdFx0Y29uc3QgZGlyZWN0aXZlcyA9IERpcmVjdGl2ZS5kaXJlY3RpdmVzO1xuXHRcdGNvbnN0IGxlbmd0aCA9IGRpcmVjdGl2ZXMubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoICYmICFjb250ZXh0LnN0b3A7IGkrKykge1xuXHRcdFx0Y29uc3QgZGlyZWN0aXZlID0gZGlyZWN0aXZlc1tpXTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRpcmVjdGl2ZS5leGVjdXRlKGNvbnRleHQpO1xuXHRcdFx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgQ29udGV4dClcblx0XHRcdFx0XHRjb250ZXh0ID0gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgZGlyZWN0aXZlOlwiLCBlLCBkaXJlY3RpdmUsIGNvbnRleHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBidWlsZCh7IHRlbXBsYXRlLCBkYXRhIH0gPSB7fSkge1xuXHRcdGlmICh0ZW1wbGF0ZSAmJiB0ZW1wbGF0ZSBpbnN0YW5jZW9mIFByb21pc2UpXG5cdFx0XHR0ZW1wbGF0ZSA9IGF3YWl0IHRlbXBsYXRlO1xuXG5cdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZSA/IGF3YWl0IFRlbXBsYXRlLmxvYWQodGVtcGxhdGUpIDogbnVsbDtcblx0XHRyZXR1cm4gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUsIGRhdGEgfSk7XG5cdH07XG5cblx0c3RhdGljIGFzeW5jIHJlbmRlcih7IGNvbnRhaW5lciwgZGF0YSwgdGVtcGxhdGUsIG1vZGUsIHRhcmdldCB9KSB7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoeyB0ZW1wbGF0ZSwgZGF0YSB9KTtcblx0XHRyZXR1cm4gcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyLCBtb2RlLCB0YXJnZXQgfSk7XG5cdH1cbn0iLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qc1wiO1xuXG5jb25zdCBDQUNIRSA9IHt9O1xuY29uc3QgZ2V0S2V5ID0gKHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpID0+IHtcblx0aWYoIWNhY2hlKVxuXHRcdHJldHVybiBudWxsO1xuXHRcblx0bGV0IGtleSA9IG51bGw7XG5cdGlmKGFsaWFzKVxuXHRcdGtleSA9IGFsaWFzO1x0XG5cdGVsc2UgaWYodHlwZW9mIHRlbXBsYXRlID09PSBcInN0cmluZ1wiKVxuXHRcdGtleSA9IHRlbXBsYXRlO1xuXHRlbHNlIGlmKHRlbXBsYXRlIGluc3RhbmNlb2YgVVJMKVxuXHRcdGtleSA9IHRlbXBsYXRlLnRvU3RyaW5nKCk7XG5cdGVsc2UgaWYodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClcblx0XHRrZXkgPSB0ZW1wbGF0ZS5zZWxlY3RvcigpO1xuXHRcblx0aWYoa2V5KVxuXHRcdHJldHVybiBrZXkuaGFzaGNvZGUoKTtcblx0XG5cdHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZnJvbVVSTCA9IGFzeW5jICh1cmwsIGNhY2hlLCBrZXkpID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwudG9TdHJpbmcoKSk7XG5cdGNvbnN0IHNvdXJjZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcblx0cmV0dXJuIGZyb21Tb3VyY2Uoc291cmNlLCBjYWNoZSwga2V5KTtcbn07XG5cbmNvbnN0IGZyb21Tb3VyY2UgPSBhc3luYyAoc291cmNlLCBjYWNoZSwga2V5KSA9PiB7XG5cdHJldHVybiBmcm9tRWxlbWVudChjcmVhdGUoc291cmNlLCB0cnVlKSwgY2FjaGUsIGtleSk7XG59O1xuXG5jb25zdCBmcm9tRWxlbWVudCA9IGFzeW5jIChlbGVtZW50LCBjYWNoZSwga2V5KSA9PiB7XHRcblx0bGV0IHRlbXBsYXRlID0gbnVsbFxuXHRpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcdFx0XHRcblx0XHR0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShlbGVtZW50KTtcblx0ZWxzZSB7XG5cdFx0dGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdFx0aWYoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUgfHwgZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHR0ZW1wbGF0ZS5hcHBlbmQoZWxlbWVudCk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIVwiKTtcdFx0XHRcblx0XHRcblx0XHR0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSh0ZW1wbGF0ZSwga2V5KTtcblx0fVxuXHRcblx0aWYoIXRlbXBsYXRlKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIGNhbid0IGxvYWRlZCFcIik7XG5cdFxuXHRpZihjYWNoZSAmJiBrZXkpXG5cdFx0Q0FDSEVba2V5XSA9IHRlbXBsYXRlO1xuXHRcblx0cmV0dXJuIHRlbXBsYXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGUge1x0XG5cdGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBrZXkpe1x0XHRcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5rZXkgPSBrZXk7XHRcblx0fVxuXHRcblx0aW1wb3J0Q29udGVudChkb2M9ZG9jdW1lbnQpe1xuXHRcdGxldCBpbXBvcnRlZCA9IGRvYy5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUsIHRydWUpO1xuXHRcdHJldHVybiBpbXBvcnRlZC5jb250ZW50LmNoaWxkTm9kZXM7XG5cdH1cblx0XG5cdHJlbW92ZSgpIHtcblx0XHRpZih0aGlzLmtleSAmJiBDQUNIRVt0aGlzLmtleV0pXG5cdFx0XHRkZWxldGUgQ0FDSEVbdGhpcy5rZXldO1x0XHRcblx0fTtcblx0XG5cdHN0YXRpYyBhc3luYyBsb2FkKHRlbXBsYXRlLCBjYWNoZSA9IHRydWUsIGFsaWFzID0gbnVsbCl7XG5cdFx0aWYodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSlcblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHRcblx0XHRjb25zdCBrZXkgPSBnZXRLZXkodGVtcGxhdGUsIGNhY2hlLCBhbGlhcyk7XG5cdFx0aWYoa2V5ICYmIENBQ0hFW2tleV0pXG5cdFx0XHRyZXR1cm4gQ0FDSEVba2V5XTtcblx0XHRlbHNlIGlmKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gXCJzdHJpbmdcIil7XG5cdFx0XHRyZXR1cm4gZnJvbVNvdXJjZSh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0fWVsc2UgaWYodGVtcGxhdGUgaW5zdGFuY2VvZiBVUkwpXG5cdFx0XHRyZXR1cm4gYXdhaXQgZnJvbVVSTCh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0ZWxzZSBpZih0ZW1wbGF0ZSBpbnN0YW5jZW9mIE5vZGUgfHwgdGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCB0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcblx0XHRcdHJldHVybiBmcm9tRWxlbWVudCh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0XG5cdFx0bmV3IEVycm9yKFwiVGhlIHRlbXBsYXRlIGlzbid0IGEgYWxsb3dlZCB0eXBlISAtPiBbU3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufFRlbXBsYXRlXSByZXF1aXJlZCFcIik7XG5cdH1cdFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IChvYmplY3QpID0+IHtcblx0bGV0IGZpbmlzaGVkID0gbnVsbDtcblx0Y29uc3Qgd2FpdCA9ICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdGZpbmlzaGVkID0gcmVzb2x2ZTtcblx0fSk7XG5cdHdhaXQub2JqZWN0ID0gb2JqZWN0O1xuXHRcblx0d2FpdC5maW5pc2hlZCA9IGFzeW5jICgpID0+IHtcblx0XHRhd2FpdCBmaW5pc2hlZCgpO1xuXHR9O1xuXHRcblx0cmV0dXJuIHdhaXQ7XG59OyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuXG5jb25zdCBBVFRSSUJVVEVfTkFNRSA9IC8oanN0bCk/KFxcPyk/KEApPyhbXlxcP0BdKykvaTtcblxuY29uc3QgYmluZEF0dHJpYnV0ZSA9IGFzeW5jICh7IGNvbmRpdGlvbiwgbmFtZSwgdmFsdWUsIGNvbnRleHQgfSkgPT4ge1xuXHRjb25zdCB7IHJlc29sdmVyLCBjb250ZW50LCB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRcblx0bGV0IGF0dHJpYnV0ZSA9ICFjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIobmFtZSk7XG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IHZhbHVlIDogdGVtcGxhdGUuYXR0cihcIj9cIiArIG5hbWUpO1xuXHRjb25zdCBoYXNWYWx1ZSA9IGlzVmFsdWUoYXR0cmlidXRlKTtcblx0XG5cdGlmIChjb25kaXRpb24gJiYgaGFzVmFsdWUpIHtcblx0XHRjb25kaXRpb24gPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZmFsc2UpO1xuXHRcdGlmIChjb25kaXRpb24gPT09IHRydWUpXG5cdFx0XHRjb250ZW50LmF0dHIobmFtZSwgYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoYXR0cmlidXRlLCBhdHRyaWJ1dGUpKTtcblx0fSBlbHNlIGlmIChjb25kaXRpb24pIHtcblx0XHRjb25kaXRpb24gPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZmFsc2UpO1xuXHRcdGlmIChjb25kaXRpb24gPT09IHRydWUpXG5cdFx0XHRjb250ZW50LmF0dHIobmFtZSwgdHJ1ZSk7XG5cdH0gZWxzZSBpZiAoaGFzVmFsdWUpIHtcblx0XHRjb250ZW50LmF0dHIobmFtZSwgYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoYXR0cmlidXRlLCBhdHRyaWJ1dGUpKTtcblx0fVxufTtcblxuY29uc3QgaXNWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRyZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XHRcbn07XG5cbmNvbnN0IGJpbmRFdmVudCA9IGFzeW5jICh7IGNvbmRpdGlvbiwgbmFtZSwgdmFsdWUsIGNvbnRleHQgfSkgPT4ge1xuXHRjb25zdCB7IHJlc29sdmVyLCB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IHZhbHVlIDogdGVtcGxhdGUuYXR0cihcIj9AXCIgKyBuYW1lKTtcblx0bGV0IGhhbmRsZSA9ICFjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCJAXCIrIG5hbWUpO1xuXHRsZXQgc3BsaXQgPSBuYW1lLnNwbGl0KFwiOlwiKTtcblx0Y29uc3QgZXZlbnQgPSBzcGxpdC5zaGlmdCgpO1xuXHRjb25zdCB0eXBlID0gc3BsaXQuc2hpZnQoKSB8fCBcImRlZmF1bHRcIjtcblx0XG5cblx0aWYgKGNvbmRpdGlvbiAmJiBoYW5kbGUpe1xuXHRcdGlmKGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgPT0gdHJ1ZSlcblx0XHRcdGF3YWl0IGJpbmRpbmcoe2V2ZW50LCB0eXBlLCBoYW5kbGUsIGNvbnRleHQgfSk7XG5cdH1cblx0ZWxzZSBpZiAoaGFuZGxlKVxuXHRcdGF3YWl0IGJpbmRpbmcoe2V2ZW50LCB0eXBlLCBoYW5kbGUsIGNvbnRleHQgfSk7XG59O1xuXG5jb25zdCBiaW5kaW5nID0gYXN5bmMgKHtldmVudCwgdHlwZSwgaGFuZGxlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgY29udGVudH0gPSBjb250ZXh0O1xuXHRcdFxuXHRpZih0eXBlID09IFwiZGVsZWdhdGVcIil7XG5cdFx0Y29uc3QgZXZlbnRoYW5kbGUgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChoYW5kbGUsIGhhbmRsZSk7XG5cdFx0Y29udGVudC5vbihldmVudCwgZGVsZWdhdGVyKGV2ZW50aGFuZGxlKSk7XG5cdH0gZWxzZSB7XHRcdFxuXHRcdGNvbnN0IGV2ZW50aGFuZGxlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShoYW5kbGUsIGhhbmRsZSk7XG5cdFxuXHRcdGlmKCFldmVudGhhbmRsZSlcblx0XHRcdGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiQ2FuJ3QgcmVzb2x2ZSBcXFwiXCIgKyBoYW5kbGUgKyBcIlxcXCIgdG8gZXZlbnQgaGFuZGxlIVwiKSlcblx0XHRlbHNlIGlmKHR5cGVvZiBldmVudGhhbmRsZSA9PT0gXCJmdW5jdGlvblwiKVxuXHRcdFx0Y29udGVudC5vbihldmVudCwgZXZlbnRoYW5kbGUpO1xuXHRcdGVsc2UgaWYodHlwZW9mIGV2ZW50aGFuZGxlID09PSBcInN0cmluZ1wiKVxuXHRcdFx0Y29udGVudC5vbihldmVudCwgZGVsZWdhdGVyKGV2ZW50aGFuZGxlKSk7XG5cdFx0ZWxzZSBpZih0eXBlb2YgZXZlbnRoYW5kbGUgPT09IFwib2JqZWN0XCIpe1x0XG5cdFx0XHRjb25zdCB7Y2FwdHVyZT1mYWxzZSwgcGFzc2l2ZT1mYWxzZSwgb25jZT1mYWxzZX0gPSBoYW5kbGU7XHRcdFxuXHRcdFx0Y29udGVudC5vbihldmVudCwgZXZlbnRoYW5kbGUuZXZlbnRIYW5kbGUsIHtjYXB0dXJlLCBwYXNzaXZlLCBvbmNlfSk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBkZWxlZ2F0ZXIgPSBmdW5jdGlvbihkZWxlZ2F0ZSkge1xuXHRyZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmKGV2ZW50LmN1cnJlbnRUYXJnZXQpXHRcblx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQudHJpZ2dlcihkZWxlZ2F0ZSwgZXZlbnQpO1xuXHRcdGVsc2Vcblx0XHRcdGV2ZW50LnRhcmdldC50cmlnZ2VyKGRlbGVnYXRlLCBldmVudCk7XG5cdH07XG59O1xuXG5cbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiYXR0cmlidXRlXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50IH1cblxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGNvbnN0IHsgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IHByb2Nlc3NlZCA9IG5ldyBTZXQoKTtcblx0XHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiB0ZW1wbGF0ZS5hdHRyaWJ1dGVzKSB7XG5cdFx0XHRjb25zdCBbLCBqc3RsLCBjb25kaXRpb24sIGV2ZW50LCBuYW1lXSA9IEFUVFJJQlVURV9OQU1FLmV4ZWMoYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0aWYgKCFqc3RsICYmICFwcm9jZXNzZWQuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRpZiAoZXZlbnQpXG5cdFx0XHRcdFx0YXdhaXQgYmluZEV2ZW50KHsgY29uZGl0aW9uLCBldmVudCwgbmFtZSwgdmFsdWUsIGNvbnRleHQgfSlcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGF3YWl0IGJpbmRBdHRyaWJ1dGUoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pXG5cdFx0XHR9XG5cdFx0XHRwcm9jZXNzZWQuYWRkKG5hbWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBBdHRyaWJ1dGUoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgQ2hvb3NlIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJjaG9vc2VcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMSB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZSB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoXCJqc3RsLWNob29zZVwiKSB8fCBjb250ZXh0LnRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCA9PSAwKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCB7IHRlbXBsYXRlLCByZXNvbHZlciB9ID0gY29udGV4dDtcblx0XHRsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblx0XHRjb25zdCB3aGVucyA9IHRlbXBsYXRlLmZpbmQoXCI6c2NvcGUgPiBbanN0bC13aGVuXVwiKTtcblx0XHRjb25zdCBsZW5ndGggPSB3aGVucy5sZW5ndGg7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IHdoZW5zW2ldO1xuXHRcdFx0aWYgKCFyZXNvbHZlZCAmJiAoYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShub2RlLmF0dHIoXCJqc3RsLXdoZW5cIiksIGZhbHNlKSkpXG5cdFx0XHRcdHJlc29sdmVkID0gdHJ1ZTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0bm9kZS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHRpZiAocmVzb2x2ZWQpXG5cdFx0XHR0ZW1wbGF0ZS5maW5kKFwiOnNjb3BlID4gW2pzdGwtb3RoZXJ3aXNlXVwiKS5yZW1vdmUoKTtcblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBDaG9vc2UoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgTU9ERVMgPSB7XG5cdFwicmVtb3RlXCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1x0XHRcblx0XHRjb25zdCB7cmVzb2x2ZXIsIHRlbXBsYXRlfSA9IGNvbnRleHQ7XG5cdFx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGRhdGEpO1xuXHRcdGRhdGEgPSBuZXcgVVJMKGRhdGEsIGxvY2F0aW9uLm9yaWdpbik7XG5cdFx0bGV0IG9wdGlvbiA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtb3B0aW9uXCIpIHx8IFwie31cIik7XG5cdFx0b3B0aW9uID0gSlNPTi5wYXJzZShvcHRpb24pO1xuXG5cdFx0ZGF0YSA9IGF3YWl0IGZldGNoKGRhdGEudG9TdHJpbmcoKSwgb3B0aW9uKTtcblx0XHRyZXR1cm4gZGF0YS5qc29uKCk7XG5cdH0sXG5cdFwiZGlyZWN0XCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlcn0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxufTtcblxuY29uc3QgdXBkYXRlQ29udGV4dCA9ICh7IHZhcm5hbWUsIGRhdGEsIHNjb3BlLCBjb250ZXh0IH0pID0+IHtcblx0aWYgKHZhcm5hbWUpXG5cdFx0Y29udGV4dC5yZXNvbHZlci51cGRhdGVEYXRhKHZhcm5hbWUsIGRhdGEsIHNjb3BlKTtcblx0ZWxzZSBpZiAoc2NvcGUpXG5cdFx0Y29udGV4dC5yZXNvbHZlci5tZXJnZUNvbnRleHQoZGF0YSwgc2NvcGUpO1xuXHRlbHNlXG5cdFx0Y29udGV4dC5yZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZGF0YVwiLCBwYXJlbnQ6IGNvbnRleHQucmVzb2x2ZXIgfSk7XG5cdFxuXHRcdFxuXHRyZXR1cm4gY29udGV4dDtcbn07XG5cblxuXG5jbGFzcyBEYXRhIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJkYXRhXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIDEwMDAgfVxuXHRnZXQgcGhhc2UoKXtyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmRhdGF9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhXCIpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0XHRcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcdFx0XHRcblx0XHRcdGNvbnN0IG1vZGUgPSBNT0RFU1sodGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS1tb2RlXCIpIHx8IFwicmVtb3RlXCIpXTtcblx0XHRcdGlmICghbW9kZSlcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGpzdGwtZGF0YS1tb2RlIGlzIHVuc3VwcG9ydGVkIVwiKTtcblxuXHRcdFx0bGV0IGRhdGEgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhXCIpO1xuXHRcdFx0ZGF0YSA9IGF3YWl0IG1vZGUoeyBkYXRhLCBjb250ZXh0IH0pO1xuXG5cdFx0XHRjb25zdCB2YXJuYW1lID0gdGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS12YXJcIik7XG5cdFx0XHRjb25zdCBzY29wZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtc2NvcGVcIik7XG5cdFx0XHRjb250ZXh0ID0gdXBkYXRlQ29udGV4dCh7IHZhcm5hbWUsIGRhdGEsIHNjb3BlLCBjb250ZXh0IH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgRGF0YSgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuXG5jb25zdCBBVFRSSUJVVEUgPSB7XG5cdERBVEE6IFwianN0bC1mb3JlYWNoXCIsXG5cdFZBUjogXCJqc3RsLWZvcmVhY2gtdmFyXCIsXG5cdFNUQVRVUzogXCJqc3RsLWZvcmVhY2gtc3RhdHVzXCIsXG5cdENPVU5UOiBcImpzdGwtZm9yZWFjaC1jb3VudFwiLFxuXHRTVEFSVDogXCJqc3RsLWZvcmVhY2gtc3RhcnRcIixcblx0U1RFUDogXCJqc3RsLWZvcmVhY2gtc3RlcFwiLFxuXHRDT05ESVRJT046IFwianN0bC1mb3JlYWNoLWNvbmRpdGlvblwiXG59O1xuXG5jb25zdCBkb0NvdW50ID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRjb3VudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQpO1xuXHRjb25zdCBsZW5ndGggPSBzdGFydCArIChjb3VudCAqIHN0ZXApO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gaTtcblx0XHRpdGVyYXRpb25bc3RhdHVzXSA9IHtcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdHN0ZXAsXG5cdFx0XHRjb3VudFxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5jb25zdCBkb0ZvcmVhY2ggPSBhc3luYyAob3B0aW9uKSA9PiB7XG5cdGxldCB7IGRhdGEsIHN0YXJ0LCBzdGVwLCBjb3VudCwgdmFybmFtZSwgc3RhdHVzLCByZXNvbHZlciB9ID0gb3B0aW9uO1xuXG5cdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGRhdGEpO1xuXHRsZXQgYXJyYXkgPSBkYXRhO1xuXHRpZiAoIShkYXRhIGluc3RhbmNlb2YgQXJyYXkpKVxuXHRcdGFycmF5ID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YSk7XG5cblx0Y291bnQgPSBjb3VudCAhPSBcIlwiID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb3VudCwgMCkgOiBudWxsO1xuXHRjb25zdCBsZW5ndGggPSBjb3VudCA/IE1hdGgubWluKHN0YXJ0ICsgY291bnQsIGFycmF5Lmxlbmd0aCkgOiBhcnJheS5sZW5ndGg7XG5cdGxldCBzdG9wID0gZmFsc2U7XG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxlbmd0aCAmJiAhc3RvcDsgaSA9IGkgKyBzdGVwKSB7XG5cdFx0Y29uc3QgaXRlcmF0aW9uID0ge31cblx0XHRpdGVyYXRpb25bdmFybmFtZV0gPSBkYXRhW2ldO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0Y291bnQ6IGxlbmd0aCxcblx0XHRcdGRhdGFcblx0XHR9O1xuXHRcdHN0b3AgPSAhKGF3YWl0IGl0ZXJhdGUoaXRlcmF0aW9uLCBvcHRpb24pKTtcblx0fVxufTtcblxuY29uc3QgaXRlcmF0ZSA9IGFzeW5jIChkYXRhLCBvcHRpb24pID0+IHtcblx0bGV0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGFpbmVyLCBjb25kaXRpb24sIGNvbnRleHQgfSA9IG9wdGlvbjtcblx0cmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogZGF0YSwgbmFtZTogXCJqc3RsLWZvcmVhY2hcIiwgcGFyZW50OiByZXNvbHZlciB9KTtcblxuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZmFsc2UpIDogZmFsc2U7XG5cdGlmIChjb25kaXRpb24pXG5cdFx0cmV0dXJuIGZhbHNlO1xuXG5cdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7IGNvbnRleHQ6IGNvbnRleHQuY2xvbmUoeyByZXNvbHZlciwgY29udGFpbmVyLCB0ZW1wbGF0ZSwgbW9kZTogXCJhcHBlbmRcIiB9KSB9KTtcblx0cmV0dXJuIHRydWU7XG59O1xuXG5jbGFzcyBGb3JlYWNoIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJmb3JlYWNoXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDIgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UudGVtcGxhdGUgfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgKCFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpICYmICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyLCBjb250ZW50IH0gPSBjb250ZXh0O1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0ge1xuXHRcdFx0XHRkYXRhOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRjb3VudDogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSB8fCBcIlwiKS50cmltKCksXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUuY2hpbGROb2Rlcyxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXI6IGNvbnRlbnQsXG5cdFx0XHRcdGNvbnRleHRcblx0XHRcdH07XG5cdFx0XHRpZiAoKCFvcHRpb24uZGF0YSB8fCBvcHRpb24uZGF0YSA9PSBcIlwiKSAmJiBvcHRpb24uY291bnQpXG5cdFx0XHRcdGF3YWl0IGRvQ291bnQob3B0aW9uKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0YXdhaXQgZG9Gb3JlYWNoKG9wdGlvbik7XG5cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGpzdGwtZm9yZWFjaDpcIiwgZXJyb3IpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29udGV4dDtcblxuXHR9XG59O1xuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgRm9yZWFjaCgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuXG5jbGFzcyBJZiBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiaWZcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMTAwMCB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5pbml0IH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICF0ZW1wbGF0ZS5hdHRyKFwianN0bC1pZlwiKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXG5cdFx0Y29uc3QgZXhwcmVzc2lvbiA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWlmXCIpO1xuXHRcdGNvbnN0IHJlc29sdmVyID0gY29udGV4dC5yZXNvbHZlcjtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIGZhbHNlKTtcblx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gbnVsbDtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IElmKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4uL1RlbXBsYXRlLmpzXCI7XG5cbmNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBEaXJlY3RpdmUge1x0XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0fVxuXHRcblx0Z2V0IG5hbWUoKSB7cmV0dXJuIFwiaW5jbHVkZVwifVxuXHRnZXQgcmFuaygpIHtyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LfVxuXHRnZXQgcGhhc2UoKXtyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlfVxuXHRcdFxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpe1xuXHRcdGlmKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0dHJ5e1xuXHRcdFx0Y29uc3Qge3RlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXJ9ID0gY29udGV4dDtcdFx0XG5cdFx0XHRsZXQgaW5jbHVkZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWluY2x1ZGVcIik7XG5cdFx0XHRpbmNsdWRlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaW5jbHVkZSk7XG5cdFx0XHRpbmNsdWRlID0gbmV3IFVSTChpbmNsdWRlLCBsb2NhdGlvbi5vcmlnaW4pO1x0XHRcdFxuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoaW5jbHVkZSk7XG5cdFx0XHRcblx0XHRcdGNvbnN0IG1vZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlLW1vZGVcIikgfHwgXCJyZXBsYWNlXCI7XG5cdFx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoe3RlbXBsYXRlOmluY2x1ZGUsIGNvbnRhaW5lcjogY29udGV4dC5jb250ZW50LCBtb2RlLCBjb250ZXh0fSk7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZTtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0fWNhdGNoKGUpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihlLCBjb250ZXh0LnRlbXBsYXRlKTtcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdH1cdFx0XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7ZGlyZWN0aXZlOiBuZXcgSW5jbHVkZSgpfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgUmVwbGFjZSBmcm9tIFwiLi4vZWxlbWVudHMvUmVwbGFjZS5qc1wiXG5cblxuY2xhc3MgSW5pdGlhbCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiaW5pdGlhbFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuaW5pdCB9XG5cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlLCByZW5kZXJlciB9ID0gY29udGV4dDtcblx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBUZXh0KVxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cblx0XHRlbHNlIGlmICh0ZW1wbGF0ZS5hdHRyKFwianN0bC1hc3luY1wiKSkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gbmV3IFJlcGxhY2UoKTtcblx0XHRcdHRlbXBsYXRlLmF0dHIoXCJqc3RsLWFzeW5jXCIsIG51bGwpO1xuXHRcdFx0c2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7IG1vZGU6IFwicmVwbGFjZVwiLCB0YXJnZXQ6IGNvbnRleHQuY29udGVudCwgY29udGV4dCB9KTtcblx0XHRcdH0sIHBhcnNlSW50KHRlbXBsYXRlLmF0dHIoXCJqc3RsLWFzeW5jXCIpIHx8IFwiMjUwXCIpIHx8IDI1MCk7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUuYXR0cihcImpzdGwtaWdub3JlXCIpKSB7XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLCB0cnVlKTtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGVtcGxhdGUudGFnTmFtZSk7XG5cdFx0XHRjb25zdCBzdWJjb250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHtcblx0XHRcdFx0dGVtcGxhdGU6IHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2Rlcyxcblx0XHRcdFx0Y29udGFpbmVyOiBjb250ZXh0LmNvbnRlbnQuY29udGVudFxuXHRcdFx0fSk7XG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoeyBjb250ZXh0OiBzdWJjb250ZXh0IH0pO1xuXHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlLnRhZ05hbWUpXG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUpO1xuXHRcdGVsc2Uge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJbml0aWFsKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OID0ge1xuXHRtb2RlOiBcInRleHRcIixcblx0dW5zZWN1cmU6IGZhbHNlLFxuXHRwcmV2ZW50Rm9ybWF0IDogZmFsc2UsXG5cdG1heExlbmd0aDogMFx0XG59O1xuXG5jb25zdCBTRUNVUkVfSFRNTF9GSUxURVIgPSBcInNjcmlwdCwgc3R5bGUsIGJvZHksIGh0bWwsIGhlYWQsIG9iamVjdCwgbGlua1wiO1xuXG5jb25zdCByZWFkT3B0aW9uID0gYXN5bmMgKHBhcmVudCwgY29udGV4dCkgPT4ge1xuXHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdHJldHVybiB7XG5cdFx0bW9kZTogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoKHBhcmVudC5hdHRyKFwianN0bC10ZXh0LWNvbnRlbnQtdHlwZVwiKSB8fCBcInRleHRcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkpLFxuXHRcdHVuc2VjdXJlOiBwYXJlbnQuaGFzQXR0cmlidXRlKFwianN0bC10ZXh0LXVuc2VjdXJlXCIpLFxuXHRcdHByZXZlbnRGb3JtYXQ6ICEhcGFyZW50LmF0dHIoXCJqc3RsLXRleHQtcHJldmVudC1mb3JtYXRcIikgfHwgZmFsc2UsXG5cdFx0bWF4TGVuZ3RoOiBwYXJzZUludChhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChwYXJlbnQuYXR0cihcImpzdGwtdGV4dC10cmltLWxlbmd0aFwiKSB8fCBcIjBcIikpXG5cdH07XG59O1xuXG5jb25zdCB0cmltVGV4dExlbmd0aCA9ICh0ZXh0LCBsZW5ndGgpID0+IHtcblx0cmV0dXJuIHRleHQubGVuZ3RoID4gbGVuZ3RoID8gdGV4dC5zdWJzdHJpbmcoMCwgbGVuZ3RoIC0gMykudHJpbSgpICsgXCIuLi5cIiA6IHRleHQ7XG59O1xuXG5jb25zdCBNT0RFUyA9IHtcblx0XCJ0ZXh0XCIgOiBhc3luYyAob3B0aW9uLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3Qge2NvbnRlbnQsIHJlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGxldCB0ZXh0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUudGV4dENvbnRlbnQpO1x0XHRcblx0XHR0ZXh0ID0gY3JlYXRlKHRleHQsdHJ1ZSkuY29udGVudC50ZXh0Q29udGVudDtcblx0XHRpZihvcHRpb24ubWF4TGVuZ3RoID4gMClcblx0XHRcdHRleHQgPSB0cmltVGV4dExlbmd0aCh0ZXh0LCBvcHRpb24ubWF4TGVuZ3RoKTtcdFx0XG5cdFx0XG5cdFx0Y29udGVudC50ZXh0Q29udGVudCA9IHRleHQ7XHRcdFxuXHR9LFxuXHRcImh0bWxcIjogYXN5bmMgKG9wdGlvbiwgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlciwgdGVtcGxhdGV9ID0gY29udGV4dDtcblx0XHRcblx0XHRsZXQgY29udGVudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLnRleHRDb250ZW50KTtcdFx0XG5cdFx0Y29udGVudCA9IGNyZWF0ZShjb250ZW50LHRydWUpO1x0XHRcblx0XHRjb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShjb250ZW50LmNvbnRlbnQsIHRydWUpO1xuXHRcdFxuXHRcdGlmKG9wdGlvbi51bnNlY3VyZSlcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGNvbnRlbnQ7XHRcdFx0XG5cdFx0ZWxzZXtcblx0XHRcdGNvbnRlbnQuZmluZChTRUNVUkVfSFRNTF9GSUxURVIpLnJlbW92ZSgpO1x0XHRcdFxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gY29udGVudDtcblx0XHR9XG5cdH1cbn07XG5cblxuY2xhc3MgVGV4dENvbnRlbnQgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcInRleHRcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMSB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50IH1cblxuXG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRleHQpIHx8IHRlbXBsYXRlLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggPT0gMCB8fCAodGVtcGxhdGUucGFyZW50RWxlbWVudCAmJiB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImpzdGwtdGV4dC1pZ25vcmVcIikpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwYXJlbnQgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50O1xuXHRcdGNvbnN0IG9wdGlvbiA9IHBhcmVudCA/IGF3YWl0IHJlYWRPcHRpb24ocGFyZW50LCBjb250ZXh0KSA6IERFRkFVTFRfT1BUSU9OO1xuXHRcdFxuXHRcdGNvbnN0ICBtb2RlID0gTU9ERVNbb3B0aW9uLm1vZGVdO1xuXHRcdGlmKCFtb2RlKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGV4dCBtb2RlIFxcXCJcIisgb3B0aW9uLm1vZGUgKyBcIlxcXCIgaXMgdW5zdXBwb3J0ZWQhXCIpO1xuXHRcdFxuXHRcdGF3YWl0IG1vZGUob3B0aW9uLCBjb250ZXh0KTtcblx0XHRcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgVGV4dENvbnRlbnQoKSB9KTsiLCJpbXBvcnQgXCIuL0luaXRpYWwuanNcIjtcbmltcG9ydCBcIi4vRGF0YS5qc1wiO1xuaW1wb3J0IFwiLi9JZi5qc1wiO1xuaW1wb3J0IFwiLi9DaG9vc2UuanNcIjtcbmltcG9ydCBcIi4vSW5jbHVkZS5qc1wiO1xuaW1wb3J0IFwiLi9Gb3JlYWNoLmpzXCI7XG5pbXBvcnQgXCIuL1RleHQuanNcIjtcbmltcG9ydCBcIi4vQXR0cmlidXRlcy5qc1wiOyIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50LmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwbGFjZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50e1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdFx0XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuXHR9XG5cdGFzeW5jIGV4ZWN1dGUoe3RlbXBsYXRlLCBjb250ZXh0fSl7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH07XHRcdFxufVxudHJ5e2N1c3RvbUVsZW1lbnRzLmRlZmluZShcImpzdGwtcmVwbGFjZVwiLCBSZXBsYWNlRWxlbWVudCk7fWNhdGNoKGUpe30vL2lnbm9yZSIsImltcG9ydCBcIi4vUmVwbGFjZS5qc1wiIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBkZWZpbmUsIHRvTm9kZU5hbWUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvRGVmaW5lQ29tcG9uZW50SGVscGVyXCI7XG5pbXBvcnQgeyBmaW5kQ2xvc2VzdEluRGVwdGggfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvTm9kZUhlbHBlclwiO1xuaW1wb3J0IHsgYXR0cmlidXRlQ2hhbmdlRXZlbnRuYW1lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL0V2ZW50SGVscGVyXCJcbmltcG9ydCB7IEVWRU5UX0NMSUNLIGFzIFJPVVRFX0NMSUNLIH0gZnJvbSBcIi4vUm91dGUvRXZlbnRzXCI7XG5pbXBvcnQgeyBFVkVOVF9UT19ST1VURSB9IGZyb20gXCIuL1JvdXRlTGluay9FdmVudHNcIjtcbmltcG9ydCBSZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlclwiO1xuaW1wb3J0IFJvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5pbXBvcnQgUm91dGVMaW5rIGZyb20gXCIuL1JvdXRlTGlua1wiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xuXG5jb25zdCBOT0RFTkFNRSA9IHRvTm9kZU5hbWUoXCJhcHBsaWNhdGlvblwiKTtcbmV4cG9ydCBjb25zdCBFVkVOVF9TVE9SRV9DSEFOR0VEID0gXCJhcHAtc3RvcmUtY2hhbmdlZFwiO1xuZXhwb3J0IGNvbnN0IEFUVFJfUk9VVEUgPSBcInJvdXRlXCI7XG5cbmNvbnN0IGZpbmRSb3V0ZSA9IChhcHAsIG5hbWUpID0+IHtcblx0Y29uc3Qgc2VsZWN0b3IgPSBgJHtSb3V0ZS5OT0RFTkFNRX1bbmFtZT1cIiR7bmFtZX1cIl1gO1xuXHRyZXR1cm4gYXBwLmZpbmQoc2VsZWN0b3IpLmZpcnN0KCk7XG59O1xuXG5jb25zdCBidWlsZFJvdXRlQ29udGV4dCA9IGFzeW5jIChjb250ZXh0LCBhcHApID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gUmVzb2x2ZXIucmVzb2x2ZShjb250ZXh0LCBhcHAuc3RvcmUsIG51bGwpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbQVRUUl9ST1VURV1cblxuY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRcdFxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUztcblx0fVxuXHRcblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcblx0XHRyZXR1cm4gTk9ERU5BTUU7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5yZWFkeS50aGVuKCgpID0+IHtcblx0XHRcdHRoaXMucm9vdC5vbihbUk9VVEVfQ0xJQ0ssIEVWRU5UX1RPX1JPVVRFXSwgYXN5bmMgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMucm91dGUoeyByb3V0ZTogZXZlbnQudGFyZ2V0IH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdHRoaXMub24oYXR0cmlidXRlQ2hhbmdlRXZlbnRuYW1lKEFUVFJfUk9VVEUsIHRoaXMpLCAoKSA9PiB7XG5cdFx0XHRcdGlmKHRoaXMuaGFzQXR0cmlidXRlKEFUVFJfUk9VVEUpKVxuXHRcdFx0XHRcdHRoaXMucm91dGUoeyByb3V0ZTogdGhpcy5hdHRyKEFUVFJfUk9VVEUpIH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGlmKHRoaXMuaGFzQXR0cmlidXRlKEFUVFJfUk9VVEUpKVxuXHRcdFx0XHR0aGlzLnJvdXRlKHsgcm91dGU6IHRoaXMuYXR0cihBVFRSX1JPVVRFKSB9KTtcblx0XHR9KTtcblx0XHRcblx0fVxuXHRcblx0YXN5bmMgaW5pdCgpIHtcblx0XHRcblx0fVxuXG5cdGdldCByb290KCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgcm91dGVzKCkge1xuXHRcdHJldHVybiB0aGlzLnJvb3QuZmluZChSb3V0ZS5OT0RFTkFNRSk7XG5cdH1cblxuXHRhc3luYyByb3V0ZSh7IHJvdXRlLCByZWZyZXNoID0gbnVsbCwgY29udGV4dCA9IG51bGwgfSkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHJldHVybiB0aGlzLl9fcm91dGVfXztcblxuXHRcdGlmICh0eXBlb2Ygcm91dGUgPT09IFwic3RyaW5nXCIpIHJvdXRlID0gZmluZFJvdXRlKHRoaXMsIHJvdXRlKTtcblx0XHRpZiAocm91dGUgaW5zdGFuY2VvZiBSb3V0ZUxpbmspIHtcblx0XHRcdHJlZnJlc2ggPSByZWZyZXNoICE9IG51bGwgPyByZWZyZXNoIDogcm91dGUucmVmcmVzaDtcblx0XHRcdGlmIChjb250ZXh0ID09IG51bGwpIGNvbnRleHQgPSBhd2FpdCBidWlsZFJvdXRlQ29udGV4dChyb3V0ZS5jb250ZXh0LCB0aGlzKTtcblx0XHRcdHJvdXRlID0gZmluZFJvdXRlKHRoaXMsIHJvdXRlLnRhcmdldCk7XG5cdFx0fVxuXHRcdGlmICghKHJvdXRlIGluc3RhbmNlb2YgUm91dGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCByb3V0ZSB0eXBlIVwiKTtcblxuXHRcdGlmKHJlZnJlc2ggPT0gbnVsbCkgcmVmcmVzaCA9IGZhbHNlO1xuXG5cdFx0aWYgKCFyZWZyZXNoICYmIHRoaXMuX19yb3V0ZV9fID09IHJvdXRlKSByZXR1cm47XG5cblx0XHRpZiAoY29udGV4dCA9PSBudWxsKSBjb250ZXh0ID0gYXdhaXQgYnVpbGRSb3V0ZUNvbnRleHQocm91dGUuY29udGV4dCwgdGhpcyk7XG5cblx0XHRpZiAodGhpcy5fX3JvdXRlX18pIHRoaXMuX19yb3V0ZV9fLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdGF3YWl0IHRoaXMudmlldy5kaXNwbGF5KHsgcm91dGUsIGNvbnRleHQsIHJlZnJlc2ggfSk7XG5cdFx0dGhpcy5fX3JvdXRlX18gPSByb3V0ZTtcblx0XHRyb3V0ZS5hY3RpdmUgPSB0cnVlO1xuXHR9XG5cblx0Z2V0IHZpZXcoKSB7XG5cdFx0aWYgKCF0aGlzLl9fdmlld19fKSB7XG5cdFx0XHR0aGlzLl9fdmlld19fID0gZmluZENsb3Nlc3RJbkRlcHRoKHRoaXMucm9vdCwgKG5vZGUpID0+IHtcblx0XHRcdFx0cmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBWaWV3O1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9fdmlld19fLmFwcCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX192aWV3X187XG5cdH1cblxuXHRnZXQgc3RvcmUoKSB7XG5cdFx0aWYgKCF0aGlzLl9fc3RvcmVfXykgdGhpcy5fX3N0b3JlX18gPSB7fTtcblx0XHRyZXR1cm4gdGhpcy5fX3N0b3JlX187XG5cdH1cbn1cblxuZGVmaW5lKEFwcGxpY2F0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2F0aW9uO1xuIiwiZXhwb3J0IGNvbnN0IEFUVFJfTkFNRSA9IFwibmFtZVwiO1xuZXhwb3J0IGNvbnN0IEFUVFJfQUNUSVZFID0gXCJhY3RpdmVcIjtcbmV4cG9ydCBjb25zdCBBVFRSX1NUQVRFRlVMID0gXCJzdGF0ZWZ1bFwiO1xuZXhwb3J0IGNvbnN0IEFUVFJfQ09NUE9ORU5UX1RBRyA9IFwiY29tcG9uZW50LXRhZ1wiO1xuZXhwb3J0IGNvbnN0IEFUVFJfQ09NUE9ORU5UX1RBR19BVFRSSUJVVEVTID0gXCJjb21wb25lbnQtdGFnLWF0dHJpYnV0ZXNcIjtcbmV4cG9ydCBjb25zdCBBVFRSX0NPTlRFWFQgPSBcImNvbnRleHRcIjtcbmV4cG9ydCBjb25zdCBBVFRSX1JFRlJFU0ggPSBcInJlZnJlc2hcIjsiLCJpbXBvcnQgTk9ERU5BTUUgZnJvbSBcIi4vTm9kZW5hbWVcIjtcbmV4cG9ydCBjb25zdCBFVkVOVF9DTElDSyA9IE5PREVOQU1FICsgXCItY2xpY2tcIjtcbmV4cG9ydCBjb25zdCBFVkVOVF9BQ1RJVkFURSA9IE5PREVOQU1FICsgXCItYWN0aXZhdGVcIjtcbmV4cG9ydCBjb25zdCBFVkVOVF9ERUFDVElWQVRFID0gTk9ERU5BTUUgKyBcIi1kZWFjdGl2YXRlXCI7IiwiaW1wb3J0IHsgdG9Ob2RlTmFtZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9EZWZpbmVDb21wb25lbnRIZWxwZXJcIjtcbmV4cG9ydCBkZWZhdWx0IHRvTm9kZU5hbWUoXCJyb3V0ZVwiKTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy9Db21wb25lbnRcIjtcbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9EZWZpbmVDb21wb25lbnRIZWxwZXJcIjtcbmltcG9ydCB7IGxvYWRUZW1wbGF0ZSwgQVRUUl9URU1QTEFURSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9UZW1wbGF0ZUhlbHBlclwiO1xuaW1wb3J0IFJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyXCI7XG5pbXBvcnQgTk9ERU5BTUUgZnJvbSBcIi4vTm9kZW5hbWVcIjtcbmltcG9ydCB7IEVWRU5UX0NMSUNLLCBFVkVOVF9BQ1RJVkFURSwgRVZFTlRfREVBQ1RJVkFURSB9IGZyb20gXCIuL0V2ZW50c1wiO1xuaW1wb3J0IHsgQVRUUl9OQU1FLCBBVFRSX0FDVElWRSwgQVRUUl9DT01QT05FTlRfVEFHLCBBVFRSX0NPTVBPTkVOVF9UQUdfQVRUUklCVVRFUywgQVRUUl9TVEFURUZVTCwgQVRUUl9DT05URVhUIH0gZnJvbSBcIi4vQXR0cmlidXRlc1wiO1xuXG5jb25zdCBBVFRSSUJVVEVTID0gW0FUVFJfTkFNRSwgQVRUUl9URU1QTEFURSwgQVRUUl9DT01QT05FTlRfVEFHLCBBVFRSX0NPTVBPTkVOVF9UQUdfQVRUUklCVVRFUywgQVRUUl9TVEFURUZVTF07XG5jb25zdCBFVkVOVFMgPSBbRVZFTlRfQ0xJQ0ssIEVWRU5UX0FDVElWQVRFLCBFVkVOVF9ERUFDVElWQVRFXTtcbmNvbnN0IGdldFRhZ0F0dHJpYnV0ZXMgPSBhc3luYyAocm91dGUpID0+IHtcblx0Y29uc3QgYXR0cmlidXRlcyA9IHJvdXRlLmF0dHIoQVRUUl9DT01QT05FTlRfVEFHX0FUVFJJQlVURVMpIHx8IFwie31cIjtcblx0cmV0dXJuIFJlc29sdmVyLnJlc29sdmUoYXR0cmlidXRlcywge30sIHt9KTtcbn07XG5cbmNvbnN0IGJ1aWxkQ29tcG9uZW50ID0gYXN5bmMgKHJvdXRlKSA9PiB7XG5cdGlmIChyb3V0ZS5oYXNBdHRyaWJ1dGUoQVRUUl9URU1QTEFURSkpIHtcblx0XHRpZiAoIXJvdXRlLl9fdGVtcGxhdGVfXykgcm91dGUuX190ZW1wbGF0ZV9fID0gbG9hZFRlbXBsYXRlKHJvdXRlLCBudWxsKTtcblx0XHRyZXR1cm4gcm91dGUuX190ZW1wbGF0ZV9fO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHRhZyA9IHJvdXRlLmF0dHIoQVRUUl9DT01QT05FTlRfVEFHKTtcblx0XHRjb25zdCBjbGF6eiA9IGN1c3RvbUVsZW1lbnRzLmdldCh0YWcpO1xuXHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSBhd2FpdCBnZXRUYWdBdHRyaWJ1dGVzKHJvdXRlKTtcblxuXHRcdGNvbnN0IGVsZW1lbnQgPSBuZXcgY2xhenooKTtcblx0XHRmb3IgKGxldCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSBlbGVtZW50LmF0dHIoYXR0cmlidXRlLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cbn07XG5cbmNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVM7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xuXHRcdHJldHVybiBOT0RFTkFNRTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgRVZFTlRTKCkge1xuXHRcdHJldHVybiBFVkVOVFM7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRpZighdGhpcy5hY3RpdmUpXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihFVkVOVF9DTElDSyk7XG5cdFx0fSk7XG5cdH1cblxuXHRhc3luYyBpbml0KCkge31cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyKEFUVFJfTkFNRSk7XG5cdH1cblxuXHRnZXQgYWN0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShBVFRSX0FDVElWRSk7XG5cdH1cblxuXHRzZXQgYWN0aXZlKGFjdGl2ZSkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmFjdGl2ZTtcblx0XHRpZiAoYWN0aXZlICE9IGN1cnJlbnQpIHtcblx0XHRcdHRoaXMuYXR0cihBVFRSX0FDVElWRSwgYWN0aXZlID8gXCJcIiA6IG51bGwpO1xuXHRcdFx0aWYgKGFjdGl2ZSlcblx0XHRcdFx0dGhpcy50cmlnZ2VyKEVWRU5UX0FDVElWQVRFKTtcblx0XHRcdGVsc2UgXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihFVkVOVF9ERUFDVElWQVRFKTtcblx0XHR9XG5cdH1cblx0XG5cdGdldCBzdGF0ZWZ1bCgpIHtcblx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoQVRUUl9TVEFURUZVTCk7XG5cdH1cblxuXHRnZXQgY29udGV4dCgpe1xuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUl9DT05URVhUKTtcblx0fVx0XG5cdFxuXHRnZXQgcmVmcmVzaCgpe1xuXHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShBVFRSX1JFRlJFU0gpO1xuXHR9XG5cblx0YXN5bmMgY29tcG9uZW50KCkge1x0XHRcblx0XHRyZXR1cm4gYnVpbGRDb21wb25lbnQodGhpcyk7XG5cdH1cbn1cblxuZGVmaW5lKFJvdXRlKTtcbmV4cG9ydCBkZWZhdWx0IFJvdXRlO1xuIiwiZXhwb3J0IGNvbnN0IEFUVFJfVEFSR0VUID0gXCJ0YXJnZXRcIjtcbmV4cG9ydCBjb25zdCBBVFRSX0NPTlRFWFQgPSBcImNvbnRleHRcIjtcbmV4cG9ydCBjb25zdCBBVFRSX1JFRlJFU0ggPSBcInJlZnJlc2hcIjsiLCJpbXBvcnQgTk9ERU5BTUUgZnJvbSBcIi4vTm9kZW5hbWVcIjtcbmV4cG9ydCBjb25zdCBFVkVOVF9UT19ST1VURSA9IE5PREVOQU1FICsgXCItdG8tcm91dGVcIjsiLCJpbXBvcnQgeyB0b05vZGVOYW1lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL0RlZmluZUNvbXBvbmVudEhlbHBlclwiO1xuZXhwb3J0IGRlZmF1bHQgdG9Ob2RlTmFtZShcInJvdXRlLWxpbmtcIik7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvRGVmaW5lQ29tcG9uZW50SGVscGVyXCI7XG5pbXBvcnQgTk9ERU5BTUUgZnJvbSBcIi4vTm9kZW5hbWVcIjtcbmltcG9ydCB7IEVWRU5UX1RPX1JPVVRFIH0gZnJvbSBcIi4vRXZlbnRzXCI7XG5pbXBvcnQgeyBBVFRSX1RBUkdFVCwgQVRUUl9DT05URVhULCBBVFRSX1JFRlJFU0h9IGZyb20gXCIuL0F0dHJpYnV0ZXNcIjtcbmltcG9ydCB7fSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvTm9kZUhlbHBlclwiO1xuXG5jb25zdCBBVFRSSUJVVEVTID0gW0FUVFJfVEFSR0VULCBBVFRSX0NPTlRFWFRdO1xuXG5jb25zdCBFVkVOVFMgPSBbRVZFTlRfVE9fUk9VVEVdO1xuXG5jbGFzcyBSb3V0ZUxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUztcblx0fVxuXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FO1xuXHR9XG5cblx0c3RhdGljIGdldCBFVkVOVFMoKSB7XG5cdFx0cmV0dXJuIEVWRU5UUztcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMudHJpZ2dlcihFVkVOVF9UT19ST1VURSk7XG5cdFx0fSk7XG5cdH1cblxuXHRhc3luYyBpbml0KCkge31cblxuXHRnZXQgdGFyZ2V0KCkge1xuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUl9UQVJHRVQpO1xuXHR9XG5cdFxuXHRnZXQgY29udGV4dCgpe1xuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUl9DT05URVhUKTtcblx0fVxuXG5cdGdldCByZWZyZXNoKCl7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKEFUVFJfUkVGUkVTSCk7XG5cdH1cbn1cblxuZGVmaW5lKFJvdXRlTGluayk7XG5leHBvcnQgZGVmYXVsdCBSb3V0ZUxpbms7XG4iLCJpbXBvcnQgeyB0b05vZGVOYW1lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL0RlZmluZUNvbXBvbmVudEhlbHBlclwiO1xuZXhwb3J0IGRlZmF1bHQgdG9Ob2RlTmFtZShcInZpZXdcIik7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvRGVmaW5lQ29tcG9uZW50SGVscGVyXCI7XG5pbXBvcnQgTk9ERU5BTUUgZnJvbSBcIi4vTm9kZW5hbWVcIjtcbmltcG9ydCB7IFJlbmRlcmVyLCBUZW1wbGF0ZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2VcIjtcbmltcG9ydCBXZWFrRGF0YSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvV2Vha0RhdGFcIjtcblxuY29uc3QgUk9VVEVEQVRBID0gbmV3IFdlYWtEYXRhKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xuXHRcdHJldHVybiBOT0RFTkFNRTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgcm9vdCgpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldCBhcHAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX19hcHBfXztcblx0fVxuXG5cdHNldCBhcHAoYXBwKSB7XG5cdFx0dGhpcy5fX2FwcF9fID0gYXBwO1xuXHR9XG5cblx0YXN5bmMgZGlzcGxheSh7IHJvdXRlLCBjb250ZXh0LCB2aWV3LCByZWZyZXNoID0gZmFsc2UgfSkge1xuXHRcdGlmICh2aWV3KSB0aHJvdyBuZXcgRXJyb3IoXCJ5b3UgbXVzdCBvdmVycmlkZSB0aGUgZGlzcGxheSBmdW5jdGlvbiFcIik7XG5cblx0XHRjb25zdCB7IHJvb3QsIGFwcCB9ID0gdGhpcztcblx0XHRyb290LmVtcHR5KCk7XG5cblx0XHRsZXQgY29tcG9uZW50ID0gcm91dGUuc3RhdGVmdWwgPyBST1VURURBVEEudmFsdWUocm91dGUsIFwiY29tcG9uZW50XCIpIDogbnVsbDtcblx0XHRpZiAocmVmcmVzaCB8fCAhY29tcG9uZW50KSB7XG5cdFx0XHRjb21wb25lbnQgPSBhd2FpdCByb3V0ZS5jb21wb25lbnQoKTtcblx0XHRcdGlmIChjb21wb25lbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZSkge1xuXHRcdFx0XHRhd2FpdCBSZW5kZXJlci5yZW5kZXIoe1xuXHRcdFx0XHRcdGNvbnRhaW5lcjogcm9vdCxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHQkdmlldzogdGhpcyxcblx0XHRcdFx0XHRcdCRhcHA6IGFwcCxcblx0XHRcdFx0XHRcdCRzdG9yZTogYXBwLnN0b3JlLFxuXHRcdFx0XHRcdFx0JHJvdXRlOiByb3V0ZSxcblx0XHRcdFx0XHRcdCRjb250ZXh0OiBjb250ZXh0LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGVtcGxhdGU6IGNvbXBvbmVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbXBvbmVudCA9IE5vZGVMaXN0LmZyb20ocm9vdC5jaGlsZE5vZGVzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChjb21wb25lbnQgaW5zdGFuY2VvZiBWaWV3KSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LmFwcCA9IGFwcDtcblx0XHRcdFx0XHRhd2FpdCBjb21wb25lbnQuZGlzcGxheSh7IHJvdXRlLCBjb250ZXh0LCB2aWV3OiB0aGlzIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJvb3QuYXBwZW5kKGNvbXBvbmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyb3V0ZS5zdGF0ZWZ1bCkgUk9VVEVEQVRBLnZhbHVlKHJvdXRlLCBcImNvbXBvbmVudFwiLCBjb21wb25lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgVmlldykge1xuXHRcdFx0XHRjb21wb25lbnQuYXBwID0gYXBwO1xuXHRcdFx0XHRhd2FpdCBjb21wb25lbnQuZGlzcGxheSh7IHJvdXRlLCBjb250ZXh0LCB2aWV3OiB0aGlzIH0pO1xuXHRcdFx0fVxuXHRcdFx0cm9vdC5hcHBlbmQoY29tcG9uZW50KTtcblx0XHR9XG5cdH1cbn1cbmRlZmluZShWaWV3KTtcbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9