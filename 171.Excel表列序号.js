/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function (s) {
	let res = 0;
	for (let i = 0; i < s.length; i++) {
		res += (s[i].charCodeAt() - 65 + 1) * Math.pow(26, s.length - i - 1)
	}
	return res;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("B"));
