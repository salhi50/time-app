const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/**
 * @type import("webpack").Configuration
 */

const config = {
  entry: "./src/index.tsx",
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve("dist", "js"),
    clean: true,
    assetModuleFilename: "../[name][ext]"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/template.html",
      filename: "../index.html"
    })
  ],
  module: {
    rules: [
      {test: /\.tsx?$/, use: "babel-loader"},
      {test: /\.(svg|png)$/, type: "asset/resource"},
      {test: /\.css?$/, use: "empty-loader"},
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "async",
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](classnames|fscreen|react(-dom)?|react-router(-dom)?|scheduler|@remix-run[\\/]router)[\\/]/,
          name: "vendors",
          chunks: "initial",
        }
      }
    }
  }
}

module.exports = config;