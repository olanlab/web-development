var express = require("express");
var app = express();

var myLogger = function(req, res, next) {
	console.log("myLogger| Time:", Date.now());
	next();
};

app.use(myLogger);

app.get("/", function(req, res) {
	res.send("Hello World!");
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});