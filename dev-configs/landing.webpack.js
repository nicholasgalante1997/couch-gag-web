const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = webpack;

dotenv.config();

module.exports = {
    cache: false,
    mode: 'development',
    entry: path.resolve(process.cwd(), 'src', 'dev', 'landing.tsx'),
    target: ['web', 'es2017'],
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
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                }

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      alias: {
        "@": path.resolve(process.cwd(), "src"),
        handlebars: path.resolve(process.cwd(), 'node_modules', 'handlebars/dist/handlebars.min.js'),
      },
      fallback: {
        path: false,
        process: false,
        fs: false
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new EnvironmentPlugin({ ...process.env }),
      new HtmlWebpackPlugin({ template: 'html/dev.html' })
    ],
};

/**
 * SECTION Related Links
 * https://webpack.js.org/guides/code-splitting/#dynamic-imports (Chunking output for optimization)
 * https://webpack.js.org/configuration/entry-context/#naming (Chunking shared deps in entry object)
 * https://web.dev/publish-modern-javascript/?utm_source=lighthouse&utm_medium=devtools
 */