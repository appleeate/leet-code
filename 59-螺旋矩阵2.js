/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
	if (!n) return [];
	const res = new Array(n).fill(false).map(() => new Array(n).fill(false));
	let top = 0,
		left = 0,
		right = n - 1,
		bottom = n - 1,
		count = 1;
	while (top < bottom && left < right) {
		for (let i = left; i < right; i++) res[top][i] = count++; // 上
		for (let i = top; i < bottom; i++) res[i][right] = count++; // 右
		for (let i = right; i > left; i--) res[bottom][i] = count++; // 下
		for (let i = bottom; i > top; i--) res[i][left] = count++; // 左
		right--;
		top++;
		bottom--;
		left++;
	}
	if (top === bottom) {
		for (let i = left; i <= right; i++) res[top][i] = count++;
	} else if (right === left) {
		for (let i = top; i <= bottom; i++) res[i][left] = count++;
	}
	return res;
};
console.log(generateMatrix(3));
