/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
	let res = [-1, -1];
	if (nums.length === 1) return target === nums[0] ? [0, 0] : res;
	let start = 0, end = nums.length - 1, mid, left = 0, right = 0;
	while (start <= end) {
		mid = start + ((end - start) >> 1);
		if (nums[mid] === target) {
			left = mid;
			right = mid;
			while (left > start && nums[left] === nums[left - 1]) left--;
			while (right < end && nums[right] === nums[right + 1]) right++;
			return [left, right]
		}
		if (nums[mid] > target) {
			end = mid - 1
		} else {
			start = mid + 1
		}
	}
	return res;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([7, 7], 7));
console.log(searchRange([7], 7));
console.log(searchRange([1, 3], 1));
console.log(searchRange([3, 3, 3], 3));
