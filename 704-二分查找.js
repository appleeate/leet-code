/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let [left, right] = [0, nums.length - 1];
  while (left <= right) {
    let mid = left + ~~((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
};
console.log(search([0, 2], 2));