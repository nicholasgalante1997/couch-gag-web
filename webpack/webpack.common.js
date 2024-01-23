const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');

const { ProvidePlugin, EnvironmentPlugin } = webpack;

dotenv.config();

/** @type {webpack.Configuration} */
module.exports = {
  target: ['web', 'es6'],
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
        test: /\.(png|jpg|jpeg|webp)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      handlebars: path.resolve(process.cwd(), 'node_modules', 'handlebars/dist/handlebars.min.js')
    },
    fallback: {
      path: false,
      process: false,
      fs: false
    }
  },
  plugins: [new ProvidePlugin({ process: 'process/browser' }), new EnvironmentPlugin({ ...process.env })]
};
