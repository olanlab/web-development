var express = require("express");
var app = express();

// path| acd, abcd
app.get("/ab?cd", function(req, res) {
	res.send("ab?cd");
});

// path| abcd, abbcd, abbbcd
app.get("/ab+cd", function(req, res) {
	res.send("ab+cd");
});

// path| abcd, abxcd, abRANDOMcd, ab123cd
app.get("/ab*cd", function(req, res) {
	res.send("ab*cd");
});

// path| /abe, /abcde.
app.get("/ab(cd)?e", function(req, res) {
	res.send("ab(cd)?e");
});

app.listen(3000, () => {
	console.log("Server listening on port 3000!");
});
