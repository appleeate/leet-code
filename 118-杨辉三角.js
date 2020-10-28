/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
	const res = [];
	if (numRows <= 0) return res;
	for (let i = 0; i < numRows; i++) {
		const arr = [];
		for (let j = 0; j <= i; j++) {
			if (j > 0 && j < i) { // 如果不是两侧的话 那么就取 上一层的两数之和
				arr.push(res[i - 1][j - 1] + res[i - 1][j])
			} else { // 是两侧 直接push 1
				arr.push(1)
			}
		}
		res.push(arr)
	}
	return res;
};

console.log(generate(6));
