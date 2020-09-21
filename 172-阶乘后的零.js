/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function (n) {
	let count = 0;
	while (n > 1) {
		count += ~~(n /= 5);
	}
	return count;
};

console.log(trailingZeroes(9));
