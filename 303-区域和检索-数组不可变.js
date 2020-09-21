/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
	let sumDp = [0];
	// 求n项的和  所以求区间 就是大的减小的
	for (let i = 0, len = nums.length; i < len; i++) {
		sumDp.push(sumDp[i] + nums[i]);
	}
	this.re = sumDp;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
	let re = this.re;
	return re[j + 1] - re[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

let numArr = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArr.sumRange(0, 5));
