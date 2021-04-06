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

const subsets2 = (nums) => {
  const res = [];
  const dfs = (index, list) => {
    res.push(list.slice());     // 调用子递归前，加入解集
    for (let i = index; i < nums.length; i++) { // 枚举出所有可选的数
      list.push(nums[i]);       // 选这个数
      dfs(i + 1, list);         // 基于选这个数，继续递归，传入的是i+1，不是index+1
      list.pop();               // 撤销选这个数
    }
  };
  dfs(0, []);
  return res;
};


// console.log(subsets([1, 2]));
console.log(subsets1([1, 2, 3]));
console.log(subsets2([1, 2]));
console.log(subsets1([1, 2, 3, 4]));
