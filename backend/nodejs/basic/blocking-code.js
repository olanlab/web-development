var fs = require("fs");

console.log("------- Program Start -------");
var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("------- Program End -------");