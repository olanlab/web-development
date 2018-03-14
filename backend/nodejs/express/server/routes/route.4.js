var express = require("express");
var app = express();

var users = require('./users');
app.use('/', users);

app.listen(3000, () => {
    console.log("Server listening on port 3000!");
})