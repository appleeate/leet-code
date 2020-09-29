/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
	let res = [];
	nums.sort((a, b) => a - b);
	for (let i = 0, len = nums.length; i < len - 3; i++) {
		// 去除重复情况
		if (nums[i] === nums[i - 1]) continue;
		for (let j = i + 1; j < len - 2; j++) {
			// 除去重复情况
			if (res.length > 0) {
				let res0 = res[res.length - 1][0];
				let res1 = res[res.length - 1][1];
				if (res0 === nums[i] && res1 === nums[j]) continue
			}
			let left = j + 1;
			let right = len - 1;
			while (left < right) {
				let sum = nums[i] + nums[j] + nums[left] + nums[right];
				if (sum === target) {
					res.push([nums[i], nums[j], nums[left], nums[right]]);
					left++;
					while (nums[left] === nums[left - 1]) left++
				} else if (sum < target) {
					left++;
				} else {
					right--;
				}
			}
		}
	}
	return res;
};
