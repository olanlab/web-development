var express = require("express");
var app = express();

var mw = require("./my-middleware.js");
app.use(mw({ option1: "1", option2: "2" }));

app.get("/", function(req, res) {
	var responseText = "Hello World!<br>";
	res.send(responseText);
});

app.listen(3000);