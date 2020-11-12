/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const sum = n => {
    n += "";
    let sum = 0;
    for (let num of n) sum += num * num;
    return sum;
  };
  let slow = sum(n);
  let fast = sum(slow);
  while (slow !== fast) {
    slow = sum(slow);
    fast = sum(sum(fast));
  }
  return slow === 1
};

console.log(isHappy(19));
