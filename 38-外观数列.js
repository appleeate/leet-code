/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
	if (n === 1) return "1";
	const help = _ => {
		let m = 1;
		let res = "";
		for (let i = 0; i < _.length; i++) {
			if (_[i] === _[i + 1]) {
				m++;
			} else {
				res += m + _[i];
				m = 1
			}
		}
		n--;
		return n === 1 ? res : help(res);
	};
	return help("1")
};

console.log(countAndSay(4));
