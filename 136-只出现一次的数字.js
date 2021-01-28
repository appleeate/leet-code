/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
	if (nums.length === 1) return nums[0];
	nums.sort();
	let left = 0, right = 1, result = 0;
	while (right < nums.length) {
		if (nums[left] === nums[right]) {
			left = right + 1;
			right = left + 1;
			result = nums[left];
		} else {
			result = nums[left];
			right++
		}
	}
	return result;
	// 按位异或的奇淫巧技
	// let ans = 0;
	// for(const num of nums) {
	// ans ^= num;
	// }
	// return ans;
};

console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4,1,2,1,2]));
