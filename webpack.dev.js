/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: __dirname + '/demo/main.js',
  output: {
    filename: '[contenthash].js',
    path: __dirname + '/docs/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: __dirname + '/demo/index.html' })],
  devServer: {
    static: './demo'
  },
};
