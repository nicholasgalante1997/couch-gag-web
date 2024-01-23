const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const sharedWebpackConfig = require('./webpack.common');
const { getEntryObject } = require('./utils');

dotenv.config();

/** @type {webpack.Configuration} */
const prodWebpackConfig = {
  cache: false,
  mode: 'production',
  entry: getEntryObject(),
  output: {
    clean: false,
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].bundle.js'
  }
};

module.exports = merge(sharedWebpackConfig, prodWebpackConfig);
