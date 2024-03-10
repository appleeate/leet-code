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

const searchInsert2 = (nums, target) => {
  let n = nums.length;
  let left = 0;
  let right = n - 1; // 定义target在左闭右闭的区间里，[left, right]
  while (left <= right) { // 当left==right，区间[left, right]依然有效
    const middle = left + ((right - left) / 2);// 防止溢出 等同于(left + right)/2
    if (nums[middle] > target) {
      right = middle - 1; // target 在左区间，所以[left, middle - 1]
    } else if (nums[middle] < target) {
      left = middle + 1; // target 在右区间，所以[middle + 1, right]
    } else { // nums[middle] == target
      return middle;
    }
  }
  // 分别处理如下四种情况
  // 目标值在数组所有元素之前  [0, -1]
  // 目标值等于数组中某一个元素  return middle;
  // 目标值插入数组中的位置 [left, right]，return  right + 1
  // 目标值在数组所有元素之后的情况 [left, right]， return right + 1
  return right + 1;
};

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1], 1));
