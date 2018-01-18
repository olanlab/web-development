var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
console.log(clonedObj); // Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Object { foo: "baz", x: 42, y: 13 }

var { foo, x, y } = obj1;
console.log(foo, x, y); // bar 42 undefined

var { foo: foo2, x: x2, y: y2 } = obj1;
console.log(foo2, x2, y2); // bar 42 undefined