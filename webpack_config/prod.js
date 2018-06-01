const merge = require('webpack-merge')
const common = require('./common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {resolve} = require('path')

const rootPath = resolve(__dirname,'../')

module.exports = merge(common,{
    mode:'production',
    devtool:'nosources-source-map',
    plugins:[
        new CleanWebpackPlugin(['dist/'],{
            root:rootPath,
        })
    ]
})