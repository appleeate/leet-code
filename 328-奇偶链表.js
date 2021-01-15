/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function(head) {
  if (!head) return head;
  const evenHead = head.next;
  let odd = head, even = evenHead; //odd 奇 even 偶
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next; // 指针前进
    even.next = odd.next;
    even = even.next; // 指针前进
  }
  odd.next = evenHead; // 拼接 奇偶链表
  return head;
};
