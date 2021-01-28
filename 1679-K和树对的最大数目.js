/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function (nums, k) {
  // 和第一题的求和很像
  // 使用map记录下来 {key-数组的项: value-出现的次数}{}
  // 如果两个数之和正好符合 那么就将res加一 并且清除掉map的value
  let res = 0, map = {};
  for (let num of nums) {
    if (map[k - num]) {
      map[k - num]--;
      res++;
    } else {
      map[num] = (map[num] || 0) + 1
    }
  }
  return res;
};

console.log(maxOperations([1, 2, 3, 4], 5));
