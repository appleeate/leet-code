/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	let left = 0, right = 1, max = 0;
	while (right < prices.length) {
		if (prices[left] > prices[right]) {
			left = right;
			right = left + 1;
		} else {
			if (max <= (prices[right] - prices[left])) {
				max = prices[right] - prices[left];
			}
			right++;
		}
	}
	return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
