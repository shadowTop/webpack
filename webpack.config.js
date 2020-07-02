var path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //缓存的意义，这里用webpack给她一个新的文件名，以后加载的时候改变文件名的文件才会重新加载，其他东西都保存在本地缓存文件中
    filename: '[name].[contenthash].js'
  }
};