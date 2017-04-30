/*
    ./webpack.config.js
*/
// Basically, to get a running instance of webpack we need to specify an entry point and an output.
// entry: Specifies the entry file where the bundler starts the bundling process.
// output: Specifies the location where the bundled Javascript code is to be saved.

// loaders: These are needed because we want the browser we use to be able to interprate and run JSX code (for React) and code written in ES6
// loaders: They are transformations that are applied on a file in our app.
// if you had separate style sheets in your project you'd require a CSS loader.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]  
}
