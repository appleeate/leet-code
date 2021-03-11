/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const res = [];

  const dfs = (index, list) => {
    if (index === nums.length) { // 指针越界
      res.push(list.slice());   // 加入解集
      return;                   // 结束当前的递归
    }
    list.push(nums[index]); // 选择这个元素
    dfs(index + 1, list);   // 往下递归
    list.pop();             // 递归结束，撤销选择
    dfs(index + 1, list);   // 不选这个元素，往下递归
  };

  dfs(0, []);
  return res;

};

const subsets1 = function (nums) {
  let dp = new Array(nums.length).fill([]);
  dp[0] = [[]];
  for (let i = 1; i <= nums.length; i++) {
    let arr = dp[i - 1].map(_ => [..._, nums[i - 1]]);
    dp[i] = [...dp[i - 1], ...arr]
  }
  return dp[nums.length]
};

// console.log(subsets([1, 2]));
console.log(subsets1([1, 2, 3]));
console.log(subsets1([2, 3, 1]));
