var express = require("express");
var router = express.Router();

router.get("/", (req, resp) => {
	resp.send("user router .....");
});

router.get("/:userId", (req, resp) => {
	resp.send(req.params);
});

module.exports = router;