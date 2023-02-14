const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 4 Starter Project',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({filename: 'style.css'}),
        require('autoprefixer'),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/assets/images',
                    to: 'assets/images'
                }
            ]
        }),
        new CleanWebpackPlugin()


    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.js$|.ts$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/typescript']
                    }
                }
            },
            {
                test: /.css$|.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images'
                        }
                    }
                ]
            }
        ]
    }
};