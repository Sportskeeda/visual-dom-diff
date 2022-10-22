const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = (env, argv) => {
    // const isDevServer = process.argv[1].indexOf('webpack-dev-server') >= 0;
    console.log(`This is the Webpack 'mode': ${argv.mode}`);
    const config = {
        entry: __dirname + '/demo/main.js',
        output: {
            filename: '[contenthash].js',
            path: __dirname + '/docs/',
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    loader: 'file-loader',
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + '/demo/index.html',
            }),
        ],
        devServer: {
            static: "./demo"
        },
        optimization: {
            runtimeChunk: 'single',
        },
    }

    if (argv.mode !== 'development') {
        config.plugins.push(new CleanWebpackPlugin())
    }
    return config;
}
