/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
	// nums = [...new Set(nums)];
	// nums.sort();
	// nums = nums.map((i, index) => {
	// 	if (i - 1 === index) return 0;
	// 	return index + 1
	// });
	// return nums.filter(_ => _!== 0);


	let set = new Set();
	let len = nums.length;
	for (let i = 1; i <= len; i++) {
		set.add(i)
	}
	nums.forEach(_ => {
		if (set.has(_)) set.delete(_)
	});
	return [...set]


};
console.log(findDisappearedNumbers([1, 1]));
// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
