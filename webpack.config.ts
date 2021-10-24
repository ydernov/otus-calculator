import * as path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  // mode: 'production',
  target: "node",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|dist|coverage)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", "json"],
    fallback: { util: require.resolve("util/") },

    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    hot: true,
    static: {
      publicPath: path.resolve(__dirname, "dist"),
    },
  },
  stats: {
    errorDetails: true,
  },
};

export default config;
