/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  let res = [];
  const dfs = (start, comb, sum) => {
    if (comb.length === k) {        // 爆掉了，不用继续选数了
      if (sum === n) {      // 加入解集
        res.push(comb.slice()); // temp的拷贝
      }
      return;                   // 结束当前递归
    }
    for (let i = start; i <= 9; i++) { // 枚举出选择，从start开始
      comb.push(i);          // 加入“部分解”
      dfs(i + 1, comb, sum + i); // 往下继续选择，同时sum累加上当前数字
      comb.pop();                        // 撤销选择
    }
  };
  dfs(1, [], 0);
  return res;
};

console.log(combinationSum3(3, 9));
