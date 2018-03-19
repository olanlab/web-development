var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/shopper");
mongoose.Promise = global.Promise;

// Schema Validation
var userSchema = mongoose.Schema({
	firstname: { type: String, required: true },
	lastname: String,
	email: { type: String, required: true, trim: true, lowercase: true },
    age: { type: Number, min: 1, max: 110,  default: 15},
    created_date: {type: Date, default: Date.now}
});
// Model
var User = mongoose.model("User", userSchema);
var person = new User({ firstname: "Seen", lastname: "Vechprasit", email: "zeza266@hotmail.com", age: 18});
person.save(function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("save successsfully.");
	}
});