/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (s, nums) {
	// 使用滑动窗口
	let i = 0, j = -1;
	let n = nums.length;

	let sum = 0;
	let result = Infinity;

	while (i < n) {
		// j < n - 1这行代码是为了防止越界
		if (sum < s && j < n - 1) {
			j++;
			sum += nums[j];
		} else {
			sum -= nums[i];
			i++;
		}

		if (sum >= s) {
			result = Math.min(j - i + 1, result)
		}
	}
	return result === Infinity ? 0 : result
};
const minSubArrayLen1 = function (target, nums) {
  // 经典滑动窗口
  let l = 0, r = 0, sum = 0, len = nums.length;
  let res = len + 1;
  while (r < len) {
    sum += nums[r++];
    while (sum >= target) {
      res = Math.min(res, r - l);
      sum -= nums[l++]
    }
  }
  return res > len ? 0 : res;
};


console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
