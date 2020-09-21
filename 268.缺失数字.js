/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
	let n = nums.length;
	// 第一步，计算给出数组的总和
	let sum = nums.reduce((result, item) => {
		return result + item
	});
	// 第二步，计算假设插入数据后有序完整数组的总和
	let total = (n + 1) * n / 2;
	// 第三步，计算差值
	return total - sum

};

let nums = [0, 1];
console.log(missingNumber(nums));
