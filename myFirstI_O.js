var fs = require('fs');

var numlines = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;

console.log(numlines);
