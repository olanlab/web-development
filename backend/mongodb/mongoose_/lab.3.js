// CONNECT
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;

// Model
var User = require("./UserModel");
// DELETE
// 1 
// User.remove({age: 33}, (err) => {
//     if(err) console.log(err);
//     console.log("remove successfully.");
// })

// 2
// User.findByIdAndRemove('5aae74551b05073affcca127', (err, data) => {
//     if(err) console.log(err);
//     console.log("remove successfully.", data);
// })

// 3 
// User.findOneAndRemove
User.findOneAndRemove({firstname: "Seen"}, (err, data) => {
    if(err) console.log(err);
    console.log("remove successfully.", data);
})


