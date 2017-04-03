// var Handlebars = require("handlebars");
// var fs = require('fs');
//
// var source = fs.readFileSync(__dirname + "../templates/index.hbs")
// var template = Handlebars.compile(source.toString());
// //
// function sayHello(){
//   var obj = {
//     title:"Hello World",
//     post: "A bit of info about FAC!"
//   }

// }
const reverse = (string) => {
  return string.split("").reverse().join("");
}


module.exports = (message) => {
  return reverse(message)
}
