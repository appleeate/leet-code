/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function (nums, k, t) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let keys = [...map.keys()];
		for (let j = 0; j < keys.length; j++) {
			if (Math.abs(nums[i] - keys[j]) <= t) return true;
		}
		map.set(nums[i], i);
		if (map.size > k) {
			map.delete(map.keys().next().value);
		}
	}
	return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));
console.log(containsNearbyAlmostDuplicate([1,2,1,1], 1, 0));
console.log(containsNearbyAlmostDuplicate([1,2,2,3,4,5], 3, 0));
