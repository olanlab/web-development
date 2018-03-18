var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String, 
    email: String,
    age: Number,
    status: String
})

var User = mongoose.model('User', userSchema);
module.exports = User;