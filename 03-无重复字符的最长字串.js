/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
	let n = s.length;
	// 滑动窗口为s[left...right]
	let left = 0;
	let right = -1;
	let freqMap = {}; // 记录当前子串中下标对应的出现频率
	let max = 0; // 找到的满足条件子串的最长长度

	while (left < n) {
		let nextLetter = s[right + 1];
		if (!freqMap[nextLetter] && nextLetter !== undefined) {
			freqMap[nextLetter] = 1;
			right++
		} else {
			freqMap[s[left]] = 0;
			left++
		}
		max = Math.max(max, right - left + 1)
	}

	return max
};

console.log(lengthOfLongestSubstring("abcabcbb"));

