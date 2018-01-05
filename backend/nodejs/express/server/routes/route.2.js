var express = require("express");
var app = express();

app.get("/example/a", (req, res) => {
	res.send("Hello from A!");
});
// ----------------------------------------------------------------------------
app.get("/example/b", (req, res, next) => {
		console.log("the response will be sent by the next function ...");
		next();
	}, (req, res) => {
		res.send("Hello from B!");
	}
);
// ----------------------------------------------------------------------------
var cb0 = (req, res, next) => {
	console.log("CB0");
	next();
};
var cb1 = (req, res, next) => {
	console.log("CB1");
	next();
};
var cb2 = (req, res) => {
	res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);
// ----------------------------------------------------------------------------
app.get("/example/d", [cb0, cb1], (req, res, next) => {
		console.log("the response will be sent by the next function ...");
		next();
	}, (req, res) => {
		res.send("Hello from D!");
	}
);
// ----------------------------------------------------------------------------
app.listen(3000, function() {
	console.log("Server listening on port 3000!");
});