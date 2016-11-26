const rootDir = __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: rootDir + '/browser/index.html',
  filename: 'index.html',
  inject: 'body',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
})

module.exports = {
  entry: [`./browser/render.js`],
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        include: `${rootDir}/browser`,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: `${rootDir}/dist`
  },
  plugins: [HTMLWebpackPluginConfig]
}
