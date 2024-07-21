const path = require('path');

const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const dotenv = require('dotenv');
const { EnvironmentPlugin } = webpack;

dotenv.config();

/** @type {webpack.Configuration} */
module.exports = {
  mode: 'production',
  cache: false,
  entry: {
    'build-app': path.resolve(process.cwd(), 'src', 'static-site-gen', 'build-app.tsx'),
    'sleepy': path.resolve(process.cwd(), 'src', 'static-site-gen', 'sleepy.tsx')
  },
  output: {
    clean: true,
    path: path.resolve(process.cwd(), '.build-process'),
    filename: '[name].js'
  },
  target: 'node',
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  node: {
    global: false
  },
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
  plugins: [new EnvironmentPlugin({ ...process.env })]
};
