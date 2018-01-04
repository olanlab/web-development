// SPREAD --------------------------------------------
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = ["a", "b", "c"];
arr1.push(arr2);
console.log('1|', arr1);        // 1| [ 'a', 'b', 'c', [ 'd', 'e', 'f' ] ]

arr3.push(...arr2)
console.log('2|', arr3);        // 2| [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// copy = arr2;
const copy = arr2.slice();
console.log('3|', copy);        // 3| [ 'd', 'e', 'f' ]
copy.push(4)
console.log('3|', copy);        // 3| [ 'd', 'e', 'f', 4 ]
console.log('3|', arr2);        // 3| [ 'd', 'e', 'f' ]
