var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

var User = require('./UserModel');
User.findByIdAndUpdate('5a5067eb29c79a16f86a37c6', { 'firstname': 'Olan', 'age': 33 }, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log('User.findByIdAndUpdate|', data);
})
// --------------------------------------------------------------------------------------------------
User.findOneAndUpdate({'_id' : '5a5067eb29c79a16f86a37c6'}, { 'firstname': 'Olan' }, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log('User.findByIdAndUpdate|', data);
})
// --------------------------------------------------------------------------------------------------



