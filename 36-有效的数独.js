/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
	let lineMap = new Map();
	let threeMap = new Map();
	for (let i = 0; i < board.length; i++) {
		if (lineMap.has(".")) continue;
		if (i)
	}
};
