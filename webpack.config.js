const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: [
            './src/app.js',
            './src/styles/main.scss',
        ],
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: `${__dirname}/dist/`,
        publicPath: 'dist/',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: ['eslint-loader'],
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/index.html`,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
        }),
    ],
};
