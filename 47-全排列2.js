/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
	const res = [];
	const len = nums.length;
	const used = new Array(len);
	nums.sort((a, b) => a - b);
	let dfs = (path) => {
		if (path.length === len) {
			res.push(path.slice());
			return;
		}
		for (let i = 0; i < len; i++) {
			if (nums[i - 1] === nums[i] && i - 1 >= 0 && !used[i - 1]) { // 去重  这里的i是层级
				continue;
			}
			if (used[i]) {
				continue;
			}
			path.push(nums[i]);
			used[i] = true;
			dfs(path);
			path.pop();
			used[i] = false;
		}
	};
	dfs([]);
	return res;
};

// console.log(permute2([1, 2, 3]));
console.log(permuteUnique([3,3,0,3]));
