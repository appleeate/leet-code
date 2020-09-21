/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
	nums = [...new Set(nums)].sort((a, b) => b - a);
	return nums.length >= 3 ? nums[2] : nums[0];
};
console.log(thirdMax([2, 2, 1]));
