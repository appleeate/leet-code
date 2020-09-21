/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
	let map = {};
	let diff = 0;
	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]] !== undefined) {
			diff = Math.abs(map[nums[i]] - i);
			if (diff <= k) return true
		}
		map[nums[i]] = i;
	}
	return false;

	/*Set 加 滑动窗口*/
	// const set = new Set();
	// for(let i = 0; i < nums.length; i++) {
	// 	if(set.has(nums[i])) {
	// 		return true;
	// 	}
	// 	set.add(nums[i]);
	// 	if(set.size > k) {
	// 		set.delete(nums[i - k]);
	// 	}
	// }
	// return false;

};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
