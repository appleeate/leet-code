/*
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/
const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];
		let index = nums.indexOf(diff);
		if (index > -1 && index !== i) {
			return [i, index]
		}
	}
}
const twoSum2 = (nums, target) => {
	let i = nums.length;
	while (i > 1) {
		let last = nums.pop();
		if (nums.indexOf(target - last) > -1) {
			return [nums.indexOf(target - last), nums.length]
		}
		i--
	}
}

const twoSum3 = (nums, target) => {
	const prevNums = {};                         // 存放出现过的数字，和对应的索引
	for (let i = 0; i < nums.length; i++) {      // 遍历每一项
		const curNum = nums[i];                    // 当前项
		const targetNum = target - curNum;         // 希望从过去的数字中找到的呼应项
		const targetNumIndex = prevNums[targetNum];// 在prevNums中找targetNum的索引
		if (targetNumIndex !== undefined) {        // 如果能找到
			return [targetNumIndex, i];              // 直接返回targetNumIndex和当前的i
		}                                          // 如果找不到，说明之前没出现过targetNum
		prevNums[curNum] = i;                      // 往prevNums存当前curNum和对应的i
	}
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum([0, 4.5, 4.5, 11, 15], 9));
