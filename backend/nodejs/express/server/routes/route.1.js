var express = require("express");
var app = express();

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/users/:userId", (req, res) => {
    res.send(req.params);
});

app.listen(3000, () => {
	console.log("Server listening on port 3000!");
});