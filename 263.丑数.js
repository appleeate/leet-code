/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function (num) {
	if (num < 1) return false;
	while (num > 1) {
		if (num % 2 === 0) {
			num /= 2;
			continue;
		}
		if (num % 3 === 0) {
			num /= 3;
			continue;
		}
		if (num % 5 === 0) {
			num /= 5;
			continue;
		}
		return false;
	}
	return true
};

// console.log(isUgly(6));
// console.log(isUgly(7));
console.log(isUgly(1));
console.log(isUgly(8));
