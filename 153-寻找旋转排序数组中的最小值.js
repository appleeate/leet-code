/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
	if (nums.length === 1) return nums[0];
	let left = 0;
	let right = nums.length - 1, mid;

	if (nums[right] > nums[left]) return nums[0];

	while (left <= right) {
		mid = left + ((right - left) >> 1);
		if (nums[mid] > nums[mid + 1]) {
			return nums[mid + 1]
		}
		if (nums[mid] < nums[mid - 1]) {
			return nums[mid]
		}
		if (nums[mid] > nums[0]) {
			left = mid + 1
		} else {
			right = mid - 1
		}

	}
	return 0;
};

// console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([1, 2]));
console.log(findMin([2, 3, 4, 5, 1]));
// console.log(findMin([4,5,6,7,0,1,2]));
// console.log(findMin([1]));
