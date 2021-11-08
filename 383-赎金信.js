/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!map[magazine[i]]) {
      map[magazine[i]] = 1;
    } else {
      map[magazine[i]] ++
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!map[ransomNote[i]]) return false;
    if (map[ransomNote[i]]) map[ransomNote[i]]--
  }
  return true;
};
console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('aa', 'ab'));