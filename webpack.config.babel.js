const path = require("path");
const webpack = require("webpack");
const resolve = function () {
  return path.resolve(this);
}
const p = function () {
  if (process.env.NODE_ENV == "production") return this;
}
module.exports = {
  entry: {
    index: [
      "./src/index.js"
    ]
  },
  devtool: "hidden-source-map"::p() || "inline-source-map",
  output: {
    path: "./target",
    publicPath: "/target/",
    filename: "[name].js"
  },
  resolve: {
    moduleDirectories: ["node_modules"],
    extensions: ["", ".js"]
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: "eslint-loader",
      exclude: [
        "./node_modules"::resolve()
      ]
    }],
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: [
        "./node_modules"::resolve()
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "'production'"
    })::p(),
    new webpack.optimize.DedupePlugin()::p(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })::p()
  ].filter((x) => x != null)
};