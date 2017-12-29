var express = require("express");
var app = express();

var requestTime = function(req, res, next) {
	req.requestTime = Date.now();
	next();
};

app.use(requestTime);

var mw = require("./my-middleware.js");
app.use(mw({ option1: "1", option2: "2" }));

app.get("/", function(req, res) {
	var responseText = "Hello World!<br>";
	responseText += "<small>Requested at: " + req.requestTime + "</small>";
	res.send(responseText);
});

app.listen(3000);
