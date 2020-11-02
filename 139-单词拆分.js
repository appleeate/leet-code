/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  let dp = new Array(s.length).fill(false);
  // debugger;
  for (let i = 0; i < s.length; i++) {
    if (set.has(s.substring(0, i + 1))) {
      dp[i] = true;
      continue
    }

    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substring(j + 1, i + 1))) {
        dp[i] = true;
        break
      }
    }
  }
  console.log(dp);
  return dp[s.length - 1];
};

console.log(wordBreak("applepenapple", ["apple", "pen"]));
