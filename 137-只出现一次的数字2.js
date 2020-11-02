/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];
  nums.sort();
  console.log(nums);
  let left = 0, right = 1, result = 0;
  while (right < nums.length) {
    if (nums[left] === nums[right] && nums[left]  === nums[right + 1]) {
      left = right + 2;
      right = left + 1;
      result = nums[left];
    } else {
      result = nums[left];
      right++
    }
  }
  return result;
};

console.log(singleNumber([3,3,3]));
