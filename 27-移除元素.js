/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
	// 使用快慢指针 快指针 fast 慢指针 slow
	// 1。如果没有找到等于val元素， 快慢指针一起走
	// 2。如果找到了等于val的元素，快指针继续走，慢指针留在原地
	// 3。快指针继续走，找到不等于val的元素的时候，慢指针指向的元素变成不等于val的元素
	// 4。此时就相当于删除了等于val的元素（替换）
	let slow = 0; // 慢指针
	let n = nums.length;
	for (let fast = 0; fast < n; fast++) {
		if (nums[fast] !== val) {
			nums[slow] = nums[fast];
			slow++;
		}
	}
	return slow;
};

let arr = [0,1,2,2,3,0,4,2];
console.log(removeElement(arr, 2));
console.log(arr);
