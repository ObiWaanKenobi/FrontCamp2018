const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: [
            './src/app.js',
            './src/styles/main.scss',
            './src/utils/testLoaderData.json',
        ],
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: `${__dirname}/dist/`,
        publicPath: 'dist/',
    },
    resolveLoader: {
        modules: ['node_modules', `${__dirname}/src/loaders`],
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['html-loader'],
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: ['omit-numbers-json-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: `${__dirname}/src/index.html`,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
        }),
    ],
};
