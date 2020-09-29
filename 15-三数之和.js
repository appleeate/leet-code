/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
	// 三指针  固定一个指针 剩下两个指针相遇
	const res = [], len = nums.length;
	if (len < 3) return res;
	nums.sort((a, b) => a - b);
	for (let i = 0; i < len - 2; i++) {
		let n1 = nums[i];
		if (n1 > 0) break;
		if (n1 === nums[i - 1] && i > 0) continue;// 重复的继续走
		let left = i + 1;
		let right = len - 1;
		while (left < right) {
			let n2 = nums[left];
			let n3 = nums[right];
			if (n1 + n2 + n3 === 0) {
				res.push([n1, n2, n3]);
				while(left < right && nums[left] === n2) left++; // 重复 左指针前进
				while(left < right && nums[right] === n3) right--; // 重复 左指针前进
			} else if (n1 + n2 + n3 < 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	return res;
};
