'use strict'
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.runtime.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: resolve('node_modules')
			},
			{
				test: /\.css$/,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'vue-style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: path.posix.join('./', 'image/[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					publicPath: '../',
					name: path.posix.join('./', './css/fonts/[name].[hash:7].[ext]'),
					limit: 10000
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
	node: {
		setImmediate: false,
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
}
