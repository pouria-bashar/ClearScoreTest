const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/javascripts/index.js'],
    output: {
        path: path.join(__dirname, './build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader"
          },
    			{
    				test: /\.scss$/,
    				loaders: ["style-loader", "css-loader", "sass-loader"]
    			},
          {
            test: /\.png|\.jpg$/,
            loader: 'file-loader'
          },
          {
            test: /\.spec.js$/,
            loader: 'ignore-loader'
          }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.png', '.jpg'],
        root: [path.join(__dirname, './src')],
        modulesDirectories: [
          'node_modules'
        ]
    }
};
