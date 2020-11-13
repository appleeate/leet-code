/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  if (nums.length === 2) return nums[0];
  let left = 0, right = nums.length - 1;
  while (left < right) {
    if (nums[left] === nums[right]) return nums[left];
    left++;
  }
};
