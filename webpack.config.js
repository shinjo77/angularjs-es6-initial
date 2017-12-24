var webpack = require('webpack');
module.exports = {
    entry: {
      app: './src/app.js',
    },
    output: {
      filename: 'app.bundle.js',
      path: __dirname + '/dist'
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default'],
          Util: "exports-loader?Util!bootstrap/js/dist/util",
          Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
        })
    ],
    node: {
      fs: 'empty',
      child_process: 'empty'
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['@babel/preset-env']
                }
            },{
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/
            },{
                test: /\.(scss)$/,
                loader: 'style-loader!css-loader!sass-loader'
            },{
                test: /\.(png|jpeg|jpg|gif)$/,
                loaders: 'url-loader',
                options: {
                  limit: 20000
                }
            }
        
        ]
    }
  };  