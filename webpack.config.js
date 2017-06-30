const path = require('path');
module.exports = {
    entry: {bundle: './resources/app/', 'bundle-login':'./resources/login/'},
    output: {
        path: path.resolve(__dirname, './public'),
        filename: "[name].js"
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    }
    ,module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }]
    }
}

