/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  let res = [];
  const dfs = (node, path) => {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      path += node.val;
      res.push(path)
    }
    path += root.val + '->';
    dfs(node.left,  path);
    dfs(node.right, path);
  };
  dfs(root, "");
  return res;
};
