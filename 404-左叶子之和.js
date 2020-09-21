/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
	if (!root) return 0;
	if (root.left) {
		if (!root.left.left && !root.left.right) {
			return root.left.val + sumOfLeftLeaves(root.right)
		} else {
			return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
		}
	} else {
		return sumOfLeftLeaves(root.right)
	}
};

function handle(left, right, sum) {
	if (left === null) return sum;
	return sum + handle(left.left, left.right, sum) + handle(right.left, right.right, sum);
}
