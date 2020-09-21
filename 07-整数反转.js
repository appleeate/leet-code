/*
    给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
    假设我们的环境只能存储得下 32 位的有符号整数，
    则其数值范围为 [−231,  231 − 1]。
    请根据这个假设，如果反转后整数溢出那么就返回 0。
     */
let reverse = function (x) {
	let arr = String(x).split("");
	let str = ""
	if (arr[0] === "-") {
		arr.shift();
		let reverseArr = arr.reverse();
		for (let i = 0; i < reverseArr.length; i++) {
			str += String(reverseArr[i])
		}
		str = "-" + str;
	} else {
		let reverseArr = arr.reverse();
		for (let i = 0; i < reverseArr.length; i++) {
			str += String(reverseArr[i])
		}
	}
	if (Number(str) > 2 ** 31 - 1 || Number(str) < (-2) ** 31) return 0
	return Number(str);
};
let s = reverse(120);
console.log(s);

let reverse1 = function (x) {
	let res = '';
	let str = x + ''
	if (x > 0) {
		for (var i = str.length - 1; i >= 0; i--) {
			res += str[i]
		}
	} else {
		for (var i = str.length - 1; i > 0; i--) {
			res = res + str[i]
		}
		res = -res
	}

	if (res < Math.pow(-2, 31) || res >= Math.pow(2, 31) - 1) {
		return 0
	}
	return res * 1
};
