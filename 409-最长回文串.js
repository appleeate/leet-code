/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
	let set = new Set();
	let sum = 0;
	for (let i = 0; i < s.length; i++) {
		if (set.has(s[i])) {
			set.delete(s[i]);
			sum += 2;
		} else {
			set.add(s[i])
		}
	}
	return sum + (set.size > 0 ? 1 : 0)
};

console.log(longestPalindrome("abccccdd"));
