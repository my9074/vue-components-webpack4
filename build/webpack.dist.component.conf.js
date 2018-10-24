'use strict'
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const Components = require('../components.json')
const config = require('./config')

const webpackConfig = merge(baseConfig, {
	mode: 'production',
	entry: Components,
	output: {
		path: path.resolve(process.cwd(), './dist'),
		publicPath: '/dist/',
		filename: '[name].js',
		chunkFilename: '[id].js',
		libraryTarget: 'commonjs2'
	},
	externals: config.externals
})

module.exports = webpackConfig
