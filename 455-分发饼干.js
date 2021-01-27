/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
  // 经典 贪心算法
  // 先满足胃口小的 然后依次递增
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let child = 0;
  let cookie = 0;
  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie]) {
      child++;
    }
    cookie++;  // 无论是否满足都要进行 匹配下一饼干
  }
  return child;
};
console.log(findContentChildren([1, 2, 3], [1, 3]));
