// DESTRUCTURE OF OBJECT -------------------------------------------------------
const person = { first: "Jane", last: "Doe" };
const f = person.first;
const l = person.last;
console.log("1|", f, l);

const { first: f1, last: l2 } = person;
console.log("2|", f1, l2);

const { first, last } = person;
console.log("3|", first, last);
