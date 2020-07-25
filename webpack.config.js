const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports =  (env) => {
    const entryPath = env.mode === 'production' ? './src/index.js': './src/index.js';
    return {
        entry: entryPath,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].js'
        },
        module: {
            rules: [
                {
                    test: /\.js/,
                    use: 'babel-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new CleanWebpackPlugin()
        ],
        optimization: {
            minimizer: []
        },
        devServer: {
            port: 2000,
            hot: true
        },
        devtool: 'cheap-eval-source-map', // eval-cheap-module-source-map(original source[line only]), eval-source-map(original source)
        mode: 'development' // none, development[개발자가 편하게 webpack log 등이 추가됨], production
    }
}