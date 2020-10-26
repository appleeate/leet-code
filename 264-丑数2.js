/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
	let i = 1, j = 1, k = 1;
	let dp = [];
	dp[0] = 1;
	dp[1] = 1;
	let index = 2;
	while (index <= n) {
		let currentUgly = Math.min(dp[i] * 2, dp[j] * 3, dp[k] * 5);
		dp[index] = currentUgly;
		//注意这里2*3=6，3*2=6，两个乘数都要+1，不可使用if-else
		if (currentUgly === dp[i] * 2) {
			i++
		}
		if (currentUgly === dp[j] * 3) {
			j++
		}
		if (currentUgly === dp[k] * 5) {
			k++
		}
		index++;
	}
	return dp[n];
};

console.log(nthUglyNumber(1500));
