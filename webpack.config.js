const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    '1': './01-hello-world-and-jsx/main.js',
    '2': './02-create-a-custom-component/main.js',
    '3': './03-component-state/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'babel-preset-es2015',
              'babel-preset-react'
            ]
          }
        }
      }
    ]
  },
  devServer: {
    publicPath: '/dist/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // inject: true,
      template: 'src/index.ejs',
      chunks: ['1'],
      filename: '1.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      chunks: ['2'],
      filename: '2.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      chunks: ['3'],
      filename: '3.html'
    })
  ]
};
