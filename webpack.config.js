const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode:'development',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }, 
    devtool: 'source-map',
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist'),
        },
        port:3000,
        open: true,
        hot: true,
        compress:true,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource'
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    // options: {
                    //     presets:['@bable/preset-env'],
                    // }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            chunks: ["index"],
            filename: "index.html"
        }),
        new CopyPlugin({
            patterns:[
                {
                    from:path.resolve(__dirname, "./src/assets/images"),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        })  
    ]
}