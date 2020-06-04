const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
   var CONFIG = { 
        entry: './src/app.js',
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'public')
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }]
        },
        devServer:{
            contentBase: path.join(__dirname, 'public')
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
        ]
    }
    switch (env) {
        case 'development':
            CONFIG.mode = env;
            CONFIG.output.publicPath = 'localhost:8080';
        break;
        case 'production':
            CONFIG.mode = env;
            CONFIG.output.publicPath = 'localhost:8080';
        break;
    };
return CONFIG;
}
