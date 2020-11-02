/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  // 动态规划
  // 自底向上
  const dp = new Array(triangle[triangle.length - 1].length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = triangle[triangle.length - 1][i]
  }
  for (let i = dp.length - 2; i >= 0; i--) {
    // 从倒数后两行开始
    for (let j = 0; j < triangle[i].length; j++) {
      // debugger;
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  console.log(dp);
  return dp[0]
};

minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3],
  [4, 1, 8, 8, 15],
]);
