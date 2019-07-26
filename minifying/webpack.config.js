/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const os = require('os')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const buildPath = path.join(__dirname, './build')

module.exports = {
  mode: 'production',
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
      },
      {
        test: /\.tpl$/,
        loader: 'dot-tpl-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=true'
      },
      {
        oneOf: [
          {
            test: /\.(png|gif|jpg|jpeg|svg|woff|ttf|eot)$/,
            resourceQuery: /\?.*/,
            loader: 'url-loader'
          },
          {
            test: /\.(png|gif|jpg|jpeg|svg|woff|ttf|eot)$/,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(less|css)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: false,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /\/(react|react-dom)\//,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  plugins: [
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory=true'],
      verbose: false,
      verboseWhenProfiling: false
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './index.html',
      chunksSortMode: 'none'
    })
  ]
}
