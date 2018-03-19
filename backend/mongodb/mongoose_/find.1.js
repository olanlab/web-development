var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

var User = require('./UserModel');
// --------------------------------------------------------------------------------
User.find((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find|', data);        // Array
})
// --------------------------------------------------------------------------------
User.find({'firstname': 'Olan'}, (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find|', data);        // Array
})