var path = require('path')
var babelrc = JSON.parse(require('fs').readFileSync('.babelrc').toString())
var pkg = require('./package.json')

var webpack = require('webpack')
var ignore = [
    new webpack.IgnorePlugin(/react\/addons/),
    new webpack.IgnorePlugin(/react\/lib\/ReactContext/),
    new webpack.IgnorePlugin(/react\/lib\/ExecutionEnvironment/)
    ]

module.exports = {
    entry: pkg.main,
    output: { path: path.resolve(__dirname, 'dist'), filename: 'bundle.js' },
    devtool: 'source-map',
    stats: { colors: true },
    node: { fs: 'empty'},
    plugins: ignore,
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            query: babelrc
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    }
}
