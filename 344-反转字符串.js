/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
	let i = 0, j = s.length - 1;
	for (let k = 0; k < s.length; k++) {
		if (i< j) {
			[s[i++], s[j--]] = [s[j], s[i]]
		}
	}
};
let arr = ["h","e","l","l","o","z"];
reverseString(arr);
console.log(arr);
