'use strict'
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const Components = require('../components.json')

const config = merge(baseConfig, {
	mode: 'production',
	entry: Components,
	output: {
		path: path.resolve(process.cwd(), './dist'),
		publicPath: '/dist/',
		filename: '[name].js',
		chunkFilename: '[id].js',
		libraryTarget: 'commonjs2'
	},
	externals: {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue'
		}
	}
})

module.exports = config
