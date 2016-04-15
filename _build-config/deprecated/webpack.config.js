'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
  TODO: Keep `lodash` out of bundle
  Tried adding the below to externals but didn't work.
    'lodash': {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: '_',
      root: '_'
    }
*/

module.exports = {
  context: __dirname,

  debug: true,
  devtool: '#source-map',
  entry: './main.js',

  eslint: {
    failOnError: true
  },

  externals: [
    {
      'cartodb-client': 'cartodb-client',
      'd3': 'd3',
      'intro.js': 'intro.js',
      'leaflet': 'leaflet',
      'react': {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react'
      },
      'react-dom': {
        'commonjs': 'react-dom',
        'commonjs2': 'react-dom',
        'amd': 'react-dom',
        'root': 'ReactDOM'
      },
      'react-leaflet': 'react-leaflet',
      'topojson': 'topojson',
      'd3-queue': 'd3-queue'
    }
  ],

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['stage-0']
        },
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-advanced!sass-loader?sourceMap'),
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: 'json-loader' }
    ],
    preLoaders: [
      {
        test: /\.js[x]?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'components.js',
    library: '@',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('components.css', { allChunks: true })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['components', 'node_modules']
  },

  resolveLoader: {
    root: path.join(__dirname, '..', 'node_modules')
  }
};
