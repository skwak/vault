var path = require("path");
module.exports = {
  entry: {
    app: ["./src/js/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/bin/js/",
    filename: "main.bundle.js"
  }
};
