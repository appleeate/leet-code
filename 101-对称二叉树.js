/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { getTreeFromLayerOrderArray } = require("./tools/tree");

let treeNode = getTreeFromLayerOrderArray([1,2,2,3,4,4,3]);

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

console.log(isSymmetric(treeNode));
console.log(isSymmetric(getTreeFromLayerOrderArray([1,2,2,null,3,null,3])));
