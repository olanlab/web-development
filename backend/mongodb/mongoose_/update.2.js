var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;


var User = require('./UserModel');
// options ------------------------------------------------------------------------------------
// new
User.findByIdAndUpdate('5a5067eb29c79a16f86a37c6', { 'firstname': 'OlanXX' }, { new: true }, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log('User.findByIdAndUpdate|', data);
})
// upsert
User.findOneAndUpdate({ 'firstname': 'Robot' }, { 'firstname': 'Robot', 'lastname': 'X' }, { upsert: true }, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log('User.findByIdAndUpdate|', data);
})