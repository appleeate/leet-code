/*
*
* 算法题：给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
* X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
* 现在需要你找出数列a的所有区间中, X值最大的那个区间;
* 如数列a为: 3 1 6 4 5 2;
* 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;
* */
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
	if (height.length < 2) return 0;
	let left = 0, right = height.length - 1;
	let max = 0;
	let getMax = () => {
		let min = Infinity;
		let l = left;
		let r = right;
		let sum = 0;
		while (--r && r >= l) {
			sum += height[r + 1];
			min = Math.min(min, height[r + 1])
		}
		return Math.max(max, min * sum);
	};
	while (left < right) {
		if (~~height[left] < ~~height[right]) {
			max = getMax();
			left++;
		} else {
			max = getMax();
			right--;
		}
	}
	return max;
};


console.log(maxArea([3, 1, 6, 4, 5, 2]));
