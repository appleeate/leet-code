/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
	let i = 0, j = 0;
	for (; i < nums.length; i++) {
		if (nums[i] !== 0) [nums[j++], nums[i]] = [nums[i], nums[j]];
		// {
		// 	let temp = nums[j]
		// 	nums[j] = nums[i]
		// 	nums[i] = temp
		// 	j++
		// }
	}

};

let arr = [0, 1, 0, 3, 12];
// arr = [0, 0, 1];
// arr = [0,1,0,3,12];
console.log(moveZeroes(arr));
console.log(arr);
