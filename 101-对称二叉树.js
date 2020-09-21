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

let treeNode1 = new TreeNode(1);
let treeNode2L = new TreeNode(2);
let treeNode2R = new TreeNode(2);
let treeNode3L = new TreeNode(3);
let treeNode3R = new TreeNode(3);
let treeNode4L = new TreeNode(4);
let treeNode4R = new TreeNode(4);
let treeNode5L = new TreeNode(5);
let treeNode5R = new TreeNode(5);
let treeNode6L = new TreeNode(6);
let treeNode6R = new TreeNode(6);
let treeNode7L = new TreeNode(7);
let treeNode7R = new TreeNode(7);
let treeNode8L = new TreeNode(8);
let treeNode8R = new TreeNode(8);
treeNode1.left = treeNode2L;
treeNode1.right = treeNode2R;
treeNode2L.left = treeNode3L;
treeNode2L.right = treeNode4L;
treeNode2R.left = treeNode4R;
treeNode2R.right = treeNode3R;
treeNode3L.left = treeNode5L;
treeNode3L.right = treeNode6L;
treeNode4L.left = treeNode7L;
treeNode4L.right = treeNode8L;
treeNode4R.left = treeNode8R;
treeNode4R.right = treeNode7R;
treeNode3R.left = treeNode6R;
treeNode3R.right = treeNode5R;

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
	if (root === null) return true;
	return handle(root.left, root.right);
};

function handle(left, right) {
	if (left === null && right === null) return true;
	if (left === null || right === null) return false;

	return left.val === right.val && handle(left.left, right.right) && handle(left.right, right.left);
}

console.log(isSymmetric(treeNode1));
