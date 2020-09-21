/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function (n) {
	let map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let res = "";
	let index = n;
	while(index > 0) {
		index -= 1;
		let a = index % 26;
		index = ~~(index/26);
		res = `${map[a]}${res}`
	}
	return res;
};

console.log(convertToTitle(2));
