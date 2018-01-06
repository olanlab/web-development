var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
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
User.find().where('age').gt(20).exec((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log('User.find - age|', data);        // Array
})