const color = "red";
const age = 2;
const doBark = "ba" + "rk";

const dog4 = {
	color,
	age,
	[doBark]: function() {
		console.log("hong4");
	}
};
dog4.bark();
// ------------------------------------------------------------
const dog5 = {
	color,
	age,
	["ba" + "rk"]: function() {
		console.log("hong5");
	}
};
dog5.bark();
// ------------------------------------------------------------
