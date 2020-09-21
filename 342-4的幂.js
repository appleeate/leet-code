/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function (num) {
	return /^10*$/.test(num.toString(4));
};
