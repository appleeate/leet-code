/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 二分法
  let [low, high] = [0, nums.length - 1];
  while (low <= high) {
    let mid = (low + high) >> 1;
    if (nums[mid] === mid) {
      // 左边是完整的
      low = mid + 1
    } else {
      // 左边不完整
      high = mid - 1
    }
  }
  return low
};