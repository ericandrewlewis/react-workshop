const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index': './index/main.js',
    '1': './01-es6-fundamentals/main.js',
    '2': './02-hello-world-and-jsx/main.js',
    '3': './03-create-a-custom-component/main.js',
    '4': './04-component-state/main.js',
    '5': './05-component-props/main.js',
    '6': './06-event-handlers/main.js',
    '7': './07-lifting-state/main.js'
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
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // inject: true,
      template: 'src/index.ejs',
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      // inject: true,
      template: 'src/index.ejs',
      chunks: ['1'],
      filename: '1.html'
    }),
    new HtmlWebpackPlugin({
      // inject: true,
      template: 'src/index.ejs',
      chunks: ['2'],
      filename: '2.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      chunks: ['3'],
      filename: '3.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      chunks: ['4'],
      filename: '4.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      chunks: ['5'],
      filename: '5.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      chunks: ['6'],
      filename: '6.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      chunks: ['7'],
      filename: '7.html'
    })
  ]
};
