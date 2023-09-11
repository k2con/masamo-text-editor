const path = require("path");
const fs = require("fs");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const TersePlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    "js/app": "./app/index.js",
  },
  target: "web",
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3040,
    hot: false,
    liveReload: true,
    static: {
      directory: "./assets",
      watch: true,
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TersePlugin({
        include: /\.min\.js$/,
      }),
    ],
    splitChunks: {
      chunks: "all",
      name: "common",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: "body",
      scriptLoading: "defer",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
  ],
  stats: {
    children: true,
    errorDetails: true,
  },
}
