// CONNECT
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

// Model
var User = require("./UserModel");
// INSERT
var person = new User({ firstname: 'Seen', lastname: 'Vechprasit', email: 'Seen@olanlab.com ', status: "active"});
person.save((err, data) => {
    if(err) console.log(err);
    console.log('saved document successfully : ', data);
})

