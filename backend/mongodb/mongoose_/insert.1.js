var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

var User = mongoose.model('User', { firstname: String, lastname: String, email: String });
var person = new User({ firstname: 'Seen', lastname: 'Vechprasit' });

// --------------------------------------------------------------------------------
person.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('save successsfully.');
    }
});
// --------------------------------------------------------------------------------

