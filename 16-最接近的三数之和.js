/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
	// 三指针  固定一个指针 剩下两个指针相遇
	let res = nums[0] + nums[1] + nums[nums.length - 1], len = nums.length;
	if (len < 3) return res;
	nums.sort((a, b) => a - b);
	for (let i = 0; i < len - 2; i++) {
		let n1 = nums[i];
		let left = i + 1;
		let right = len - 1;
		while (left < right) {
			const sum = n1 + nums[left] + nums[right];
			if (sum === target) {
				return sum;
			} else if (sum > target) {
				if (sum - target < Math.abs(res - target)) res = sum;
				right--;
			} else {
				if (target - sum  < Math.abs(res - target)) res = sum;
				left++;
			}
		}
	}
	return res;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([-1, 2, 1, -4, 5], 3));
