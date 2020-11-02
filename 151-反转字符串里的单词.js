/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  // return s.split(" ").filter(_ => _ !== "").reverse().join(" ");
  let left = 0;
  let right = s.length - 1;
  let queue = [];
  let word = '';
  while (s.charAt(left) === ' ') left++;
  while (s.charAt(right) === ' ') right--;
  while (left <= right) {
    let char = s.charAt(left);
    if (char === ' ' && word) {
      queue.unshift(word);
      word = ''
    } else if (char !== ' ') {
      word += char
    }
    left++
  }
  queue.unshift(word);
  return queue.join(' ')

};

console.log(reverseWords("Alice does not even    like bob"));
