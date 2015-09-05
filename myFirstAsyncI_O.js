var fs = require('fs');


var numlines = fs.readFile(process.argv[2],'utf8',function(err,data) {
	var numlines=data.split('\n').length-1;
	console.log(numlines);
});

