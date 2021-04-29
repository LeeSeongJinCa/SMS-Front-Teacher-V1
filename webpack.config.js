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
    filename: "[name].bundle.min.js",
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
        loader: "file-loader",
        options: {
          name: "assets/[name].[hash:8].[ext]"
        }
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
      template: "./public/index.html",
      favicon: "./src/assets/favicon.ico"
    }),
    new Dotenv({
      path: path.join(__dirname, "src/.env")
    }),
    new webpack.EnvironmentPlugin({
      HOST_URL: JSON.stringify(process.env.HOST_URL || "HOST_URL"),
      S3_URL: JSON.stringify(process.env.S3_URL || "S3_URL"),
      VERSION: JSON.stringify(process.env.VERSION || "VERSION"),
      HOST_URL: JSON.stringify(process.env.HOST_URL || "HOST_URL"),
      NAVER_CLIENT_ID: JSON.stringify(
        process.env.NAVER_CLIENT_ID || "NAVER_CLIENT_ID"
      ),
      NAVER_CLIENT_SECRET: JSON.stringify(
        process.env.NAVER_CLIENT_SECRET || "NAVER_CLIENT_SECRET"
      ),
      SECURITY_BASE_PLAIN: JSON.stringify(
        process.env.SECURITY_BASE_PLAIN || "SECURITY_BASE_PLAIN"
      ),
      SECURITY_PASS_PHRASE: JSON.stringify(
        process.env.SECURITY_PASS_PHRASE || "SECURITY_PASS_PHRASE"
      ),
      CHANNEL_PLUGIN_KEY: JSON.stringify(
        process.env.CHANNEL_PLUGIN_KEY || "CHANNEL_PLUGIN_KEY"
      )
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    inline: true,
    hot: true,
    historyApiFallback: true,
    host: "0.0.0.0"
  }
};
