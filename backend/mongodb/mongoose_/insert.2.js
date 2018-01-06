var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

var User = require('./UserModel');
var person = new User({ firstname: 'Olan', lastname: 'Samritjiarapon' });

person.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('save successsfully.');
    }
});