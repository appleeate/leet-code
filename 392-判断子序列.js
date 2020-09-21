/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
	if (s.length === 0) return true;
	let short = 0;
	let long = 0;
	while (long < t.length) {
		if (s[short] === t[long]) {
			short++
		}
		if (short > s.length - 1) return true;
		long++
	}
	return false;
};

console.log(isSubsequence("abc","ahbgdc"));
console.log(isSubsequence("axc","ahbgdc"));
