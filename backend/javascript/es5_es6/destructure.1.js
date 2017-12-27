// DESTRUCTURE OF ARRAY -------------------------------------------
const arr = [1, 2];
const a = arr[0];
const b = arr[1];
console.log('1|', a, b);

const [c, d] = arr;
console.log('2|', c, d);

const oneToFive = [1, 2, 3, 4, 5];
const [a1, b1, c1] = oneToFive;
console.log('3|', a1, b1, c1);

const [a2, b2, , d2] = oneToFive;
console.log('4|', a2, b2, d2);

const [, , , , e2] = oneToFive;
console.log('5|', e2);

const [a3, b3, ...rest] = oneToFive;
console.log('6|', rest);