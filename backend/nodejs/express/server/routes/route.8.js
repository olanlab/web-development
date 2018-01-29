var express = require("express");
var app = express();

// path| a
app.get(/a/, function(req, res) {
	res.send("/a/");
});

// path| butterfly, dragonfly
app.get(/.*fly$/, function(req, res) {
	res.send("/.*fly$/");
});

app.listen(3000, () => {
	console.log("Server listening on port 3000!");
});
