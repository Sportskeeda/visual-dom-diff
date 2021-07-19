const path = require('path');
const webpack = require('webpack');

const config = {
  mode: 'production',
  target: 'web',
  entry: path.resolve(__dirname, 'lib', 'diff.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'domDiff',
    filename: 'visual-dom-diff.js',
    globalObject: 'this'
  }
};

module.exports = config;
