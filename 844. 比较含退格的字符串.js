/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  const sStack = [], tStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      sStack.push(s[i])
    } else {
      sStack.pop()
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== "#") {
      tStack.push(t[i])
    } else {
      tStack.pop()
    }
  }
  return sStack.join("") === tStack.join("")
};