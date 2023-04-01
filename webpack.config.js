const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolvePath = (yourPath) => path.resolve(__dirname, yourPath);

const mode = 'development';
const entry = './src/index.js';

const output = {
  filename: 'bundle.js',
  path: resolvePath('dist'),
  publicPath: '/dist',
};

const modules = {
  rules: [
    {
      test: /\.s?css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
  ],
};

const plugins = [
  new HtmlWebpackPlugin({
    template: resolvePath('public/index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  })
];

const devServer = {
  compress: true,
  hot: true,
};

module.exports = { mode, entry, output, module: modules, plugins, devServer };
