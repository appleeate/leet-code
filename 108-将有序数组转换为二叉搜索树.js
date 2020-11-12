/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  const buildBST = (nums, start, end) => {
    if (start > end) return null;
    const midIndex = (start + end) >>> 1;
    const root = new TreeNode(nums[midIndex]);
    root.left = buildBST(nums, start, midIndex - 1);
    root.right = buildBST(nums, midIndex + 1, end);

    return root;
  };
  return buildBST(nums, 0, nums.length - 1)
};
