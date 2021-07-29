const path = require ('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '..', 'src', 'main', 'resources', 'public'),
        filename: 'index.js',
        publicPath: '/'
    },
    module: {
        rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true
    },
    watch: true
}