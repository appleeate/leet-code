/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (root === null) return root;
  /*后序遍历*/
  invertTree(root.left);
  invertTree(root.right);
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
  /*先序遍历*/
  // const temp = root.left;
  // root.left = root.right;
  // root.right = temp;
  // invertTree(root.right);
  // invertTree(root.left);
  // return root;
};
