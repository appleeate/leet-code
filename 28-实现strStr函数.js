/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
	if (needle === "") return 0;
	if (haystack.length < needle.length) return -1;
	let i = 0;
	let len = haystack.length;
	while (i < len) {
		if (haystack[i] === needle[0] && haystack.substring(i, i + needle.length) === needle) return i;
		i++;
	}
	return -1;
};

console.log(strStr("hello", 'll'));
