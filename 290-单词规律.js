/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
	let mapLeft = new Map();
	let mapRight = new Map();
	let strArr = s.split(" ");
	if (pattern.length !== strArr.length) return false;
	for (let i = 0; i < pattern.length; i++) {
		const getLeft = mapLeft.get(pattern[i]);
		const getRight = mapRight.get(strArr[i]);
		if (!getLeft) {
			mapLeft.set(pattern[i], strArr[i])
		} else if (getLeft !== strArr[i]) { // 核心 反向判断
			return false
		}

		if (!getRight) {
			mapRight.set(strArr[i], pattern[i])
		} else if (getRight !== pattern[i]) { // 核心 反向判断
			return false
		}
	}

	return true;
};

console.log(wordPattern("aaa", "aa aa aa aa"));
// console.log(wordPattern("abba", "dog dog dog dog"));
