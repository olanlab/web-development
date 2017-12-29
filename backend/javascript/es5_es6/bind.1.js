const user = {
	data: [{ name: "T. Wood", age: 37 }, { name: "P. Michelson", age: 43 }],
	showFirstUser: function() {
		console.warn(this.data[0].name);
	}
};

// user.showFirstUser();
// ERROR
// const showFirstUser = user.showFirstUser
// CORRECT
const showFirstUser = user.showFirstUser.bind(user);
showFirstUser();
