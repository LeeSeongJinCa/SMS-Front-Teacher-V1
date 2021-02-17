const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: "ts-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(jpg|png|jpeg|bmp|gif|svg)?$/,
        loader: "file-loader"
      },
      {
        test: /\.css?$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new Dotenv({
      path: path.join(__dirname, "src/.env")
    }),
    new webpack.EnvironmentPlugin([
      "HOST_URL",
      "S3_URL",
      "VERSION",
      "HOST_URL",
      "NAVER_CLIENT_ID",
      "NAVER_CLIENT_SECRET",
      "SECURITY_BASE_PLAIN",
      "SECURITY_PASS_PHRASE"
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    inline: true,
    hot: true,
    historyApiFallback: true,
    host: "0.0.0.0"
  }
};
