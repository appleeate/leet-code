/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
	if (s[0] === '0') return 0;
	const len = s.length;
	const dp = [1, 1, ...new Array(len - 1).fill(0)];
	for (let i = 2; i <= len ; i++) {
		let one = s.slice(i - 1, i);
		let two = s.slice(i - 2, i);
		if (one > 0 && one < 10) dp[i] += dp[i - 1];
		if (two > 9 && two < 27) dp[i] += dp[i - 2];
	}
	console.log(dp);
	return dp[len]
};

// console.log(numDecodings("44"));
// console.log(numDecodings("22"));
console.log(numDecodings("2222"));
