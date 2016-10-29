var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', './src']
  },
  module: {
    loaders: [
      {
        test: /src\/.*\.jsx?$/,
        loaders: process.env.DEVELOPMENT ? ['react-hot', 'babel'] : ['babel'],
        exclude: /node_modules/
      },
      {
          test: /src\/.*\.scss$/,
          loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url-loader?limit=100000',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(otf|eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
};
