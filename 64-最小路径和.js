/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
	let m = grid.length, n = grid[0] ? grid[0].length : 0;
	if (m === 0 || n === 0) return 0;
	let cur = new Array(n).fill(1);
	cur[0] = grid[0][0];
	// 补齐首列路径和
	for (let i = 1; i < n; i++) {
		cur[i] = cur[i - 1] + grid[0][i]
	}
	for (let i = 1; i < m; i++) {
		// 开始每列循环时限初始化本列起点路径和，到达本列前的路径和
		cur[0] = cur[0] + grid[i][0];
		for (let r = 1; r < n; r++) {
			cur[r] = Math.min(cur[r - 1], cur[r])  + grid[i][r];
		}
	}
	return cur[n - 1];
};

console.log(minPathSum([
	[1,3,1],
	[1,5,1],
	[4,2,1]
]));
