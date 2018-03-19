// CONNECT
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

// Model
var User = require("./UserModel");
// FIND
// 1 
// User.findById('5aae9915bbe9b8840dea705b', (err, data) => {
//     if(err) console.log(err);
//     console.log('User.findById | ' , data);
// })

// 2
// User.findOne({$or : [{status : "active"}, {status : "pending"}]}, (err, data) => {
//     if(err) console.log(err);
//     console.log('User.findOne | ' , data);
// })

// 3 
// User.find
// User.find({}, (err, data) => {
//     if(err) console.log(err);
//     console.log('User.findOne | ' , data);
// })
User.find().where('age').in([33, 19]).exec((err, data) => {
    if(err) console.log(err);
    console.log(data);
});