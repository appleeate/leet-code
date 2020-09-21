/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
	if(n <= 0) return false;
	while (n > 1) {
		if (n % 3 === 0) {
			n /= 3;
		} else {
			return false
		}
	}
	return true;
};
console.log(isPowerOfThree(4));
