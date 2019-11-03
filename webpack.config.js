const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  "mode": "development",
  "entry": "./src/js/index.js",
  "output": {
      "path": __dirname+'/dist',
      "filename": "[name].[chunkhash:8].js"
  },
  "devServer": {
       contentBase: './dist',
  },
  "plugins": [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    })
  ],
  "module": {
      "rules": [
          {
              "enforce": "pre",
              "test": /\.(js|jsx)$/,
              "exclude": /node_modules/,
              "use": "eslint-loader"
          },
          {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                  plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
              }
          },
          {
              "test": /\.scss$/,
              "use": [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
              ]
          },
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src']
              }
            }
          }
      ]
  }
}