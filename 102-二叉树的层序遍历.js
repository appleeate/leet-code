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
const levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length > 0) {
    let len = queue.length;
    let arr = [];
    while (len) {
      let node = queue.shift();
      arr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
    res.push(arr);
  }
  return res;

};
console.log(getTreeFromLayerOrderArray([3, 9, 20, null, null, 15, 7]));
