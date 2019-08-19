/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const os = require('os')
const webpack = require('webpack')
const HappyPack = require('happypack')

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const buildPath = path.join(__dirname, './build')
const env = process.env.NODE_ENV || 'development'

module.exports = {
  mode: env,
  context: __dirname,
  entry: {
    app: ['./index.jsx']
  },
  output: {
    pathinfo: false,
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  resolveLoader: {
    modules: [path.join(__dirname, '../node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
      loaders: ['babel-loader?cacheDirectory=true'],
      verbose: false,
      verboseWhenProfiling: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env) })
  ]
}
