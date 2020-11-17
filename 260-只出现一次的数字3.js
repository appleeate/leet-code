/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map.has(num) ? map.delete(num) : map.set(num, 1);
  }
  return [...map.keys()];

};
// console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([1, 2, 1, 0]));
