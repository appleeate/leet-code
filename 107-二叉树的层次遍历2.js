/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {getTreeFromLayerOrderArray} = require("./tools/tree");
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
  // 中序遍历
  if (root === null) return [];
  let res = [];
  const inorder = (root, depth) => {
    if (root !== null) {
      if (!res[depth]) {
        res[depth] = []
      }
      inorder(root.left, depth + 1);
      res[depth].push(root.val);
      inorder(root.right, depth + 1);
    }
  };
  inorder(root, 0);
  return res.reverse();
};

console.log(levelOrderBottom(getTreeFromLayerOrderArray([3, 9, 20, null, null, 15, 7])));
