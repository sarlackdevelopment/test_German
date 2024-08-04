const webpack = require('webpack');
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');

// Загружаем переменные окружения из .env файла
const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.d\.ts$/,
                type: 'asset/source'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MonacoWebpackPlugin({
            customTypeDefinitions: {
                react: 'node_modules/@types/react/index.d.ts'
            },
            languages: ['javascript', 'java', 'html', 'typescript'],
            features: ['!gotoSymbol']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/fav.svg'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/manifest.json', to: 'manifest.json' },
                { from: 'public/fav.svg', to: 'fav.svg' },
                { from: 'public/web.config', to: 'web.config' },
                { from: 'node_modules/@types/react/index.d.ts', to: 'path/to/@types/react/index.d.ts' }
            ]
        }),
        new webpack.DefinePlugin(envKeys)
    ],
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000
    }
};
