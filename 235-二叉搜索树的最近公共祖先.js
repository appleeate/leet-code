/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 由二叉搜索树的性质，如果 p.val 和 q.val 都比 root.val 小，那么 p、q 肯定在 root 的左子树。
// 那问题规模就变小了，递归左子树就行。
// 如果 p.val 和 q.val 都比 root.val 大，则递归右子树。
// 其他情况，root 即为所求，为什么？
// 因为只要不是 p 和 q 的值都大于（小于）root.val，即，只要不同处于 root 的一个子树
// 就只有这三种情况：
// p 和 q 分居 root 的左右子树。
// root 就是 p，q 在 p 的子树中。
// root 就是 q，p 在 q 的子树中
// 而这三种情况，p 和 q 的最近公共祖先都是 root。

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p , q);
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p , q);
  return root;
};
