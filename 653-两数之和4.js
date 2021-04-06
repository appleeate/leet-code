const {getTreeFromLayerOrderArray} = require("./tools/tree");
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
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function (root, k) {
  const set = new Set();
  const diff = node => {
    if (node === null) return false;
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    return diff(node.left) || diff(node.right);
  };
  return diff(root);
};

console.log(findTarget(getTreeFromLayerOrderArray([5, 3, 6, 2, 4, null, 7]), 10));
