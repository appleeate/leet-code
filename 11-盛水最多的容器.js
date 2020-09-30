/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
	if (height.length<2) return 0;
	let left = 0, right = height.length;
	let max = 0;
	let getMax = () => Math.max(max, (right - left) *  Math.min(~~height[left], ~~height[right]));
	while(left< right) {
		if (~~height[left] < ~~height[right]) {
			max = getMax();
			left++;
		} else {
			max = getMax();
			right--;
		}
	}
	return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([8, 8, 8]));
console.log(maxArea([3, 1, 6, 4, 5, 2]));
