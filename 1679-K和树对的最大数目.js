/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function (nums, k) {
  let res = 0, map = {};
  for (let num of nums) {
    if (map[k - num]) {
      map[k - num]--;
      res++;
    } else {
      map[num] = (map[num] || 0) + 1;
    }
  }
  return res;
};
