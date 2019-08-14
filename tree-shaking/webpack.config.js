/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const os = require('os')
const webpack = require('webpack')
const HappyPack = require('happypack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const buildPath = path.join(__dirname, './build')

module.exports = {
  mode: 'production',
  context: __dirname,
  stats: 'verbose',
  entry: {
    app: ['./index.js']
  },
  output: {
    pathinfo: false,
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  resolveLoader: {
    modules: [path.join(__dirname, '../node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'happypack/loader',
        options: {
          id: 'js'
        }
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader'],
      verbose: false,
      verboseWhenProfiling: false
    }),
    new CleanWebpackPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
