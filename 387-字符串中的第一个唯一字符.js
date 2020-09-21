/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
	let obj = {};
	let map = new Map();
	for (let i = 0; i < s.length; i++) {
		if (!obj[s[i]]) {
			obj[s[i]] = 1;
			map.set(s[i], i);
		} else {
			map.delete(s[i]);
		}
	}
	if (map.size === 0) {
		return -1;
	}
	return map.values().next().value;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aa"));
