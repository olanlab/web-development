var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

var User = require('./UserModel');
// --------------------------------------------------------------------------------
User.findOne({'firstname': 'Seen'}, (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.findOne|', data);     // Object
})
// --------------------------------------------------------------------------------
User.findOne({'firstname': 'Seen'}, 'firstname', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.findOne|', data);     // Object
})
// --------------------------------------------------------------------------------
User.findById('5a5067eb29c79a16f86a37c6', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.findById|', data);    // Object
})
