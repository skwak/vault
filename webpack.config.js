// require('webpack');

var path = require('path');
module.exports = {
  entry: ['whatwg-fetch', './src/jsx/index.jsx'],
  output: {
      path: path.resolve(__dirname, 'build/js/'),
    filename: 'main.bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
