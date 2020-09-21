/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
	let j = 0; // 第二个指针
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		if (nums[i] !== val) {
			nums[j] = nums[i];
			j++;
		}
	}
	return j;
};

let arr = [0,1,2,2,3,0,4,2];
console.log(removeElement(arr, 2));
console.log(arr);
