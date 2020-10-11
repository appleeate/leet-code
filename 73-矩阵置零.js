/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
	let rows = {};
	let column = {};
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				rows[i] = false;
				column[j] = false
			}
		}
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if ((rows[i] === false) || (column[j] === false)) matrix[i][j] = 0;
		}
	}
	console.log(matrix);
};
setZeroes([
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1]
]);
