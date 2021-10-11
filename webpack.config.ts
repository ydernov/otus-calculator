import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  // mode: 'production',
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "calc_bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

export default config;
