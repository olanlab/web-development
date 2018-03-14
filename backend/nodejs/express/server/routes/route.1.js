var express = require("express");
var app = express();

app.get("/", (req, res) => {
	res.send("hello world!!!!");
});

// http://127.0.0.1:3000/users?userId=jame // Query Parameter
// http://127.0.0.1:3000/users/jame // URL Parameter
app.get("/users2/:userIdVIP", (req, res) => {
    res.send(req.params);
});

app.listen(3000, () => {
	console.log("Server listening on port 3000!");
});