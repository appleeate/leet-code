/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
  let res = [], map = new Map(), count = Math.floor(nums.length / 3);
  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1)
    } else {
      map.set(n, 1)
    }
  }
  for (const key of map.keys()) {
    if (map.get(key) > count) res.push(key)
  }
  return res;
};

console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));
