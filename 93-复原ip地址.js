/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
	const res = [];
	const dfs = (subRes, start) => {
		if (subRes.length === 4 && start === s.length) return res.push(subRes.join(".")); // 符合
		if (subRes.length === 4 && start < s.length) return; // 还有未使用的字串 不符合
		for (let len = 1; len <= 3 ; len++) {
			if (start + len - 1 >= s.length) return;
			if (len !== 1 && s[start] === '0') return;
			const str = s.substring(start, start + len);
			if (len === 3 && +str > 255) return;

			subRes.push(str);
			dfs(subRes, start + len);
			subRes.pop()
		}
	};

	dfs([], 0);
	return res;
};
