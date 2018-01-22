var fs = require('fs');

fs.writeFile('myfile1.txt', 'Create or Update by fs.writeFile', function (err) {
    if (err) throw err;
    console.log('Saved!');
});