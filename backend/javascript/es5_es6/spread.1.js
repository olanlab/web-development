// SPREAD --------------------------------------------
// Spread into arguments
function add(x, y, z) {
	return x + y + z;
}

const sum1 = add(1, 2, 3);
console.log('1|', sum1);

const numbers = [1, 2, 3];
const sum2 = add(...numbers);
console.warn('2|', sum2);