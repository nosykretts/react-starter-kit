const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
let port = 3000
module.exports = merge(common, {
  devtool : 'inline-source-map',
  entry: {
    app : [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${port}`,
      // budle the client for webpack-dev-server
      // and connect to the provided endpoint
      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only means to only hot reload for successful updates
      './src/index.js'
    ]
  },
  devServer: {
    hot: true,
    contentBase: './dist',
    disableHostCheck: true,
    port: port,
    host: '0.0.0.0',
    publicPath: '/'
  },
  plugins : [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

})