/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
	if (!intervals || !intervals.length) return [];
	intervals.sort((a, b) => a[0] - b[0]);
	let res =  [intervals[0]];
	for (let i = 1; i < intervals.length ; i++) {
		let resEnd = res.length - 1;
		if (res[resEnd][1] >= intervals[i][0]) {
			res[resEnd][1] = Math.max(res[resEnd][1], intervals[i][1])
		} else {
			res.push(intervals[i])
		}
	}
	return res;
};
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
