// SPREAD --------------------------------------------
const arr = [4, 5, 6];
const append1 = [1, 2, 3, arr];
console.log("1|", append1);

const append2 = [1, 2, 3, ...arr];
console.log("2|", append2);

const prepend1 = [...arr, 7, 8, 9];
console.log("3|", prepend1);
