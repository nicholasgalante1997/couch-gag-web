import { config } from 'dotenv';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';

import sharedWebpackConfig from './webpack.common';

config();

/** @type {import('webpack').Configuration} */
const devWebpackConfig = {
  cache: {
    type: 'memory'
  },
  mode: 'development',
  entry: resolve(process.cwd(), 'src', 'dev-server', 'index.tsx'),
  devServer: {
    hot: true,
    port: 3000,
    https: false,
    open: true,
    static: [
      {
        directory: resolve(process.cwd(), 'src', 'styles')
      },
      {
        directory: resolve(process.cwd(), 'assets')
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: 'html/dev.html' })]
};

export default merge(sharedWebpackConfig, devWebpackConfig);
