/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
	const res = [];
	const map = {};
	let dfs = (path) => {
		if (path.length === nums.length) {
			res.push(path.slice());
			return;
		}
		for (const num of nums) {
			if (map[num]) continue;
			path.push(num);
			map[num] = true;
			dfs(path);
			path.pop();
			map[num] = false;
		}
	};
	dfs([]);
	return res;
};

console.log(permute([1, 2, 3]));
