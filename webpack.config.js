const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    // contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080,
    // contentBase: path.join(__dirname, './dist'),
    hot: true,
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
  path: path.resolve(__dirname, './dist'),
  filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/index.html'), // template file
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
