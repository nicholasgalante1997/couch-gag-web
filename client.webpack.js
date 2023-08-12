const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const dotenv = require('dotenv');
const BundleStatsWebpackPlugin = require('bundle-stats-webpack-plugin').BundleStatsWebpackPlugin;
const { EnvironmentPlugin } = webpack;

dotenv.config();

function trim(file) {
  return file.split('.')[0];
}

function getEntryObject() {
  /** Load pages from /hydrate-mounts directory */
    const dirContents = fs.readdirSync(path.resolve(process.cwd(), 'src', 'mounts'), { encoding: 'utf-8' });
    if (dirContents.length < 1) {
        throw new Error('Could not read "hydrate-mounts" directory.')
    }

    /** Map files to entry objects */
    let entryObject = {};
    
    for (const file of dirContents) {
      entryObject[trim(file)] = path.resolve(process.cwd(), 'src', 'mounts', file);
    }

    return entryObject;
}

module.exports = {
    cache: false,
    mode: 'production',
    entry: getEntryObject(),
    target: ['web', 'es2017'],
    output: {
        clean: false,
        path: path.resolve(process.cwd(), 'build'),
        filename: '[name].bundle.js'
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
      new BundleStatsWebpackPlugin({ outDir: 'stats/webpack/client/bundles'})
    ],
};

/**
 * SECTION Related Links
 * https://webpack.js.org/guides/code-splitting/#dynamic-imports (Chunking output for optimization)
 * https://webpack.js.org/configuration/entry-context/#naming (Chunking shared deps in entry object)
 * https://web.dev/publish-modern-javascript/?utm_source=lighthouse&utm_medium=devtools
 */