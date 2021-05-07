/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function (nums) {
  let res = nums.sort((a, b) => a - b).slice();
  let j = nums.length - 1, i = j >> 1, k = 0;
  while (k < res.length) {
    nums[k] = (k & 1) ? res[j--] : res[i--];
    k++;
  }
  console.log(nums);
};
// wiggleSort([1, 5, 1, 1, 6, 4]);
wiggleSort([1, 3, 2, 2, 3, 1]);
wiggleSort([1,1,2,1,2,2,1]);
