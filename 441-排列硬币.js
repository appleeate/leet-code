/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
	//等差数列 求和公式  配合  求解公式
	console.log((Math.sqrt((2 * n + 1 / 4) - 1 / 2)));
	return ~~(Math.sqrt(2) * Math.sqrt(n + 0.125) - 0.5)
};

console.log(arrangeCoins(5));
