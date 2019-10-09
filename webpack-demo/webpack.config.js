const path = require('path');
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    hotOnly: true
  },
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'imgs/'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, 'postcss-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  }
}