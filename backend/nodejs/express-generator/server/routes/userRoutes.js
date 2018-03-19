var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().exec((err, data) => {
    res.render('users', {users : data})
  })
});

module.exports = router;
