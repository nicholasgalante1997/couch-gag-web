const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const sharedWebpackConfig = require('./webpack.common');

dotenv.config();

/** @type {import('webpack').Configuration} */
const devWebpackConfig = {
    cache: {
        type: 'memory'
    },
    mode: 'development',
    entry: path.resolve(process.cwd(), 'src', 'dev-server', 'index.tsx'),
    devServer: {
        hot: true,
        port: 3000,
        https: false,
        open: true,
        static: [
            {
                directory: path.resolve(process.cwd(), 'src', 'styles')
            },
            {
                directory: path.resolve(process.cwd(), 'assets')
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'html/dev.html' })
    ],
};

module.exports = merge(sharedWebpackConfig, devWebpackConfig)
