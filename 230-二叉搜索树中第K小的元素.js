/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const {getTreeFromLayerOrderArray} = require("./tools/tree");
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  // 二叉搜索树 直接使用中序遍历
  // 维护一个数组 数组的下表就是 k - 1;
  const res = [];
  const inorder = (root) => {
    if (root == null) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res[k - 1];
};
console.log(kthSmallest(getTreeFromLayerOrderArray([5, 3, 6, 2, 4, null, null, 1]), 3));
console.log(kthSmallest(getTreeFromLayerOrderArray([5, 3, 6, 2, 4, null, null, 1]), 1));
