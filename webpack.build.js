/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = [
    {
        entry: __dirname + '/lib/module/index.js',
        output: {
            filename: 'visual-dom-diff.js',
            path: __dirname + '/lib/umd/',
            library: 'domDiff',
            libraryTarget: 'umd',
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
        optimization: {
            minimize: true,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        format: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
            ],
        }
    },
    {
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
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + '/demo/index.html'
            }),
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
                patterns: [{
                    from: __dirname + "/demo/*.jpg", to: __dirname + "/docs/[name][ext]"
                }]
            })
        ],
        devServer: {
            static: './demo'
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        format: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
            ],
        }
    }
];
