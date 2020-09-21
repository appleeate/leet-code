/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
	let stack = [];
	let map = {
		"+": (a, b) => a + b,
		"-": (b, a) => a - b,
		"*": (a, b) => a * b,
		"/": (b, a) => ~~(a / b),
	};
	for (let i = 0; i < tokens.length; i++) {
		if (!map[tokens[i]]) {
			stack.push(tokens[i]);
		} else {
			stack.push(map[tokens[i]](stack.pop() * 1, stack.pop() * 1))
		}
	}
	return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
