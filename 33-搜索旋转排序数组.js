/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
	// 只有在单调区间 才可以使用二分法
	if (nums.length === 0) return -1;
	if (nums.length === 1) return nums[0] === target ? 0 : 1;

	let start = 0, end = nums.length - 1, mid;
	while (start <= end) {
		mid = start + ((end - start) >> 1);
		if (nums[mid] === target) return mid;
		if (nums[mid] >= nums[start]) {
			// 左边是有序的
			if (target >= nums[start] && target < nums[mid]) {
				// 在左区域
				end = mid - 1;
			} else {
				// 在右区域
				start = mid + 1;
			}
		} else {
			// 右边是有序的
			if (target > nums[mid] && target <= nums[end]) {
				start = mid + 1
			} else {
				end = mid - 1
			}
		}
	}
	return -1;
};


[3,4,0,1,2]
[2,3,4,0,1]
