const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve,join} = require('path')

const rootPath = resolve(__dirname,'../')
module.exports = {
    entry:{
        index:join(rootPath,'src/index.js')
    },
    output:{
        filename:'[name].bundle.js',
        path:join(rootPath,'dist'),
        publicPath:'/'
    },
    resolve:{
        alias:{
            components:join(rootPath,'src/components'),
            views:join(rootPath,'src/view'),
            assets:join(rootPath,'src/assets')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'mine',
            template:join(rootPath,'index.html')
        })
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:/node_modules/,
                include:/src/,
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader'],
            }
        ]
    }

}