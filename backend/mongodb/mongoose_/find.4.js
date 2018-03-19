var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

var User = require('./UserModel');
// --------------------------------------------------------------------------------
// where
User.find().where('firstname').equals('Olan').exec((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find - firstname|', data);        // Array
})
// where, ne - not equal
User.find().where('age').ne(33).exec((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find - age not equal |', data);        // Array
})
// where, in
User.find().where('age').in([33]).exec((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find - age in |', data);        // Array
})
