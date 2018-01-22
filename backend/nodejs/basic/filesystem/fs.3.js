var fs = require('fs');

fs.unlink('myfile3.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});