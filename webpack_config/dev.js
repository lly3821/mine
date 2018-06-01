const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./common')
const { join } = require('path')

module.exports = merge(common,{
    mode:'development',
    devtool:'source-map',
    devServer:{
        host:'0.0.0.0',
        port:'3000',
        disableHostCheck:true,
        hot:true,
        historyApiFallback:true,
        contentBase: join(__dirname, '../'),
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
})