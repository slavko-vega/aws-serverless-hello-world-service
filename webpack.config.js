const path = require('path');

module.exports = {
  target: "node",
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    libraryTarget: "commonjs",
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
};