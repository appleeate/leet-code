/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
	let j = 1;
	let n = nums.length;
	for (let i = 2; i < n; i++) {
		if (nums[i] !== nums[j - 1]) {
			j++;
			nums[j] = nums[i];
		}
	}
	return j + 1;
};

let arr = [1,1,1,2,2,3,4,5,5,5];
removeDuplicates(arr);
console.log(arr);
