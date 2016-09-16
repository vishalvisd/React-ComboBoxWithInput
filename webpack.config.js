module.exports = [{
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: "dist",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]"
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
}]