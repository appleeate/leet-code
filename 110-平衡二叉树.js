/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
	return balanced(root) !== -1

};
const balanced = function (node) {
	//其实是求树深的方法
	if (!node) return 0;
	const left = balanced(node.left);
	const right = balanced(node.right);
	// 在此加入了平衡的判断
	if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
		return -1
	}
	return Math.max(left, right) + 1
};
