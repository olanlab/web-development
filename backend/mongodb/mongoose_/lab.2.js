// CONNECT
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

// Model
var User = require("./UserModel");
// UPDATE
// 1
// User.findByIdAndUpdate('5aae5759576c521358b7d8dc', {age: 20}, {new: false},(err, data) => {
//     if(err) console.log(err);
//     console.log('User.findByIdAndUpdate | ', data);
// })

// 2 
User.findOneAndUpdate({firstname: 'Seentttt'}, {age: 14}, {new: true, upsert: true}, (err, data) => {
    if(err) console.log(err);
    console.log('User.findOneAndUpdate | ', data);
});


