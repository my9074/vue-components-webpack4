'use strict'
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = merge(baseConfig, {
	mode: 'production',
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: 'sk-element.min.js',
		library: {
			root: 'SKElement',
			commonjs: 'sk-element'
		},
		libraryTarget: 'umd'
	},
	externals: {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue'
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
})

module.exports = config
