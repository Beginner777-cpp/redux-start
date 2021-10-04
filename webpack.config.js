const path = require("path");

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  devtool: "source-map",
  mode: "development"
};
