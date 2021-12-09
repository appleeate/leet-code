const { getTreeFromLayerOrderArray } = require("../tools/tree");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  // 深度优先遍历
  if (root === null) return [];
  // 中序遍历
  const res = []
  const inorder = (root, depth) => {
    if (root !== null) {
      if (!res[depth]) {
        res[depth] = []
      }
      inorder(root.left, depth + 1);
      res[depth].push(root.val)
      inorder(root.right, depth + 1);
    }
  }
  inorder(root, 0);
  return res.flat();
};

var levelOrder1 = function (root) {
  // 广度优先遍历
  if (root === null) return [];
  const res = [];
  const queue = [root]; // 根结点入队列
  debugger;
  while (queue.length) {
    const n = queue.shift()// 出列
    res.push(n.val);
    n.left && queue.push(n.left); // 入列
    n.right && queue.push(n.right); // 入列
  }
  return res;
}

console.log(levelOrder1(getTreeFromLayerOrderArray([1, null, 2, 2, 3, 4, 4, 3, 6, 7, 9])));