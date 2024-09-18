function greet(name) {
	if (name) {
		console.log("Hello, " + name + "!");
	} else {
		console.log("Hello, world!");
	}
}

function add(a, b) {
	return a + b;
}

const result = add(5, 3);
greet("Alice");
greet();
console.log("The result is: " + result);
