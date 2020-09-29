/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
	let res = [];
	if (digits === "") return res;
	let arr = [];
	let map = {
		"2": ["a", "b" ,"c"],
		"3": ["d", "e" ,"f"],
		"4": ["g", "h" ,"i"],
		"5": ["j", "k" ,"l"],
		"6": ["m", "n" ,"o"],
		"7": ["p", "q" ,"r", "s"],
		"8": ["t", "u" ,"v"],
		"9": ["w", "x" ,"y", "z"],
	};
	digits.split("").forEach(_ => {
		arr.push(map[_])
	});
	let dfs = (temp, depth) => {
		if (depth === arr.length) return res.push([...temp].join(""));
		for (let i = 0; i < arr[depth].length; i++) {
			temp.push(arr[depth][i]);
			dfs(temp, depth + 1);
			temp.pop()
		}
	};
	dfs([], 0);
	return res;
};

console.log(letterCombinations("23"));
