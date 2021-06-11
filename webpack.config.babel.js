import path from 'path'
import webpack from 'webpack'
export default ({
  entry: ['webpack-hot-middleware/client?noInfo=true&reload=true&timeout=100', './static/ES6_10/index.js'],
  output: {
    path: path.join(__dirname, '/static/'),
    filename: 'index.min.js'
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
