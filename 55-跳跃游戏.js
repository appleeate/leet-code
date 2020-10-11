/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i > sum) return false;
		sum = Math.max(sum, i + nums[i])
	}
	return true;
};

// console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
