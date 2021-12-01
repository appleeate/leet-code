/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
  for (const item of s) {
    if(s.indexOf(item) === s.lastIndexOf(item)) return item;
  }
  return ' '
};
console.log(firstUniqChar(""));