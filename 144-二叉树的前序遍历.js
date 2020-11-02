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
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  const res = [];
  const preorder = (root) => {
    if (root == null) {
      return;
    }
    res.push(root.val);
    preorder(root.left);
    preorder(root.right);
  };
  preorder(root);
  return res;
};
