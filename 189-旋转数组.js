/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  let point = nums.length -  k % nums.length;
  nums.splice(0, 0, ...nums.splice(point));
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
