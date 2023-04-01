const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolvePath = (yourPath) => path.resolve(__dirname, yourPath);

const mode = process.env.NODE_ENV || 'development';

const entry = './src/index.js';

const output = {
  filename: 'main.[contenthash].js',
  path: resolvePath('dist'),
  clean: true,
};

const modules = {
  rules: [
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },
    {
      test: /\.(c|sc)ss$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
  ],
};

const plugins = [
  new HtmlWebpackPlugin({
    template: resolvePath('public/index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
];

const devServer = {
  compress: true,
  hot: true,
};

module.exports = { mode, entry, output, module: modules, plugins, devServer };
