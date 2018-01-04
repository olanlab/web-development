// DESTRUCTURE OF OBJECT IN DEEP -------------------------------------------------------
const person = {
	first: "Saha",
	last: "Michel",
	email: "saha@gmail.com",
	birthday: {
		day: 1,
		month: "Jan",
		year: 1984
	}
};

const { first, last, birthday, birthday: { day, month, year } } = person;
console.log("1|", first, last); 		// 1| Saha Michel
console.log("2|", birthday);			// 2| { day: 1, month: 'Jan', year: 1984 }
console.log("3|", day, month, year);	// 3| 1 Jan 1984
