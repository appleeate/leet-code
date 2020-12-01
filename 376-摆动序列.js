/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function (nums) {
  const len = nums.length;
  if (len < 2) return len;
  let up = 1, down = 1;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i + 1]) {
      down = up + 1;
    }
  }
  return Math.max(up, down)
};
