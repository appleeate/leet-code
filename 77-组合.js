/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
	const res = [];
	const helper = (start, path) => {
		if (path.length === k) return res.push(path.slice()) ;
		for (let i = start; i <= n ; i++) {
			path.push(i);
			helper(i + 1, path);
			path.pop()
		}
	};
	helper(1, []);
	return res;
};

console.log(combine(4, 2));
