/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const res = [];
  const inorder = (root, depth) => {
    if (root !== null) {
      if (!res[depth]) res[depth] = []
      inorder(root.left, depth + 1)
      //进行处理
      res[depth].push(root.val)
      inorder(root.right, depth + 1)
    }
  }
  inorder(root, 0);
  return res;
};