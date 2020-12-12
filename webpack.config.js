const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/frontend/index.html',
  filename: './index.html',
});
module.exports = {
  entry: './src/frontend',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
        },
      },
    ],
  },
  plugins: [htmlPlugin],
}
