import GLOBAL from "@default-js/defaultjs-common-utils/src/Global";
import "@default-js/defaultjs-extdom";
import Application from "./src/Application";
import Route from "./src/Route";
import RouteLink from "./src/RouteLink";
import View from "./src/View";

GLOBAL.defaultjs = GLOBAL.defaultjs || {};
GLOBAL.defaultjs.app = GLOBAL.defaultjs.app || {};
GLOBAL.defaultjs.app.toolbox = GLOBAL.defaultjs.app.toolbox || {
	VERSION : "${version}",
    Application,
	View,
    Route,
    RouteLink
};

export {Application, Route, View, RouteLink };


