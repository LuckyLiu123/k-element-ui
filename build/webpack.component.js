const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
const components = require("./components.json");
process.env.NODE_ENV = "production";

// 为了能支持按需加载的功能，我们除了将整个组件库打包之外，还需要对样式和组件单独打包成单个的文件。
const basePath = path.resolve(__dirname, "../");
let entries = {};
Object.keys(components).forEach((key) => {
  entries[key] = path.join(basePath, "src", components[key]);
});

module.exports = merge(webpackBaseConfig, {
  devtool: "source-map",
  mode: "production",
  entry: entries,
  output: {
    path: path.resolve(__dirname, "../lib"),
    publicPath: "/lib/",
    filename: "[name].js",
    chunkFilename: "[id].js",
    // library: 'lime-ui',
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
    }),
  ],
});
