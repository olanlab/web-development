var person1 = {
	name: "Luna",

	handleMessage: function(message, handler) {
		handler(message);
	},

	greet: function() {
		var _this = this;
		this.handleMessage("Hi", function(message) {
			console.log(message + " " + _this.name);
		});
	}
};

person1.greet();

// ------------------------------------------------------------------
var person2 = {
	name: "Luna",

	handleMessage: (message, handler) => {
		handler(message);
	},

	greet: function() {
		this.handleMessage("Hi", message =>
			console.log(message + " " + this.name)
		);
	}
};

person2.greet();