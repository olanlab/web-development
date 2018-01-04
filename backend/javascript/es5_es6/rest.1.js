// REST --------------------------------------------
function howManyArgs(...args) {
	console.log(args.length);
}

howManyArgs(1); 			// 1
howManyArgs(1, 2); 			// 2
howManyArgs(1, 2, 3, 4, 5); // 3

function multiply(multiper, ...array) {
	console.log(array);
}
const result = multiply(2, 100, 200, 300);

