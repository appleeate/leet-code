/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
  // 一个保留后面，一个保留前面
  return `${s.slice(n)}${s.slice(0, n)}`
};