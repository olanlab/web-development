// ---------------------------------------------------------------
const color = "red";
const age = 2;
function bark() {
	console.log("hong");
}

const dog1 = { color: color, age: age, bark: bark };
const dog2 = { color, age, bark };

dog1.bark();
dog2.bark();
// ---------------------------------------------------------------
const dog3 = {
	color,
	age,
	bark: function() {
		console.log("hong3");
	}
};
dog3.bark();
