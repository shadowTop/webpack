var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/assets/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //缓存的意义，这里用webpack给她一个新的文件名，以后加载的时候改变文件名的文件才会重新加载，其他东西都保存在本地缓存文件中
    filename: '[name].[contenthash].js'
  },
  devServer: {
    contentBase: './dist'
    },
  plugins: [new HtmlWebpackPlugin({
      title:'毛宁',
      template: 'src/assets/test.html'
    
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};