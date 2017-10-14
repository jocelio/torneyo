const path = require('path'), webpack = require('webpack');
module.exports = {
    entry: {bundle: './resources/app/'},
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
                presets: ['es2015', 'react'],
                plugins: ["transform-object-rest-spread"]
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }]
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV','API_URL'])
    ]
}

