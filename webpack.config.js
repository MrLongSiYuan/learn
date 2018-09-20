const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    plugins:[
        new htmlWebpackPlugin({
            title: 'learn page'
        }),
        new cleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    module:{
        rules:[
           {
               test:/\.css$/,
               use:[
                   'style-loader',
                   'css-loader'
               ]
           },
           {
               test:/\.(png|svg|jpg|gif)$/,
               use:[
                   'file-loader',
                   {
                       loader: 'image-webpack-loader',
                       options: {
                           mozjpeg: {
                               progressive: true,
                               quality: 65
                           },
                           optipng: {
                               enabled: false,
                           },
                           pngquant: {
                               quality: '65-90',
                               speed: 4
                           },
                           gifsicle: {
                               interlaced: false,
                           },
                           webp: {
                               quality: 75
                           }
                        }
                   }
               ]
           },
           {
               test:/\.xml$/,
               use:[
                   'xml-loader'
               ]
           }
        ]
    }
};