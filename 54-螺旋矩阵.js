/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
	if (!matrix.length) return [];
	const res = [];
	let top = 0,
		left = 0,
		right = matrix[0].length - 1,
		bottom = matrix.length - 1;
	while (top < bottom && left < right) {
		for (let i = left; i < right; i++) res.push(matrix[top][i]); // 上
		for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 右
		for (let i = right; i > left; i--) res.push(matrix[bottom][i]); // 下
		for (let i = bottom; i > top; i--) res.push(matrix[i][left]); // 左
		right--;
		top++;
		bottom--;
		left++;
	}
	if (top === bottom) {
		for (let i = left; i <= right; i++) res.push(matrix[top][i]);
	} else if (right === left) {
		for (let i = top; i <= bottom; i++) res.push(matrix[i][left]);
	}
	return res;
};
/*
* 12 36 98 74  走完外环  然后收缩圈子
* */
console.log(spiralOrder([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]));
