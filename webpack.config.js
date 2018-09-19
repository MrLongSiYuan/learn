const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            title: 'Output Management'
        }),
        new cleanWebpackPlugin(['dist'])
    ],
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
                   'file-loader'
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