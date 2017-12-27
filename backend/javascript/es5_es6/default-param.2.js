let [x, y] = [1, 2];
console.log('1|', x, y);

let [x1, y1] = [1];
console.log('2|', x1, y1);

let [x2, y2 = 3] = [1];
console.log('3|', x2, y2);

let [x3 = 4, y3 = 5] = [];
console.log('4|', x3, y3);
