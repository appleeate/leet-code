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
const zigzagLevelOrder = function (root) {
  if (root === null) return [];
  let res = [];
  const traversal = (root, depth) => {
    if (root !== null) {
      if (res[depth] === undefined) {
        res[depth] = [];
      }
      if (depth & 1) { // 位运算符 0 & 1 -> 0; 1 & 1 -> 1; 2 & 1-> 0; 3 & 1 -> 1;
        res[depth].unshift(root.val)
      } else {
        res[depth].push(root.val)
      }
      traversal(root.left, depth + 1);
      traversal(root.right, depth + 1);
    }
  };
  traversal(root, 0);
  return res;
};
zigzagLevelOrder(getTreeFromLayerOrderArray([3,9,20,null,null,15,7]));
