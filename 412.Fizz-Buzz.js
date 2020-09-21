/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
	return new Array(n).fill(0).map((item, index) => {
		if ((index + 1) % 3 === 0 && (index + 1) % 5 === 0) {
			return "FizzBuzz"
		}
		if ((index + 1) % 3 === 0) {
			return "Fizz"
		}
		if ((index + 1) % 5 === 0) {
			return "Buzz"
		}
		return index + 1 + ""
	});
};

console.log(fizzBuzz(1));
