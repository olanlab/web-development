var express = require("express");
var app = express();

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/users/:userId", (req, res) => {
	res.send(req.params);
});

app.use(function(req, res, next) {
	var err = new Error("Page Not Found");
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(err.status).send(err.message);
});

app.listen(3000, () => {
	console.log("Server listening on port 3000!");
});
