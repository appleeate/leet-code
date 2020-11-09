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
  return res;
};

const levelOrder1 = function (root) { // 栈写法
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

// console.log(levelOrder(getTreeFromLayerOrderArray([3, 9, 20, null, null, 15, 7])));
console.log(levelOrder(getTreeFromLayerOrderArray([1,null,2,2,3,4,4,3,6,7,9])));
