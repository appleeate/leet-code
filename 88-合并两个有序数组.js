/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
  let mIndex = m - 1,
    nIndex = n - 1,
    tail = m + n - 1; // tail 就是 nums1 数组的 最后一位
  while (nIndex >= 0) { // mIndex 不行
    if (nums1[mIndex] > nums2[nIndex]) {
      nums1[tail] = nums1[mIndex];
      mIndex--;
    } else {
      nums1[tail] = nums2[nIndex];
      nIndex--;
    }
    tail--;
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
console.log(merge(nums1, 3, nums2, 3));
console.log(nums1);
