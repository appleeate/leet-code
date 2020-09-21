/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const findTheDifference = function (s, t) {
	for(let item of s){
		t = t.replace(item, '')
	}
	return t
};

console.log(findTheDifference("abcd", "abcde"));
