/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
	let left = 0;
	let right = x;
	let res = -1;
	while (left <= right) {
		let mid = Math.round((left + right) / 2);
		let square = mid * mid;
		if (square < x) {
			res = mid;
			left = mid + 1
		}
		if (square > x) right = mid - 1;
		if (square === x) return mid;
	}
	return res;
};

console.log(mySqrt(200));
