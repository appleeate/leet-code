/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
	// let arr = [...new Set(nums)];
	// 将nums置空 然后将去重后的数组放进去
	// nums.splice(0, nums.length, ...arr);
	// return nums.length;

	//---------------

	let j = 0;
	let n = nums.length;
	for (let i = 1; i < n; i++) {
		if (nums[i] !== nums[i - 1]) {
			j++;
			nums[j] = nums[i];
		}
	}
	return j + 1;

	// --------------

	// let len = 1;
	// for (let i = 1; i < nums.length; i++) {
	// 	if (nums[i] !== nums[i - 1]) nums[len++] = nums[i];
	// }
	// return len
};

let arr = [1,1,1,2];
console.log(removeDuplicates(arr));
console.log(arr);
