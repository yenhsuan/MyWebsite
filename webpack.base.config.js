const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: [
    path.join(__dirname, './src/main.js'),
  ],
  output: {
    filename: 'js/bundle.[hash].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, './node_modules'),
        ],
      },
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: [
          path.join(__dirname, './node_modules'),
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('postcss-preset-env')(),
                require('postcss-reporter')({ clearReportedMessages: true }),
              ]
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]',
        options: {
          name: 'assets/[name].[ext]',
        },
      },
      { 
        test: /\.html$/,
        loader: 'html-loader',
        exclude: [
          path.join(__dirname, './node_modules'),
        ],
        options: {
          interpolate: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      // favicon: path.join(__dirname, './public/favicon/favicon.ico'),
      minify: {
        collapseWhitespace: process.env.NODE_ENV === 'production',
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.[hash].css",
    }),
  ],
};

module.exports = config;
