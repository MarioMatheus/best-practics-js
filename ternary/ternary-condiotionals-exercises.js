var chooseFunction = false;
var futureFunction;

futureFunction = chooseFunction ?
	function(p1, p2){
		return p1 + p2;
	}
	:
	function(p1, p2) {
		return p1 - p2;
	}

console.log(futureFunction);
console.log(futureFunction(10, 5));
