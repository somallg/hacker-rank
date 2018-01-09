module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  }
};
