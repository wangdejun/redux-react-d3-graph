var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'redux-graph-flow',
        template: './template/index.html',
    })],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
            }
          }
        ]
    },
    //webpack-dev-server
    devServer: {
        openPage: '/',
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        hot: true,
        compress: true,
        port: 9000,
    }
};


