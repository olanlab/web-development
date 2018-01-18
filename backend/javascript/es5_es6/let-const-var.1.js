// VAR ----------------------------------------------------------
var name1 = "Luna";
if (true) {
	var name1 = "Ken";
}
console.log("1|", name1);  // Ken

// LET ----------------------------------------------------------
let name2 = "Luna2";
if (true) {
	let name2 = "Ken2";
	console.log("2|", name2); 	// Ken2
}
console.log("2|", name2);		// Luna2

// CONST ----------------------------------------------------------
const fruit = "Banana";
// fruit = "Apple"; // ERROR
console.log("3|", fruit);		// Banana

const person = {};
// person = {name: "Luna"}; // ERROR
person.name = "Luna"; // NO ERROR
console.log("4|", person);		// { name: 'Luna'}