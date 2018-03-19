var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

var User = require('./UserModel');
var person = new User({ firstname: 'Seen', lastname: 'Vechprasit', email: 'seen@olanlab.com', age: 33, status: "active"});
person.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('save successsfully.');
    }
});