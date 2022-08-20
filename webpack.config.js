const path = require("path");
const { merge } = require("webpack-merge");
const project = require("./package.json");
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const entries = require("./entries.config.json");

module.exports = (env, argv) => {
	const devMode = argv.mode != "production";
	const target = argv.target ? argv.target : "dist";
	const serve = env.WEBPACK_SERVE;

	const config = {
		entry: entries,
		target: "web",
		mode: devMode ? "development" : "production",
		optimization: {
			minimize: !devMode,
			usedExports: false,
		},
		devtool: devMode ? "inline-source-map" : "source-map",
		output: {
			filename: devMode ? `[name]-${project.buildname}.js` : `[name]-${project.buildname}.min.js`,
			path: path.resolve(__dirname, target),
		},
		plugins: (() => {
			return [
				new ReplaceInFileWebpackPlugin([
					{
						dir: "dist",
						test: [/\.js$/],
						rules: [
							{
								search: /\$\{version\}/gi,
								replace: project.version,
							},
						],
					},
				]),
				new CopyPlugin({
					patterns: [{ from: "./src/css", to: `css` }],
				}),
			];
		})(),
	};

	if (serve) {
		config.devServer = {
			open: true,
			allowedHosts: "all",
			client: {
				overlay: true,
				progress: true,
				reconnect: true,
			},
			devMiddleware: {
				index: true,
				writeToDisk: false,
			},
			static: ["./webcontent", "./src/css"],
			watchFiles: { paths: ["src/**/*", "./webcontent"] },
		};

		config.entry["dev"] = "./webcontent/index.js"

	}

	return config;
};
