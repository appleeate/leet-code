/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  // left 储存( start储存*
  const left = [], star = [];
  for (let i = 0; i < s.length; i++) {
      const item = s[i]
      if (item === '(') {
          left.push(i)
      } else if (item === '*') {
          star.push(i)
      } else {
        // 优先匹配(
          if (left.length) {
              left.pop()
          } else {
            // star为空的话 直接失败
              if (star.length === 0) return false
              star.pop()
          }
      }
  }
// 如果左的长度大于*的长度 直接失败
  if (left.length > star.length) return false
  // star此时当作右括号使用
  // 如果在左括号右边的话 直接失败
  // 如果左括号匹配完 剩下的*全部当作空串即可
  while (left.length && star.length) {
      if (left.pop() > star.pop()) return false
  }
  return true
};