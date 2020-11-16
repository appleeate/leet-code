/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
  if (nums.length <= 2) return nums;
  let left = 0, right = 1, res = [];
  nums.sort();
  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      left = right + 1;
      right = left + 1;
      // result = nums[left];
    } else if (nums[left] !== nums[right] && nums[right] === nums[right + 1]) {
      res.push(nums[left]);
      left = right + 2;
      right = left + 1;
    }
  }
};
