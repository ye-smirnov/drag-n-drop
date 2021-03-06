const path = require('path');
module.exports = {
  entry: {app:'./src/app.ts'},
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
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
  mode: 'development'
};