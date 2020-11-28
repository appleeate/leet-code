/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  while (n > 1) n /= 2;
  return n === 1;
};

console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(8));
