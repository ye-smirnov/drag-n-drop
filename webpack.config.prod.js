const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {app:'./src/app.ts'},
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: "only",
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  mode: 'production',
  plugin: [
    new CleanPlugin.CleanWebpackPlugin()
  ]

};