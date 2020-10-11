/*
*
* 一只青蛙一次可以跳上1级台阶，也可以跳上2级，
* 但年幼的青蛙不能连续跳2级，
* 求年幼青蛙跳上一个n级的台阶总共有多少种方法？
* */
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
	if (!n) return 0;
	if (n ===1) return 1;
	let dp = new Array(n + 1).fill(new Array(2).fill(0));
	console.log(dp);
	dp[1][0] = 1;
	dp[1][1] = 1;
	if (n >= 2) {
		dp[2][0] = 2;
		dp[2][1] = 1;
	}
	for (let i = 3; i <= n; ++i) {
		dp[i][0] = dp[i - 1][0] + dp[i - 2][1];
		dp[i][1] = dp[i - 1][0];
	}
	console.log(dp);
	return dp[n][0];
};

// console.log(climbStairs(0));
// console.log(climbStairs(1));
// console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
// console.log(climbStairs(5));
