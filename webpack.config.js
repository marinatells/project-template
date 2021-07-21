import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const dirname = process.cwd();
const jsEntry = path.join(dirname, './app/index.jsx');
const staticPath = path.join(dirname, './static');
const htmlEntry = path.join(dirname, './app/index.html');
const favicon = path.join(dirname, './app/assets/favicon.png');

export default {
	mode: 'development',
	entry: jsEntry,
	output: {
		path: staticPath,
		filename: 'index.js',
	},

	devtool: 'eval-source-map',

	devServer: {
		port: 3001,
		hot: true,
		liveReload: true,
		open: true,
		historyApiFallback: {
			verbose: true,
		},
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: htmlEntry,
			favicon,
		}),
	],

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
		],
	},

	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
};
