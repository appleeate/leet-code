/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  if (!preorder.length) return null;
  const root = new TreeNode(preorder[0]); // 由前序遍历 拿到根节点
  const index = inorder.indexOf(preorder[0]); // 取到 根(中)节点 在中序遍历的下下标 用来确定左右子树
  const inLeft = inorder.slice(0, index); // 取到左子树的中序遍历
  const inRight = inorder.slice(index + 1); // 取到右子树的中序遍历
  const preLeft = preorder.slice(1, index + 1); // 取到左子树的前序遍历  前序遍历的下标0是根节点 下表1一定是左节点
  const preRight = preorder.slice(index + 1); // 取到右子树的前序遍历
  root.left = buildTree(preLeft, inLeft);
  root.right = buildTree(preRight, inRight);
  return root;
};

// console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([1,2,3,4,5,6,7,8,9], [2,4,3,1,5,8,7,9,6]));
