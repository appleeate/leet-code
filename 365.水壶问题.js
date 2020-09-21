/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
const canMeasureWater = function (x, y, z) {
	if (x + y < z) return false;
	if (z === 0) return true;
	if (x === 0) return y === z;
	if (y === 0) return x === z;
	/**
	 * 求 最大公约数的函数
	 * @return {number}
	 */
	function GCD(a, b) {
		let min = Math.min(a, b);
		while (min) {
			if (a % min === 0 && b % min === 0) return min;
			min--;
		}
		return 1;
	}
	return z % GCD(x, y) === 0;
};

// console.log(canMeasureWater(0, 2, 4));
console.log(canMeasureWater(2, 6, 5));
// console.log(canMeasureWater(34, 5, 10));
