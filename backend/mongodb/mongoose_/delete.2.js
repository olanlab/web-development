var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

var User = require('./UserModel');
User.findByIdAndRemove('5a507fc10366c2369c550776', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})
// ------------------------------------------------------------------------------------------------------------
User.findOneAndRemove({ 'firstname': 'Seen' }, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('remove successfully.');
})
// ------------------------------------------------------------------------------------------------------------
