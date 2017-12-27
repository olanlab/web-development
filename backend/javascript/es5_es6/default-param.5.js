function createUser(person) {
	const name = person.name || "Nana";
	const age = person.age || 18;
	return `${name} (age: ${age})`;
}
console.log(createUser({ age: 10, name: "Lucy" }));
// ------------------------------------------------------------------------
function createUser1({ age = 18, name = "Nana" } = {}) {
	return `${name} (age: ${age})`;
}
console.log(createUser1());
