var fs = require("fs");

console.log("------- Program Start -------");
fs.readFile("input.txt", (err, data) => {
	if (err) return console.error(err);
	console.log(data.toString());
});
console.log("------- Program End -------");
