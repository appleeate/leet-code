/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  if (!nums || !nums.length) return [];
  let cur = nums[0], arr = [], curArr = [cur];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === (cur + 1)) {
      curArr[1] = nums[i]
    } else {
      arr.push(curArr.join('->'));
      curArr = [];
      curArr[0] = nums[i];
    }
    cur = nums[i];
  }
  arr.push(curArr.join("->"));
  return arr;

};

console.log(summaryRanges([0,1,2,4,5,7]));
