/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function (s) {
	return s.split(" ").filter(item => item !== "").length;
};

// console.log(countSegments("Hello, my name is John"));
console.log(countSegments("Hello, my name is John"));
// console.log(countSegments("a, b"));
