var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

var User = require('./UserModel');
// --------------------------------------------------------------------------------
// where, gt - greater than
User.find().where('age').gt(20).exec((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find - age greater than |', data);        // Array
})

// where, lt - less than
User.find().where('age').lt(20).exec((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find - age less than |', data);        // Array
})