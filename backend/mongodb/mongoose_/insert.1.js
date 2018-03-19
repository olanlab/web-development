var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

// Schema
var userSchema = mongoose.Schema({
	firstname: String,
	lastname: String,
	email: String,
    age: Number,
    status: String,
    created_date: Date
});
//  Model
var User = mongoose.model('User', userSchema);
// var User = mongoose.model('User', { firstname: String, lastname: String, email: String, age: Number, status: String });
var person = new User({ firstname: 'Seen', lastname: 'Vechprasit', email: 'seen@olanlab.com', age: 33, status: "active"});
person.save(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('save successsfully.', data);
    }
});
