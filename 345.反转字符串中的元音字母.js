/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
	let sArr = s.split("");
	let i = 0, j = sArr.length - 1;
	let map = {
		"a": true,
		"e": true,
		"i": true,
		"o": true,
		"u": true,
		"A": true,
		"E": true,
		"I": true,
		"O": true,
		"U": true,
	};
	for (let k = 0; k < sArr.length; k++) {
		if (i < j) {
			if (map[sArr[i]]) {
				if (map[sArr[j]]) {
					[sArr[i], sArr[j]] = [sArr[j], sArr[i]];
					i++;
				}
				j--;
			} else {
				i++
			}
		}
	}
	return sArr.join("");
};

let s = "hello";
// console.log(reverseVowels(s));
console.log(reverseVowels("leetcode"));
