/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
	if (num === 1 || num === 0) return true;
	let i;
	i = (num % 2 === 0) ? 2 : 3;
	for (; i * i <= num; i += 2) {
		if (i * i === num) return true;
	}
	return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(17));

