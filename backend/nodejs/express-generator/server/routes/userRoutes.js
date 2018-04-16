var express = require('express');
var router = express.Router();
var User = require('../models/userModel');
var _ = require('lodash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().sort({created_date: -1}).exec((err, data) => {
    res.render('users', {users : data})
  })
});

router.post('/search', (req, res, next) => {
  var user = _.omitBy(req.body, _.isEmpty);
  User.find(user).exec((err, data) => {
    res.render('users', {users : data})
  })
});

router.get('/edit/:_id', (req, res, next) => {
  User.findById(req.params._id, (err, data) => {
    res.render('users', {user : data})
  })
});

router.post('/edit/:_id', (req, res, next) => {
  User.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    res.redirect('/users');
  })
});

router.post('/add', (req, res, next) => {
  var doc = new User(req.body);
  doc.save((err, data) => {
    res.redirect('/users');
  });
});

router.post('/delete/:_id', (req, res, next) => {
  console.log(req.params._id);
  User.findByIdAndRemove(req.params._id, (err, data) => {
    res.redirect('/users');
  })
})

module.exports = router;
