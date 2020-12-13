// eslint-disable-next-line no-undef
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/frontend/index.html',
  filename: './index.html',
});

// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/frontend',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [htmlPlugin],
}
