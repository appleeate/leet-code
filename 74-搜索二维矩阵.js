/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
	let arr = matrix.flat();
	let start = 0, end = arr.length - 1;
	while (start <= end) {
		const mid = start + ((end - start) >> 1);
		if (arr[mid] === target) return true;
		if (arr[mid] < target) {
			start = mid + 1
		} else {
			end = mid - 1
		}
	}
	return false
};
