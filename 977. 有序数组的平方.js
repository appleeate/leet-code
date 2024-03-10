/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const res = [];
  let left = 0, // 左指针
    right = nums.length - 1, // 右指针
    sortIndex = right; // 结果数组下标
  while (left <= right) {
    if (nums[left] ** 2 < nums[right] ** 2) {
      res[sortIndex] = nums[right] ** 2
      right--
    } else {
      res[sortIndex] = nums[left] ** 2
      left++
    }
    sortIndex--
  }
  return res;
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));