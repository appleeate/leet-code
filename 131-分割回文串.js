/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const res = [];
  const isPalindrome = (s, l, r) => {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  const helper = (s, start, temp, res) => {
    if (start === s.length) {
      res.push([...temp]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      if (!isPalindrome(s, start, i)) continue;
      temp.push(s.substring(start, i + 1));
      helper(s, i + 1, temp, res);
      temp.pop()
    }
  };

  helper(s, 0, [], res);
  return res;
};
