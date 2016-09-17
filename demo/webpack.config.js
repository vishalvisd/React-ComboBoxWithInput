var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = [{
  cache: true,
  devtool: "inline-source-map",
  entry: {
    Load: "./Load.js"
  },
  babelrc: false,
  output: {
    path: "demo-dist",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]"
  },
  plugins: [
    new CopyWebpackPlugin([
      // {output}/file.txt
      {from: "index.html"}])
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      }, {
        test: /\.css$/,
        loaders: ["style", "css"]
      }
    ]
  }
}];
