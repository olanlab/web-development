var fs = require('fs');

fs.rename('myfile1.txt', 'myfile3.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});