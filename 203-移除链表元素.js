/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
  let res = new ListNode();
  res.next = head;
  let tmp = res;
  while (tmp.next) {
    if (tmp.next.val === val) {
      tmp.next = tmp.next.next
    } else {
      tmp = tmp.next
    }
  }
  return res.next;
};
