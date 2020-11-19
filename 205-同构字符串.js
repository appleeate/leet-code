/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map1[s[i]]) map1[s[i]] = t[i];
    if (!map2[t[i]]) map2[t[i]] = s[i];
    if (map1[s[i]] !== t[i] || map2[t[i]] !== s[i]) return false;
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bat"));
console.log(isIsomorphic("ab", "aa"));
