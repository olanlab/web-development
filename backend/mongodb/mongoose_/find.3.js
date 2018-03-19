var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

var User = require('./UserModel');
// --------------------------------------------------------------------------------
// sort
User.find().sort({firstname: -1}).exec((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find - sort|', data);        // Array
})
// limit
User.find().sort({firstname: -1}).limit(1).exec((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find - sort, limit|', data);        // Array
})
// skip
User.find().sort({firstname: -1}).limit(1).skip(1).exec((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find - sort, limit, skip|', data);        // Array
})

// select
User.find().sort({firstname: -1}).limit(1).skip(1).select({firstname: 1}).exec((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find - sort, limit, skip, select|', data);        // Array
})
