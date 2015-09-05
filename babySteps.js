var numbers = process.argv.slice(2);
var total=0;
numbers.forEach(function(num) {
	total+=Number(num);
})

console.log(total);
