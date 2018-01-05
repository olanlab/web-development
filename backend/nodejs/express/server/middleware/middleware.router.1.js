const express = require("express");
var path = require("path");
var app = express();
var router = express.Router();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

router.use(function(req, res, next) {
	console.log("Time:", Date.now());
	next();
});

router.use("/user/:id", function(req, res, next) {
		console.log("Request URL:", req.originalUrl);
		next();
	}, function(req, res, next) {
		console.log("Request Type:", req.method);
		next();
	}
);

router.get("/user/:id", function(req, res, next) {
		if (req.params.id === "0") {
			console.log('Get|', 'req.params.id === 0');
			next("route");
		} else { 
			console.log('Get|', 'req.params.id ');
			next();
		}
	}, function(req, res, next) {
		res.render("regular");
	}
);

router.get("/user/:id", function(req, res, next) {
	console.log("id", req.params.id);
	// res.render("special");
	res.send("user id : " + req.params.id);
});

app.use("/", router);

app.use(function(err, req, res, next) {
	console.log(err.stack);
	res.status(500).send("Something broke!");
});

app.listen(3000);