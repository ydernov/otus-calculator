import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  // mode: 'production',
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
    extensions: [".ts"],
  },
  output: {
    filename: "calc_bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

export default config;
