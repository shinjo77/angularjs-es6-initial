var webpack = require('webpack');
module.exports = {
    entry: {
      app: './src/app.js',
    },
    output: {
      filename: 'app.bundle.js',
      path: __dirname + '/dist'
    },
    module: {
        loaders: [
            { test: /\.scss$/, use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "sass-loader" // compiles Sass to CSS
              }] 
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
    }
  };  