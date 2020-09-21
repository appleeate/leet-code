/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
	let map = {};
	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]]) return true;
		map[nums[i]] = true;
	}
	return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
