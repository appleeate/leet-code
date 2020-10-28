/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (root, sum) {
	let res = [];
	const dfs = (node, total, nums) => {
		total += node.val;
		nums.push(node.val);
		if (node.left || node.right) {
			node.left && dfs(node.left, total, nums.slice());
			node.right && dfs(node.right, total, nums.slice());
		} else if (total === sum) {
			res.push(nums)
		}
	};
	return root && dfs(root, 0, []) || res;
};
