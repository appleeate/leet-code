/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  let str = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase()
  let l = 0, r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
};

const isPalindrome_ = s => {
  const isValid = c => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= "Z") || (c >= '0' && c <= '9');
  s = s.toLowerCase();
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (!isValid(s[l])) {
      l++;
      continue;
    }
    if (!isValid(s[r])) {
      r--;
      continue;
    }
    if (s[l] !== s[r]) return false;
    r--;
    l++;
  }
  return true
};

console.log(isPalindrome_("A man, a plan, a canal: Panama"));
