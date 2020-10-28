/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
	const helper = root => {
		if (root === null) return null;
		if (root.right) helper(root.right);
		if (root.left) {
			const leftFirst = helper(root.left);
			let leftLast = leftFirst;
			while (leftLast.right) {
				leftLast = leftLast.right
			}
			leftLast.right = root.right;
			root.right = leftFirst;
			root.left = null;
		}
		return root;
	};
	helper(root)
};
