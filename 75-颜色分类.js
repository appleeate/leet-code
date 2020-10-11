/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
	let left = 0, right = nums.length - 1;
	// 3. 遍历 nums
	// 起始点在 [left, right]，注意 right 是动态的
	for (let i = left; i <= right; i++) {

		// 3.1 如果是 0，交换到左边
		if (nums[i] === 0) {

			// 3.1.1 swap 交换
			[nums[left], nums[i]] = [nums[i], nums[left]];

			// 3.1.2 左边位置加一
			left++;
		} else if (nums[i] === 2) { // 3.2 如果是 2，交换到右边

			// 3.2.1 swap 交换
			[nums[right], nums[i]] = [nums[i], nums[right]];

			// 3.2.2 右边位置减一
			right--;

			// 3.2.3 有可能交换一个 2 回来
			// 这里和 0 不同是因为从左到右
			// 左边不可能还有我们忽略的 0，右边却有 2
			i--;
		}
	}
	console.log(nums);
};
sortColors([1, 0, 0]);
