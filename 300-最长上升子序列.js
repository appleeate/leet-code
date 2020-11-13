/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  // 动态规划
  let n = nums.length;
  if(!n) return 0;
  let dp = new Array(n).fill(1);
  // debugger;
  for(let i = 1; i < n; i++){
    //我们需要找前面比自己小的；
    for(let j = 0; j < i; j++){
      if(nums[i] > nums[j]){
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);

};
console.log(lengthOfLIS([10,9,2,5,3,7,101,18,19]));
