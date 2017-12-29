var express = require("express");
var path = require("path");
var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, resp) => {
	resp.render("index", { title: "Hey OlanLab", message: "Hello there!" });
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});