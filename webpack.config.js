const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // make .html file

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },

  devserver: {
    contentBase: "./build",
    colors: true,
    historyApiFallback: true,
    inline: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.ejs'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,      //regex for file extensions
        include: PATHS.app, //look in this folder
        loader: 'babel-loader' //loader to be used
      },
      {
        test: /\.css$/,
        include: PATHS.app,
        loader: 'style!css?modules' //use ! to chain loaders to the same file types. Here: use css and style loaders for .css files; ?modules - allow use css modules
      }
    ]
  }
};

module.exports = config;
