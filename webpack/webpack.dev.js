const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map', // create react app에서 추천하는 dev용 source map
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // hot load
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'), // 환경 변수 설정
    }),
  ],
}
