var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require("webpack-livereload-plugin");
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
    new ExtractTextPlugin("Load.css", {
      allChunks: true
    }),
    new LiveReloadPlugin({
      port: 36101
    }),
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
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      }, {
        test: /\.css$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract("style",
          "css?modules&importLoaders=1&localIdentName=RCDemo_[name]__[local]")
      }, {
        test: /\.css$/,
        include: [/node_modules/],
        loaders: ["style", "css"]
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/svg+xml"
      }, {
        test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/gif"
      }, {
        test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/png"
      }
    ]
  }
}];
