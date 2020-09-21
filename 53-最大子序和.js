/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let ans = nums[0]; //储存最大值的变量
  let sum = 0; // 和的变量
  for (const num of nums) {
    // 如果之前数字的和 大于0 代表有用 继续进行增加
    if (sum > 0) {
      sum += num;
      // 如果之前的和为负数 直接舍弃 使用当前的值重新累加
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum)
  }
  return ans
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
