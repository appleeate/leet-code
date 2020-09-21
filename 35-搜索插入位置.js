/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
  if (target > nums[nums.length - 1]) return nums.length
  if (target < nums[0]) return 0
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) return i;
  }
};

// 二分查找
const searchInsert1 = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >>> 1; // 取中位数的骚操作
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return lo; // 退出循环时 hi比lo小1
};

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1], 1));
