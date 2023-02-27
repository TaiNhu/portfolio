const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: path.resolve(__dirname, "../src/script.js"),
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "../dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "../src/index.html"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "assets/images",
						},
					},
				],
			},
		],
	},
};
