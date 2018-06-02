const path = require('path');

module.exports = {
  mode: "development",
  entry: "./js/app.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', { 'modules': false }],
                'react'
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader'
      }
    ]
  }
}
