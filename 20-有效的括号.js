/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let map = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  for (let i in s) {
    let item = s[i];
    if (map[item]) {
      stack.push(item);
    } else {
      let pop = stack.pop();
      if (item !== map[pop]) {
        return false
      }
    }
  }
  if (stack.length > 0) return false
  return true;
};
console.log(isValid("{[]"));
