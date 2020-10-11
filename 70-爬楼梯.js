/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
	if (!n) return 0;
	if (n ===1) return 1;
	let dp = new Array(n).fill(1);
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i-1] + dp[i - 2]
	}
	console.log(dp);
	return dp[n];
};

console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
