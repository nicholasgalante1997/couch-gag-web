const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const { EnvironmentPlugin } = webpack;

dotenv.config();

/** @type {webpack.Configuration} */
module.exports = {
  cache: false,
  entry: {
    'build-app': path.resolve(process.cwd(), 'src', 'static-site-gen', 'build-app.tsx'),
    'build-entry-points': path.resolve(process.cwd(), 'src', 'static-site-gen', 'build-dynamic-entrypoints.ts')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      handlebars: path.resolve(process.cwd(), 'node_modules', 'handlebars/dist/handlebars.min.js')
    }
  },
  output: {
    path: path.resolve(process.cwd(), '.build-process'),
    filename: '[name].js'
  },
  target: 'node',
  node: {
    global: false
  },
  plugins: [new EnvironmentPlugin({ ...process.env })]
};
