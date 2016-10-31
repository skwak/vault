var path = require("path");
module.exports = {


  // entry: {
  //   app: ["./src/jsx/index.jsx"],
  //
  // },
  loaders : [
     {
       entry: {
         app: ["./src/jsx/index.jsx"]
       },
       test : /\.jsx/,
       include : '/src/jsx/',
       loader : 'babel'
     }
   ],

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/js/",
    filename: "main.bundle.js"
  }
};
