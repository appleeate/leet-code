/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	let profit = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		// 低买高卖
		if (prices[i + 1] > prices[i]) {
			profit += prices[i + 1] - prices[i];
		}
	}
	return profit;
};

console.log(maxProfit([7, 1, 5, 3, 4, 6]));
