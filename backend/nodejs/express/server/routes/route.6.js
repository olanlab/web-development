var express = require("express");
var app = express();

app.get("/users/:userId/books/:bookId", function(req, res) {
	res.send(req.params);
});

app.listen(3000, () => {
	console.log("Server listening on port 3000!");
});
