// DESTRUCTURE OF OBJECT IN DEEP -------------------------------------------------------
const person = {
	first: "Jane",
	last: "Doe",
	email: "jane@doe.com",
	birthday: {
		day: 20,
		month: "Jan",
		year: 1990
	}
};

const { first, last, birthday, birthday: { day, month, year } } = person;
console.log("1|", first, last);
console.log("2|", birthday);
console.log("3|", day, month, year);
