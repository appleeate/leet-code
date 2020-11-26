/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
  let stack = [], n = 0, sign = "+";
  const map = {
    "+": n => stack.push(n),
    "-": n => stack.push(-n),
    "*": n => stack.push(stack.pop() * n),
    "/": n => stack.push(~~(stack.pop() / n)),
  };
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === ' ') continue;
    if (s[i] <= '9' && s[i] >= '0') {
      n = n * 10 + parseInt(s[i]);
      continue
    }
    map[sign] && map[sign](n);
    sign = s[i];
    n = 0
  }
  return stack.reduce((acc, cur) => acc + cur, 0)

};

console.log(calculate(" 3+5 / 2 "));
console.log(calculate("3+2*2"));
