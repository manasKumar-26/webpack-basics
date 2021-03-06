// const path = require("path");
// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
// };
const HTML_WEBPACK_PLUGIN = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  plugins: [new HTML_WEBPACK_PLUGIN({ template: "./src/template.html" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], // Right >> Left -> SASS - CSS > CSS - JS > JS injected to DOM
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg | png |jpg | gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name][hash].[ext]",
            outputPath: (url, resourcePath) => {
              if (/subfolder/.test(resourcePath)) {
                return `images/subfolder/${url}`;
              }
              return `images/${url}`;
            },
          },
        },
      },
    ],
  },
};
