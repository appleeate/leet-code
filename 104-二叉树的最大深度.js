/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

let treeNode1 = new TreeNode(3);
let treeNode9 = new TreeNode(9);
let treeNode20 = new TreeNode(20);
let treeNode7 = new TreeNode(7);
let treeNode15 = new TreeNode(15);
treeNode1.left = treeNode9;
treeNode1.right = treeNode20;
treeNode20.left = treeNode15;
treeNode20.right = treeNode7;

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
	if(!root) {
		return 0;
	} else {
		const left = maxDepth(root.left);
		const right = maxDepth(root.right);
		return Math.max(left, right) + 1;
	}
};

console.log(maxDepth(treeNode1));
