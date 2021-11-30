/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const map = new Map();
  for (let item of nums) {
    if (map.has(item)) return item;
    map.set(item, true)
  }
};