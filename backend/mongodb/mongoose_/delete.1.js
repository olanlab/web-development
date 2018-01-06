var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

var User = require('./UserModel');
User.remove({'firstname': 'Seen'}, (err) => {
    if(err) {
        console.log(err);
    }
    console.log('remove successfully.');
})