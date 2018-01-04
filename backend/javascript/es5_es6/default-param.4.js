const [{ prop: x1 = 10 }] = [{ prop: undefined }];
console.log(x1);        // 10

const [{ prop: x2 = 11 } = {}] = [];
console.log(x2);        // 11
