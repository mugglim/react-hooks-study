const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 5500,
    hot: true,
    client: {
      overlay: true
    },
    devMiddleware: {
      writeToDisk: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(jpeg|jpg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({ filename: "app.css" })
  ]
};
