const glob = require("glob");
const path = require("path");

entries = {};
entries["module-bundle"] ="./module-bundle.js";
entries["browser-bundle"] = "./index.js";


console.log("entries", entries);

module.exports = {
	entry: entries,
	resolve: {
		alias: {
			"@src": path.resolve(__dirname + "/src"),
			"@test": path.resolve(__dirname + "/test"),
			"@modules": path.resolve(__dirname + "/node_modules"),
		},
	},
	target: "web",
};
