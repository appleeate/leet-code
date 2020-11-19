/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  let count = 0;
  let signs = new Uint8Array(n); // 初始化 假设所有的数字都是质数

  for (let i = 2; i < n; i++) {
    if (!signs[i - 1]) { // 质数进入这个方法
      count++;
      // console.log(i);
      for (let j = i * i; j <= n; j += i) { // 初始值质数的平方 然后每循环加上质数
        signs[j - 1] = 1; // 符合的设置为非质数
      }
    }
  }
  // console.log(signs);
  return count;

};
console.log(countPrimes(10));
