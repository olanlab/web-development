var fs = require('fs');

fs.appendFile('myfile1.txt', 'Create or Update by fs.appendFile', function (err) {
    if (err) throw err;
    console.log('Saved!');
});