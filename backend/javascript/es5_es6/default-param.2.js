let [x, y] = [1, 2];
console.log('1|', x, y);    // 1| 1 2

let [x1, y1] = [1];
console.log('2|', x1, y1);  // 2| 1 undefined

let [x2, y2 = 3] = [1];     
console.log('3|', x2, y2);  // 3| 1 3

let [x3 = 4, y3 = 5] = [];
console.log('4|', x3, y3);  // 4| 4 5