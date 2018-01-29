var express = require("express");
var path = require("path");
var app = express();

app.use("/asset", express.static("public"));

app.get("/", (req, resp) => {
	resp.send("Hello world");
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});